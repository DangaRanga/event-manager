import { toast } from "react-toastify";

export function showError(message: string){
    toast.error(message);
}

