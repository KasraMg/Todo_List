// import { object, string } from 'yup'
import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  message: Yup.string() 
  .min(3, "message must have 3 characters")
  .max(200, "message must have a maximum of 200 characters")
  .required("Enter the Message"),

  email: Yup.string()
    .email("Email is not valid")
    .min(10, "Email must have 10 characters")
    .max(30, "Email must have a maximum of 30 characters") 
    .required("Enter the email"),
 
    name: Yup.string() 
    .min(3, "Name must have 3 characters")
    .max(12, "Name must have a maximum of 12 characters")
    .required("Enter the Name"),

    password: Yup.string() 
    .min(3, "Password must have 3 characters")
    .max(12, "Password must have a maximum of 12 characters")
    .required("Enter the Password"),
    reapetPassword: Yup.string()  
    .required("Enter the Password"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
    
});

export default registerSchema;
