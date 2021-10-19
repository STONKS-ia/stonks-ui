// @ts-nocheck
import React, {   ChangeEvent,
  useRef,
  useCallback,
  useState, 
  useEffect
} from "react";
import {FormHandles } from '@unform/core'
import { useHistory, useParams } from 'react-router-dom';
import { Form } from '@unform/web'
import { ToastContainer } from "react-toastify";
import { Button } from 'primereact/button';

import Input  from "../../components/Input"
import success from "../../utils/success";
import error from "../../utils/error";
import { useAuth } from "../../hooks/auth";
import { storage , ref , uploadBytesResumable, getDownloadURL } from "../../Firebase";
import apiUrl from '../../services/api'
import '../../assets/form.scss'
import newCityStyle from "./newCity.module.scss";

const NewCity = () => {
  const [image, setImage] = useState<File>()
  const [preview, setPreview] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState();
  const history: any = useHistory();
  const { token , signOut } = useAuth();
  const formRef = useRef<FormHandles>(null);
  const { id } = useParams<{id?: any}>();

  useEffect(() => {
    async function getCityById(){
      try{
        await apiUrl.get(`/stonks/cities/${id}`).then(response => {
          const { name, originalPortalUrl, imgUrl } =  response.data.result[0]
          formRef.current?.setData({ 
            cityName: name,
            cityUrlPortal: originalPortalUrl,
           })
           setPreview(imgUrl);
           setUrl(imgUrl);
        });
      } catch (err: Error | AxiosError | any) {
          if(err.response){
            if (err.response.status === 403) {
              await signOut();
              error('Token has expired, please logon again');
              history.push('/login');
            } else if (err.request) {
              console.log(err.request);
              error(`Error ${err.request}`);
            } else {
              // Something happened in setting up the request that triggered an Error
              error(`Error ${err.message}`);
            };
          }
      };
    };
    if(id){
      getCityById()
    }
  }, [id])
 const handleImageChange = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.files){
      setImage(e.target.files[0])
      setPreview(URL.createObjectURL(e.target.files[0]))
    }
  }, [])
 const handleUpload = async () => {
    if(image){
      const metadata = {
        contentType: image.type,
      };
      const storageRef = ref(storage, `images/${image.name}`);
    
      const uploadTask = uploadBytesResumable(storageRef, image, metadata);
      
      uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
      }}, (error) => { console.log(error)}, () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrl(downloadURL);
          });
        });
    } 
  }

  const handleFormSubmit = async (data) =>{ 
    await handleUpload();
      if(url){
        try {
          const options = { headers: {'Authorization': `Bearer ${token}`} }
          await apiUrl.post('/stonks/cities', {
              name: data.cityName,
              originalPortalUrl: data.cityUrlPortal,
              imgUrl: url
            }, options)

          success('Cidade cadastrada com sucesso')
          history.push('/cities');

      } catch (err: Error | AxiosError | any) {
          if(err.response){
              if (err.response.status === 403) {
                  await signOut;
                  error('Token has expired, please logon again');
                  history.push('/login');
              } else if (err.request) {
                  console.log(err.request);
                  error(`Error ${err.request}`);
              } else {
                  // Something happened in setting up the request that triggered an Error
                  error(`Error ${err.message}`);
              };
          }
        };
    }
  }

  return (
    <>
      <ToastContainer />
      <Form ref={formRef} onSubmit={handleFormSubmit} className="form" id={newCityStyle.divNewCity}>

        <h3>{id ? `Editar` : `Novo`} Município</h3>

        <Input name="cityName" placeholder="Nome municipio" type="text" className="inputField" id={newCityStyle.txtCity} />
        <Input name="cityUrlPortal" placeholder="Link do portal de transparência" type="text" className="inputField" id={newCityStyle.txtURL} />

        <section  id={newCityStyle.imageArea}>
              {preview && <img src={preview} alt="Preview"/>}
              <label htmlFor="imgInput">Upload Image</label>
              <input type="file" id="imgInput" accept="image/png, image/jpeg, image/jpg" onChange={handleImageChange}/>
        </section>

        <Button type="submit" iconPos="right" loading={loading}  id={newCityStyle.btnCadastrar} >{id ? `Salvar` : `Cadastrar`}</Button>

      </Form>
    </>
  );
};
export default NewCity;