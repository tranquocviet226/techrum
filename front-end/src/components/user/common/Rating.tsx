import { getPostsByCategory } from "actions/admin/postAction";
import { Path } from "constants/path";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { ComponentType } from "types/common/componentTypes";
import { Category, Post } from "types/model";
import { formatDate } from "utils/function";

type TabContentProps = {
  category_id: number;
  ratingPosts?: Post[];
};

type FeatureTabProps = {
  selectCategory: (id: number) => void;
  categories?: Category[];
};

type Props = {
  categories?: Category[];
  ratingPosts?: Post[];
};

const Rating: React.FC<Props> = (props) => {
  const [categoryId, setCategoryId] = useState<number>(1);
  const { categories, ratingPosts } = props;
  const handleSelectCategory = (id: number) => {
    setCategoryId(id);
  };
  return (
    <div id="apsc_widget-3" className="widget widget_apsc_widget">
      <div className="post-list-item widgets grid-no-shadow">
        <TabRatingCategory
          categories={categories}
          selectCategory={(id: number) => handleSelectCategory(id)}
        />
        <TabContent ratingPosts={ratingPosts} category_id={categoryId} />
      </div>
    </div>
  );
};

const TabRatingCategory = (props: FeatureTabProps) => {
  const { selectCategory, categories } = props;
  const [randomCategory, setRandomategory] = useState<Category[]>([]);
  const [activeId, setActiveId] = useState<number>();

  useEffect(() => {
    if (categories && categories.length > 0) {
      const categoriesRandom = getRandomListCategory(categories);
      setRandomategory(categoriesRandom);
    }
  }, [categories]);

  useEffect(() => {
    if (randomCategory && randomCategory.length > 0) {
      onSelectCategory(randomCategory[0].id);
    }
  }, [randomCategory]);

  const getRandomListCategory = (categories: Category[]) => {
    let newArray = [...categories];
    const shuffled = newArray.sort(() => Math.random() - 0.5);

    return shuffled.slice(0, 3);
  };

  const onSelectCategory = (id: number) => {
    setActiveId(id);
    selectCategory(id);
  };

  return (
    <ul className="nav nav-tabs recen-tab-menu" role="tablist">
      {randomCategory?.map((item) => (
        <li key={item.id} role="presentation">
          <a
            className={activeId === item.id ? "active" : ""}
            aria-controls="home"
            role="tab"
            onClick={() => onSelectCategory(item.id)}
            data-toggle="tab"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
const TabContent = (props: TabContentProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { category_id, ratingPosts } = props;

  useEffect(() => {
    getPostByCategory();
  }, [category_id]);

  const getPostByCategory = () => {
    dispatch(
      getPostsByCategory(ComponentType.RATING_POSTS, {
        total_result: 4,
        category_id: category_id,
      })
    );
  };

  const handleSelectPost = (id: number) => {
    history.push({
      pathname: `/${Path.POST.concat("/" + id)}`,
      state: {
        id: id,
      },
    });
  };

  return (
    <div className="tab-content">
      <div
        role="tabpanel"
        className="tab-pane active post-tab-list post-thumb-bg"
        id="home"
      >
        {ratingPosts?.map((item, index) => {
          return (
            <div key={item.id} className="post-content media">
              <div className="post-thumb post-thumb-radius">
                <a href={item.redirect_to_url}>
                  <span
                    className="digiqole-sm-bg-img rocket-lazyload lazyloaded"
                    style={{ backgroundImage: `url(${item.background_url})` }}
                    data-ll-status="loaded"
                  />
                  <span className="post-index"> {index + 1} </span>
                </a>
              </div>
              <div className="media-body">
                <span className="post-tag">
                  <a
                    className="post-cat only-color"
                    style={{ color: item.categories[0].color }}
                  >
                    {item.categories[0].title}
                  </a>
                </span>
                <h4 className="post-title cur-po">
                  <a onClick={() => handleSelectPost(item.id)}>{item.title}</a>
                </h4>
                <div className="post-meta">
                  <span className="post-date">
                    <i className="far fa-clock" aria-hidden="true" />
                    {formatDate(item.created_at)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Rating;
