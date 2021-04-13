import { useState } from "react";
import { Category } from "types/model";

type Props = {
  selectCategory: (id: number) => void;
  categories: Category[]
};

const FeatureTabNews = ({ selectCategory, categories }: Props) => {

  const [activeId, setActiveId] = useState<number>(1);
  const onSelectCategory = (id: number) => {
    setActiveId(id);
    selectCategory(id);
  };

  return (
    <ul className="nav nav-tabs" role="tablist">
      {categories.length > 0 && categories.slice(0, 5).map((ct) => (
        <li key={ct.id} className="nav-item">
          <a
            style={{ cursor: "pointer" }}
            onClick={() => onSelectCategory(ct.id)}
            className={activeId === ct.id ? "nav-link active" : "nav-link"}
            data-toggle="tab"
          >
            <h3 className="tab-head">
              <span className="tab-text-title">{ct.title}</span>
            </h3>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FeatureTabNews;
