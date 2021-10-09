import React, {useState} from "react";
import newCityStyle from "./newCity.module.scss";
import city from "../../assets/img/city.svg";
import url from "../../assets/img/url.svg";
import {storage} from "../../Firebase";
import { render } from "react-dom";
//import {handleUpload} from './newCity';

type Image = {
  lastModified: number,
  name: string,
  size: number,
  type: string,
  lastModifiedDate: string,
  webkitRelativePath: string
}
const NewCity = () => {
  const [imageFile, setImageFile] = useState<Image[]>();
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e: any) => {
    const { target:{files} } = e; 
    files.map((file: Image) =>{
      const [name, size, type] = file;
      console.log(name)
      console.log(size)
      console.log(type)
    })
    // console.log(name)
    // if (e.target.files[0]) {
      //setImage(e.target.files[0]);
      // const uploadTask = storage.ref(`images/${e.target.files[0].name}`).put(image); //antes tava image.name, e essa linha tava no comeco do handleUpload
      // handleUpload(uploadTask);
    // }
  };

  // const handleUpload = (uploadTask: any): any => {
  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot: any) => {
  //       const progress = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );
  //       setProgress(progress);
  //     },
  //     (error: any) => {
  //       console.log(error);
  //     },
  //     () => {
  //       storage
  //         .ref("images")
  //         .child(image ? image.name : 'teste')
  //         .getDownloadURL()
  //         .then((url: any) => {
  //           setUrl(url);
  //         });
  //     }
  //   );
  // };

  // console.log("image: ", image);
  // onChange={handleChange}
  // onClick={handleUpload}
  return (
    <div>
      <form id={newCityStyle.divNewCity}>
        <h3>Novo Município</h3>
        <input type="text" id={newCityStyle.txtCity}></input><br />
        <input type="text" id={newCityStyle.txtURL}></input><br />
        <input type="file" onChange={(e) => handleChange(e)} accept="image/png, image/jpeg, image/jpg" id={newCityStyle.inputImage}  /><br />
        <button type="submit" id={newCityStyle.btnCadastrar} >Cadastrar</button><br />
      </form>
    </div>
  );
};
export default NewCity;