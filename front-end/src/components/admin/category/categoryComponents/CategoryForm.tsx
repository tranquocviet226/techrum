import { Grid, makeStyles, TextField } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Select from "components/admin/common/select/Selects";
import { FormikProps } from "formik";
import { Category } from "types/model";
import styles from "./CategoryForm.module.css";

type Props = {
  validForm: boolean;
  resetValid: () => void;
  categories: Category[];
};

export interface FormValueCategory {
  parent_id: [number];
  title: string;
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
    handleSubmit,
    resetValid,
    categories,
  } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className={styles.title}>Create Category</h1>
        <div className={styles.input_container}>
          <AccountCircle />
          <TextField
            type="text"
            name="title"
            value={values["title"] || ""}
            label="Title"
            onChange={handleChange}
            className={styles.input_w_100}
          />
        </div>
        <div className="input-error">{validForm && touched.title}</div>
        <div className={styles.input_container}>
          <AccountCircle />
          <TextField
            type="text"
            name="slug"
            value={values["slug"] || ""}
            label="Slug"
            onChange={handleChange}
            color="secondary"
            className={styles.input_w_100}
          />
        </div>
        <div className="input-error">{validForm && touched.slug}</div>
        <div className={styles.input_container}>
          <AccountCircle />
          <TextField
            type="color"
            name="color"
            label="Color"
            value={values["color"] || ""}
            onChange={handleChange}
            className={`${styles.input_w_100} ${styles.input_color}`}
          />
        </div>
        <Select data={categories} />
        <button type="submit" onClick={resetValid} className="login">
          Save
        </button>
        <div style={{ color: "red", textAlign: "center", marginTop: 16 }}>
          {errors.api}
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
