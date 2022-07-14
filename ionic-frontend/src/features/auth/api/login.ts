// External components
import { toast } from "react-toastify";
import { LoginCredentials } from "../types/userCredentials";
import axios from "axios";
import { getFormData } from "util/formUtil";


export async function login(data: LoginCredentials | any, history: any) {
  const response = await fetch("http://localhost:8080/auth/v1/login", {
    method: "POST",

    body: getFormData(data)
  })
    .then((response) => {
      return response.json();

     // localStorage.setItem()
    })
    .catch((error) => {
      console.log("Error ========>", error);
    });

    const loginData = response
    console.log(loginData.data);
    localStorage.setItem("token", loginData.data.token)
  
    localStorage.setItem("user",JSON.stringify(loginData.user) )
    
    if(localStorage.getItem("token")){
      toast.success("Login Successful")
      history.push("/my-events")
    }
}
