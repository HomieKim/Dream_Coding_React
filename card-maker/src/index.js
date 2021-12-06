import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import AuthService from "./service/auth_service";
import { firebaseApp } from "./service/firebase";
import ImageUploader from "./service/image_uploader";
import ImgInput from "./components/img_input/img_input";
import CardRepository from './service/card_repository';


const cardRepository = new CardRepository(firebaseApp);
const authService = new AuthService(firebaseApp);
const imageUploader = new ImageUploader();
const FileInput = (props) => (
  <ImgInput {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
