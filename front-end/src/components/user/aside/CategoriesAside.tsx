import { Path } from "constants/path";
import { useHistory } from "react-router";
import { Category } from "types/model";

type CategoryProps = {
  category: Category;
  index: number;
};

type CategoriesProps = {
  categories?: Category[];
};

const CategoriesAside = (props: CategoriesProps) => {
  const { categories } = props;

  return (
    <div
      id="digiqole-category-list-2"
      className="widget digiqole-category-list"
    >
      <div className="widgets_category ts-category-list-item">
        <ul className="ts-category-list">
          {categories?.slice(0, 5).map((item: Category, index: number) => {
            return (
              <CategoryAside key={item.id} category={item} index={index} />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const CategoryAside = (props: CategoryProps) => {
  const { category, index } = props;
  const history = useHistory();

  const id = category?.id || 0;
  const color = category?.color || "";
  const title = category?.title || "";

  const handleSelectCategory = () => {
    history.push({
      pathname: `/${Path.CATEGORY.concat("/" + id)}`,
    });
  };

  return (
    <li>
      <a
        onClick={handleSelectCategory}
        className="rocket-lazyload lazyloaded"
        style={{
          backgroundColor: color,
        }}
        data-ll-status="loaded"
      >
        <span>{title}</span>
        <span className="bar" />
        <span className="category-count">{index + 1}</span>
      </a>
    </li>
  );
};

export default CategoriesAside;
