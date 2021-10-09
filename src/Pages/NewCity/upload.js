const Upload = (e) => {
        if (e.target.files[0]) {
          setImage(e.target.files[0]);
          const uploadTask = storage.ref(`images/${e.target.files[0].name}`).put(image); //antes tava image.name, e essa linha tava no comeco do handleUpload
          handleUpload(uploadTask);
        }
        uploadTask.on(
          "state_changed",
          (snapshot: any) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          (error: any) => {
            console.log(error);
          },
          () => {
            storage
              .ref("images")
              .child(image ? image.name : 'teste')
              .getDownloadURL()
              .then((url: any) => {
                setUrl(url);
              });
          }
        );
      };
}
export default Upload;