import * as Yup from "yup";
import { ThoughtsStatus } from "../../Services/ThoughtsService/ThoughtDto";
export const ThoughtValidationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  content: Yup.string().required("Description is required"),
  date: Yup.date().required("Date is required"),
  status: Yup.string()
  .oneOf(Object.values(ThoughtsStatus), 'Invalid role')
  .required('Role is required'),
});
