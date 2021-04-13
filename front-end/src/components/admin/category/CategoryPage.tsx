import Button from "@material-ui/core/Button";
import { FolderIcon } from "assets/img/admin";
import CategoryFormContainer from "containers/admin/category/CategoryFormContainer";
import React, { useEffect, useRef, useState } from "react";
import { Category } from "types/model";
import "./CategoryPage.css";

type Props = {
  categories: Category[];
};

const CategoryPage = ({ categories }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isShowModal, setIsShowModal] = useState(false);
  const [validForm, setValidForm] = useState(true);

  useEffect(() => {
    window.onclick = function (event: any) {
      if (event.target == ref.current) {
        setIsShowModal(false);
      }
    };
  }, []);

  const resetValid = () => {
    setValidForm(true);
  };

  const openModal = () => {
    setIsShowModal(true);
  };

  const _renderTree = (data: Category[]) => {
    return (
      <>
        {data?.map((item: Category) => (
          <details key={item.id}>
            <summary className="d-flex">
              <img src={FolderIcon} className="ic_20" />
              <p style={{ margin: 0 }}>{item.title}</p>
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
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {isShowModal ? _renderModal() : null}
      <div className="d-flex justify-content-between">
        <div></div>
        <Button onClick={openModal} variant="contained" color="primary">
          ADD
        </Button>
      </div>
      {_renderTree(categories)}
    </div>
  );
};

export default CategoryPage;
