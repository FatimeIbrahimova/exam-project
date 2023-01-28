import * as yup from "yup";

export const addFormSchema = yup.object().shape({
  name: yup.string().required("name is required"),
  url: yup.string("url must be string").required("url is required"),
  price: yup.string("price must be number").required("price is required"),
});
