import { Category } from "types/model";
import "./CategoryPage.css";

type Props = {
  categories: Category[];
};

const CategoryPage = ({ categories }: Props) => {
  return (
    <div>
      <div className="category-content">
        <div className="category-btn-container">
          <div></div>
          <div>
            <button type="button" className="btn">
              ADD
            </button>
          </div>
        </div>
      </div>
      <div className="category-data">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>SLUG</th>
              <th>COLOR</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((item: Category) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title} </td>
                <td>{item.slug}</td>
                <td>
                  <div
                    style={{
                      width: "100%",
                      height: 16,
                      backgroundColor: item.color,
                    }}
                  ></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryPage;
