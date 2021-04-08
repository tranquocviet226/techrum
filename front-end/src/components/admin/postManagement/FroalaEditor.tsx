import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/third_party/embedly.min.css";
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/third_party/embedly.min.js";
import { useRef, useState } from "react";
import Froala from "react-froala-wysiwyg";

interface myProps {
    onChangeModel: (model: string) => void;
 }

export const FroalaEditor = ({onChangeModel}: myProps) => {
    const ref = useRef<any>(null)
    const [model, setModel] = useState<string>("");

    const handleModelChange = (model: any) => {
        setModel(model);
        onChangeModel(model)
    };

    const config = {
        placeholderText: 'Edit Your Content Here!',
        charCounterCount: false,
        heightMin: "200px",
        fontFamily: {
            "Roboto,sans-serif": 'Roboto',
            "Oswald,sans-serif": 'Oswald',
            "Montserrat,sans-serif": 'Montserrat',
            "'Open Sans Condensed',sans-serif": 'Open Sans Condensed',
            "'Open Sans', sans-serif": 'Open Sans'
        }
    }

    return (
        <>
            <Froala
                ref={ref}
                model={model}
                onModelChange={handleModelChange}
                tag="textarea"
                config={config}
            />
        </>
    );
};
