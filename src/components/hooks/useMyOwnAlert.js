import { Alert } from "react-st-modal";

export const useMyOwnAlert = () =>{
    const showingAlert = async () => {
        await Alert("Please input a positive number", "error!");
      }
      return {
        showingAlert
    }
}   
