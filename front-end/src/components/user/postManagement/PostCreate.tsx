import { TextField, Button } from "@material-ui/core";
import { Input } from "antd";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FroalaEditor } from "components/admin/postManagement/FroalaEditor";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import "components/admin/postManagement/PostManagement.css";
import Selects from "components/admin/postManagement/Selects";
import { Category, Post } from "types/model";
import { connect, useDispatch } from "react-redux";
import { createPost, updatePostById } from "actions/admin/postAction";
import { postSelector } from "selectors/admin/postSelector";
import { Dispatch } from "redux";
import moment from "moment";

const useStyles = makeStyles(() => ({
  optionContainer: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  pickerContainer: {
    width: "100%",
    margin: 8,
  },
  btnContainer: {
    display: "flex",
    width: "100%",
    marginTop: 16,
    justifyContent: "space-around",
  },
  pickerTextfield: {
    width: "100%",
    paddingTop: 8,
    paddingBottom: 8,
  },
}));

type Props = {
  categories: Category[];
  location?: any;
};

const PostCreate: React.FC<Props> = (props) => {
  const { t } = useTranslation(["ns1"]);
  const { categories } = props;
  const data: Post = props?.location?.state;
  const dispatch = useDispatch();
  const classes = useStyles();

  const [isPreview, setIsPreview] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [category, setCategory] = useState<number[]>([]);
  const [postDate, setPostDate] = useState<any>("");
  const [description, setDescription] = useState<string>("");
  const [sortDescription, setSortDescription] = useState<string>("");
  const [backgroundUrl, setBackgroundUrl] = useState<any>(null);
  const [slug, setSlug] = useState<string>("");

  useEffect(() => {
    if (data) {
      const categoryIdData: number[] = [];
      data?.categories?.map((item) => categoryIdData.push(item.id));

      setTitle(data?.title);
      setModel(data?.content);
      setCategory(categoryIdData);
      setPostDate(moment(data?.updated_at).format("YYYY-MM-DD"));
      setDescription(data?.description);
      setSortDescription(data?.sort_description);
      setBackgroundUrl(data?.background_url);
      setSlug(data?.slug);
    }
  }, [data]);

  const handleModelChange = (model: string) => {
    setModel(model);
  };

  const handleSubmit = (e: any) => {
    const formData = {
      title: title,
      content: model,
      category: category,
      postDate: postDate,
      description: description,
      sortDescription: sortDescription,
      backgroundUrl: backgroundUrl,
      slug: slug,
    };
    if (data) {
      dispatch(updatePostById(data?.id, formData));
    } else {
      dispatch(createPost(formData));
      e.preventDefault();
    }
  };

  const onPreview = () => {
    setIsPreview(!isPreview);
  };

  const handleChangeTitle = (e: any) => {
    setTitle(e.target.value);
  };

  const handleChangeCategory = (value: [number]) => {
    setCategory(value);
  };

  const onChangeDate = (e: any) => {
    setPostDate(e.target.value);
  };

  const handleChangeDescription = (e: any) => {
    setDescription(e.target.value);
  };

  const handleChangeSortDescription = (e: any) => {
    setSortDescription(e.target.value);
  };

  const handleChangeImage = (e: any) => {
    setBackgroundUrl(e.target.files[0]);
  };

  const handleChangeSlug = (e: any) => {
    setSlug(e.target.value);
  };

  const _renderOption = () => {
    return (
      <Selects
        data={categories}
        onChangeData={handleChangeCategory}
        categorySelected={category}
      />
    );
  };

  const _renderPicker = () => {
    return (
      <div className={classes.pickerContainer}>
        <Input
          className={classes.pickerTextfield}
          value={postDate}
          onChange={onChangeDate}
          id="date"
          placeholder={t("POST_SCREEN.post_date")}
          type="date"
        />
      </div>
    );
  };

  const _renderInput = () => {
    return (
      <div style={{ width: "100%" }}>
        <Input
          onChange={handleChangeDescription}
          autoFocus={true}
          placeholder="Mô tả"
          className="mb-2"
          required
          value={description}
          style={{ paddingTop: 8, paddingBottom: 8 }}
        />
        <Input
          onChange={handleChangeSortDescription}
          placeholder="Mô tả ngắn"
          value={sortDescription}
          style={{ paddingTop: 8, paddingBottom: 8 }}
        />
        <Input
          type="file"
          onChange={handleChangeImage}
          placeholder="Ảnh"
          style={{ paddingTop: 8, paddingBottom: 8, marginTop: 8, marginBottom: 8 }}
        />
        <Input
          onChange={handleChangeSlug}
          placeholder="Đường dẫn"
          value={slug}
          style={{ paddingTop: 8, paddingBottom: 8 }}
        />
      </div>
    );
  };

  const _renderButton = () => {
    return (
      <div className={classes.btnContainer}>
        <Button onClick={onPreview} variant="contained" color="primary">
          {isPreview ? "Ẩn" : t("POST_SCREEN.preview")}
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="secondary">
          {data ? "Cập nhật" : t("POST_SCREEN.publish")}
        </Button>
      </div>
    );
  };

  return (
    <div
      style={{
        margin: 16,
        backgroundColor: "#f6f6f7",
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        borderRadius: 8
      }}
    >
      <form noValidate>
        <Input
          style={{ marginTop: 16, padding: 8 }}
          onChange={handleChangeTitle}
          placeholder={t("ns1:POST_SCREEN.post_title")}
          value={title}
        />
        <div className="editor_container">
          <FroalaEditor
            modelData={model}
            onChangeModel={(model: string) => handleModelChange(model)}
          />
        </div>
        <div className={classes.optionContainer}>
          {_renderOption()}
          {_renderPicker()}
          {_renderInput()}
          {_renderButton()}
        </div>
      </form>
      {isPreview ? <FroalaEditorView model={model} /> : null}
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createPost: (formData: any) => dispatch(createPost(formData)),
});

export default connect(postSelector, mapDispatchToProps)(PostCreate);
