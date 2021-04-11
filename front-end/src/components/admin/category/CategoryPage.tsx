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
          <details>
            <div key={item.id} style={{ borderLeft: "1px solid gray" }}>
              <summary style={{ display: "flex" }}>
                <img src={FolderIcon} style={{ width: 20, height: 20 }} />
                <p style={{ margin: 0 }}>{item.title}</p>
              </summary>

              <div style={{ marginLeft: 16 }}>
                {item.sub_category.length > 0
                  ? _renderTree(item.sub_category)
                  : null}
              </div>
            </div>
          </details>
        ))}
      </>
    );
  };
  return <>{_renderTree(categories)}</>;
};

export default CategoryPage;
