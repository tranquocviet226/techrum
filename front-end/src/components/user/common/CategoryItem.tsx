import { Category } from "types/model";

type Props = {
  item: Category;
};

const CategoryItem: React.FC<Props> = (props) => {
  const { item } = props;
  const id = item?.id || 1;
  const color = item?.color || "";
  const title = item?.title || "";
  return (
    <a
      className="post-cat cur-po"
      style={{
        backgroundColor: color,
        color: "#fff",
      }}
    >
      {title}
    </a>
  );
};

export default CategoryItem;
