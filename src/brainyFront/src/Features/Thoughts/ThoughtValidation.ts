import Yup from "yup";
export const ThoughtValidationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  date: Yup.string(),
  status: Yup.string()
});
