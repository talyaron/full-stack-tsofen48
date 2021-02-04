import React, { useState } from "react";
import axios from "axios";
export default function UploadFiles() {
  const [state, setState] = useState({ selectedFile: null });
  // On file select (from the pop up)
  let onFileChange = (event) => {
    // Update the state
    setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  let onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("myFile", state.selectedFile, state.selectedFile.name);

    // Details of the uploaded file
    console.log(state.selectedFile);

    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);
  };

  // File content to be displayed after
  // file upload is complete
  let fileData = () => {
    if (state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {state.selectedFile.name}</p>
          <p>File Type: {state.selectedFile.type}</p>
          <p>
            Last Modified: {state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <button style={{float: 'left'}} className="uploadBtn" onClick={onFileUpload}>
            הוסף קובץ +
          </button>

          <br />
          {/* <h4>Choose before Pressing the Upload button</h4> */}
        </div>
      );
    }
  };

  return (
    <div>
      <div>
        <input type="file" onChange={onFileChange} />
      </div>
      {fileData()}
    </div>
  );
}
