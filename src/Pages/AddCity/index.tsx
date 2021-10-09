import React, {   ChangeEvent,
  useRef,
  useEffect,
  useCallback,
  useState
} from "react";
import {FormHandles } from '@unform/core'
import { Form } from '@unform/web'

import Input  from "../../components/Input"
import '../../assets/form.scss'
import newCityStyle from "./newCity.module.scss";
import { storage } from "../../Firebase";

const NewCity = () => {
  const [image, setImage] = useState<File>()
  const [preview, setPreview] = useState<string>();
  const [url, setUrl] = useState("");

  const formRef = useRef<FormHandles>(null);

  const handleImageChange = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.files){
      setImage(e.target.files[0])
      setPreview(URL.createObjectURL(e.target.files[0]))
    }
  }, [])
  const handleUpload = async () => {
    if(image){
        // const uploadTask = storage.ref(`images/${image.name}`).put(image);
        // uploadTask.on("state_changed", () => { storage
        //     .ref("images")
        //     .child(image.name)
        //     .getDownloadURL()
        //     .then(url => {
        //       return url
        //     });
        // }
      // );
    } 
  };
  const handleFormSubmit = async () =>{ 
    await handleUpload();
  }


  return (
    <>
      <Form ref={formRef} onSubmit={handleFormSubmit } className="form" id={newCityStyle.divNewCity}>

        <h3>Novo Município</h3>

        <Input name="cityName" placeholder="Nome municipio" type="text" className="inputField" id={newCityStyle.txtCity} />
        <Input name="cityUrlPortal" placeholder="Link do portal de transparência" type="text" className="inputField" id={newCityStyle.txtURL} />

        <section  id={newCityStyle.imageArea}>
              {preview && <img src={preview} alt="Preview"/>}
              <label htmlFor="imgInput">Upload Image</label>
              <input type="file" id="imgInput" accept="image/png, image/jpeg, image/jpg" onChange={handleImageChange}/>
        </section>

        <button type="submit" className="btnEntrar">Cadastrar</button>

      </Form>
    </>
  );
};
export default NewCity;