import { FolderIcon } from "assets/img/admin";
import { Category } from "types/model";
import "./CategoryPage.css";

type Props = {
  categories: Category[];
};

const CategoryPage = ({ categories }: Props) => {
  const _renderTree = (data: Category[]) => {
    return (
      <>
        {data.map((item: Category) => (
          <div key={item.id} style={{ borderLeft: "1px solid gray" }}>
            <div style={{ display: "flex" }}>
              <img src={FolderIcon} style={{ width: 20, height: 20 }} />
              <p style={{ margin: 0 }}>{item.title}</p>
            </div>

            <div style={{ marginLeft: 16 }}>
              {item.sub_category.length > 0
                ? _renderTree(item.sub_category)
                : null}
            </div>
          </div>
        ))}
      </>
    );
  };
  return <>{_renderTree(categories)}</>;
};

export default CategoryPage;
