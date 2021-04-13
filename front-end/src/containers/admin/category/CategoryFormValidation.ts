import * as Yup from "yup";

export default Yup.object().shape({
  title: Yup.string().required("Title is required"),
  slug: Yup.string().required("Slug is required"),
  color: Yup.string().required("Color is required"),
});
