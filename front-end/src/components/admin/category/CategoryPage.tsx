import { makeStyles } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { setShowModal } from "actions/common/commonAction";
import { FolderIcon } from "assets/img/admin";
import CategoryFormContainer from "containers/admin/category/CategoryFormContainer";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Category } from "types/model";
import { Input, Select, Button } from "antd";
import "./CategoryPage.css";
import {
  deleteCategoryById,
  updateCategoryById,
} from "actions/common/categoryAction";
import ModalCommon from "../common/Modal/ModalCommon";

const styles = makeStyles({
  container: {
    marginTop: 30,
    border: "1px solid lightgray",
    padding: 15,
  },
  categoryContent: {
    display: "flex",
    alignItems: "center",
    marginBottom: 15,
  },
  contentLeft: {
    fontWeight: 700,
    marginRight: 60,
  },
  imgContainer: {
    display: "flex",
    marginLeft: 15,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imgCategory: {
    width: "50%",
    height: "auto",
    marginBottom: 15,
  },
  w_100: { width: 120 },
  btnSaveContainer: {
    display: "flex",
    justifyContent: "center",
  },
  btnSave: {
    marginRight: 30,
  },
});

type Props = {
  categories: Category[];
  isShowModal: boolean;
};

const CategoryPage = ({ categories, isShowModal }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const classes = styles();
  const dispatch = useDispatch();
  const { Option } = Select;
  const [validForm, setValidForm] = useState(true);
  const [categorySelected, setCategorySelected] = useState<Category>();
  const [title, setTitle] = useState<string>("");
  const [slug, setSlug] = useState<string>("");
  const [subCategory, setSubCategory] = useState<any[]>([]);
  const [color, setColor] = useState<string>("");
  const [backgroundUrl, setBackgroundUrl] = useState<string>();
  const [backgroundImageFile, setBackgroundImageFile] = useState<any>();
  const [children, setChildren] = useState<any[]>([]);
  const [isShowModalConfirm, setIsShowModalConfirm] = useState<boolean>(false);

  useEffect(() => {
    if (categorySelected) {
      const newSubCategory: any[] = [];
      const child: any[] = [];

      categorySelected.sub_category.map((item) => {
        newSubCategory.push(item.title);
        child.push(
          <Option value={item.title} key={item.id}>
            {item.title}
          </Option>
        );
      });

      setTitle(categorySelected.title);
      setSlug(categorySelected.slug);
      setSubCategory(newSubCategory);
      setColor(categorySelected.color);
      setBackgroundUrl(categorySelected.background_url);

      setChildren(child);
    }
  }, [categorySelected]);

  useEffect(() => {
    window.onclick = function (event: any) {
      if (event.target == ref.current) {
        dispatch(setShowModal(false));
      }
    };
  }, []);

  const resetValid = () => {
    setValidForm(true);
  };

  const openModal = () => {
    dispatch(setShowModal(true));
  };

  const handleSelectCategory = (item: Category) => {
    setCategorySelected(item);
    setBackgroundImageFile(undefined);
  };

  const handleChangeTitle = (e: any) => {
    setTitle(e.target.value);
  };
  const handleChangeSlug = (e: any) => {
    setSlug(e.target.value);
  };
  const handleChangeColor = (e: any) => {
    setColor(e.target.value);
  };
  const handleChangeImage = (e: any) => {
    setBackgroundUrl(URL.createObjectURL(e.target.files[0]));
    setBackgroundImageFile(e.target.files[0]);
  };
  const handleChangeSubCategory = (e: any) => {
    setSubCategory(e);
  };

  const handleSubmitUpdate = () => {
    if (categorySelected) {
      const formData = {
        title: title,
        slug: slug,
        color: color,
        backgroundImageFile: backgroundImageFile,
      };
      dispatch(updateCategoryById(categorySelected?.id, formData));
    }
  };

  const handleDelete = () => {
    if (categorySelected) {
      dispatch(deleteCategoryById(categorySelected?.id));
    }
  };

  const _renderTree = (data: Category[]) => {
    return (
      <>
        {data?.map((item: Category) => (
          <details key={item.id}>
            <summary className="d-flex">
              <div className="d-flex">
                {item?.sub_category?.length > 0 ? <PlayArrowIcon /> : <></>}
                <img
                  onClick={() => handleSelectCategory(item)}
                  src={FolderIcon}
                  className="ic_20"
                />
              </div>
              <p
                onClick={() => handleSelectCategory(item)}
                style={{
                  margin: 0,
                  fontWeight: categorySelected?.id === item.id ? 700 : 400,
                  color: categorySelected?.id === item.id ? "red" : "black",
                }}
              >
                {" "}
                {item.title}
              </p>
            </summary>
            <div className="ml-4">
              {item?.sub_category?.length > 0
                ? _renderTree(item?.sub_category)
                : null}
            </div>
          </details>
        ))}
      </>
    );
  };

  const _renderModal = () => {
    return (
      <div ref={ref} className="modal">
        <div className="modal-content">
          <div className="modal-body">
            <CategoryFormContainer
              validForm={validForm}
              resetValid={resetValid}
              handleClose={() => dispatch(setShowModal(false))}
            />
          </div>
        </div>
      </div>
    );
  };

  const _renderModalConfirm = () => {
    return (
      <ModalCommon
        visible={isShowModalConfirm}
        handleOk={handleDelete}
        handleCancel={() => setIsShowModalConfirm(false)}
        title={"Xóa danh mục"}
        content={"Bạn có chắc chắn muốn xóa danh mục này không?"}
      />
    );
  };

  const _renderCategoryContent = () => {
    return (
      <div className={classes.container}>
        <div className={classes.categoryContent}>
          <div className={` ${classes.contentLeft}`}>
            <Input className={classes.w_100} value={"ID"} disabled /> <br />
            <Input className={classes.w_100} value={"Title"} disabled /> <br />
            <Input className={classes.w_100} value={"Slug"} disabled /> <br />
            <Input className={classes.w_100} value={"SubCategory"} disabled />
            <br />
            <Input className={classes.w_100} value={"Color"} disabled />
          </div>
          <div>
            <Input value={categorySelected?.id} disabled />
            <Input onChange={handleChangeTitle} value={title} required />
            <Input onChange={handleChangeSlug} value={slug} required />
            <Select
              style={{ width: "100%" }}
              onChange={handleChangeSubCategory}
              value={subCategory}
              mode="multiple"
            >
              {children}
            </Select>
            <Input
              onChange={handleChangeColor}
              type="color"
              value={color}
              required
            />
          </div>
          <div className={classes.imgContainer}>
            <img src={backgroundUrl} className={classes.imgCategory} />
            <Input onChange={handleChangeImage} type="file" />
          </div>
        </div>
        <div className={classes.btnSaveContainer}>
          <Button
            type="primary"
            onClick={handleSubmitUpdate}
            className={classes.btnSave}
          >
            Save
          </Button>

          <Button
            onClick={() => setIsShowModalConfirm(true)}
            danger
            type="primary"
          >
            Delete
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div>
      {isShowModal ? _renderModal() : null}
      <div className="d-flex justify-content-between">
        {_renderModalConfirm()}
        <div></div>
        <Button onClick={openModal} type="primary">
          ADD
        </Button>
      </div>
      {_renderTree(categories)}
      {_renderCategoryContent()}
    </div>
  );
};

export default CategoryPage;
