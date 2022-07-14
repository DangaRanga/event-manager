// External components
import { toast } from "react-toastify";
import { LoginCredentials } from "../types/userCredentials";
import axios from "axios";
import { getFormData } from "util/formUtil";


export function login(data: LoginCredentials | any) {
  fetch("http://localhost:8080/auth/v1/login", {
    method: "POST",
    mode: "no-cors",

    body: getFormData(data)
  })
    .then((response) => {
      console.log("Success ========>", response);
     // localStorage.setItem()
    })
    .catch((error) => {
      console.log("Error ========>", error);
    });

  /*
      .then(function (response) {
        if (response.data.success === false) {
          toast.error(response.data.error);
        } else {
          toast.success(response.data.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: 0,
            toastId: "my_toast",
          });
          localStorage.setItem("auth", response.data.token);
        }
      })*/
}