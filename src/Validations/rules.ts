
import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  

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
    .required("Enter the Password")
    
});

export default registerSchema;
