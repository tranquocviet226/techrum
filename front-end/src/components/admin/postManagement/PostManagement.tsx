import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as React from "react";
import { useTranslation } from "react-i18next";
import { FroalaEditor } from "./FroalaEditor";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import "./PostManagement.css";
import Selects from "./Selects";

const useStyles = makeStyles(() => ({
    optionContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        display: "flex",
        flexDirection: "column",
        width: "50%",
    },
    pickerContainer: {
        width: "100%",
    },
    btnContainer: {
        display: "flex",
        width: "100%",
        marginTop: 16,
        justifyContent: "space-around"
    },
    pickerTextfield: {
        width: "100%"
    },
}));

const PostManagement: React.FC = () => {
    const { t } = useTranslation(['ns1']);
    const classes = useStyles();

    const [postDate, setPostDate] = React.useState<any>("");
    const [isPreview, setIsPreview] = React.useState<boolean>(false);
    const [model, setModel] = React.useState<string>("");

    const handleModelChange = (model: string) => {
        setModel(model);
    };

    const onChangeDate = (e: any) => {
        setPostDate(e.target.value);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    const onPreview = () => {
        setIsPreview(!isPreview);
    }

    const _renderOption = () => {
        return (
            <Selects />
        )
    }

    const _renderPicker = () => {
        return (
            <div className={classes.pickerContainer}>
                <form noValidate onSubmit={handleSubmit}>
                    <TextField
                        className={classes.pickerTextfield}
                        value={postDate}
                        onChange={onChangeDate}
                        id="date"
                        label={t("POST_SCREEN.post_date")}
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
            </div>
        )
    }

    const _renderButton = () => {
        return (
            <div className={classes.btnContainer}>
                <Button onClick={onPreview} variant="contained" color="primary">
                    {t("POST_SCREEN.preview")}
                </Button>
                <Button variant="contained" color="secondary">
                    {t("POST_SCREEN.publish")}
                </Button>
            </div>
        )
    }

    return (
        <div className="container">
            <form noValidate autoComplete="off" className="title-container">
                <TextField color="secondary" fullWidth label={t("ns1:POST_SCREEN.post_title")} />
            </form>
            <FroalaEditor onChangeModel={(model: string) => handleModelChange(model)} />
            <div className={classes.optionContainer}>
                {_renderOption()}
                {_renderPicker()}
                {_renderButton()}
            </div>
            {isPreview ? <FroalaEditorView model={model} /> : null}
        </div>
    )
};

export default PostManagement;
