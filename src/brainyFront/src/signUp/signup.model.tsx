
import { SignUpValidationSchema } from "./signup-validation.schema";
import { useFormik } from 'formik';

interface ValidationValues {
  email: string;
  password: string;
  confirmPassword: string;
}

type FormikFieldValues = {
  initialValues: ValidationValues;
  onSubmit: () => void;
}

interface SignUpTypes {
  formik: FormikFieldValues;
}


export const SignUpModel: SignUpTypes = {
  //I want the api call to be here
  //I want the validation to occur in here
  const formik = useFormik({
    initialValues: { email: '', password: '', confirmPassword: '' },
    validationSchema: SignUpValidationSchema,
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission here
    },
  });

  //I want the form submission and error response to occur here
};