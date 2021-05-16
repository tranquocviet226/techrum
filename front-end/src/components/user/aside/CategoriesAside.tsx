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
  return (
    <li>
      <a
        className="rocket-lazyload lazyloaded"
        style={{
          backgroundColor: category.color
        }}
        data-ll-status="loaded"
      >
        <span>{category.title}</span>
        <span className="bar" />
        <span className="category-count">{index + 1}</span>
      </a>
    </li>
  );
};

export default CategoriesAside;
