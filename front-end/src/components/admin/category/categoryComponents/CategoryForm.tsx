import { TextField } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import HttpIcon from "@material-ui/icons/Http";
import TitleIcon from "@material-ui/icons/Title";
import ImageIcon from "@material-ui/icons/Image";
import { FormikProps } from "formik";
import { Category } from "types/model";
import styles from "./CategoryForm.module.css";

type Props = {
  validForm: boolean;
  resetValid: () => void;
  categories: Category[];
};

export interface FormValueCategory {
  parent_id: number;
  title: string;
  background_url: any;
  slug: string;
  color: string;
  position: number;
  is_searchable: number;
  is_active: number;
  api?: string;
}

const CategoryForm = (props: Props & FormikProps<FormValueCategory>) => {
  const {
    values,
    errors,
    touched,
    validForm,
    handleChange,
    setFieldValue,
    handleSubmit,
    resetValid,
    categories,
  } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className={styles.title}>Create Category</h1>
        <div className={styles.input_container}>
          <TitleIcon />
          <TextField
            type="text"
            name="title"
            value={values["title"] || ""}
            label="Title"
            onChange={handleChange}
            className={styles.input_w_100}
          />
        </div>
        <div className={styles.input_error}>
          {validForm && touched.title && errors["title"]}
        </div>
        <div className={styles.input_container}>
          <ImageIcon />
          <TextField
            type="file"
            name="background_url"
            onChange={(e: any) => setFieldValue("background_url", e.currentTarget.files[0])}
            fullWidth
            label="Image"
          />
        </div>
        <div className={styles.input_container}>
          <HttpIcon />
          <TextField
            type="text"
            name="slug"
            value={values["slug"] || ""}
            label="Slug"
            onChange={handleChange}
            className={styles.input_w_100}
          />
        </div>
        <div className={styles.input_error}>
          {validForm && touched.slug && errors["slug"]}
        </div>
        <div className={styles.input_container}>
          <ColorLensIcon />
          <TextField
            type="color"
            name="color"
            label="Color"
            value={values["color"] || ""}
            onChange={handleChange}
            className={`${styles.input_w_100} ${styles.input_color}`}
          />
        </div>
        <div className={styles.input_container}>
          <FingerprintIcon />
          <Select
            native
            value={values["parent_id"] || ""}
            name="parent_id"
            onChange={handleChange}
            className={styles.input_w_100}
            inputProps={{
              name: "parent_id",
              id: "age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            {categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </Select>
        </div>
        <div className={styles.btn_container}>
          <button type="submit" onClick={resetValid} className="login">
            Save
          </button>
          <button type="reset" className="login">
            Cancel
          </button>
        </div>
        <div style={{ color: "red", textAlign: "center", marginTop: 16 }}>
          {errors.api}
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
