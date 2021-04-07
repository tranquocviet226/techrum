import { useEffect, useState } from "react";

import { fakeData, fakeData2, fakeCategoryRating } from "components/mock_data";

type TabContentProps = {
  category_id: number;
};

type FeatureTabProps = {
  selectCategory: (id: number) => void;
};

const Rating = () => {
  const [categoryId, setCategoryId] = useState<number>(1);

  const handleSelectCategory = (id: number) => {
    setCategoryId(id);
  };
  return (
    <div className="post-list-item widgets grid-no-shadow">
      <TabRatingCategory
        selectCategory={(id: number) => handleSelectCategory(id)}
      />
      <TabContent category_id={categoryId} />
    </div>
  );
};

const TabRatingCategory = (props: FeatureTabProps) => {
  const { selectCategory } = props;
  const [activeId, setActiveId] = useState<number>(1);
  const onSelectCategory = (id: number) => {
    setActiveId(id);
    selectCategory(id);
  };
  return (
    <ul className="nav nav-tabs recen-tab-menu" role="tablist">
      {fakeCategoryRating.map((item) => (
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
  const { category_id } = props;
  const [data, setData] = useState(fakeData);
  useEffect(() => {
    switch (category_id) {
      case 1:
        setData(fakeData);
        break;
      case 2:
        setData(fakeData2);
        break;
      case 3:
        setData(fakeData);
        break;
    }
  }, [category_id]);
  return (
    <div className="tab-content">
      <div
        role="tabpanel"
        className="tab-pane active post-tab-list post-thumb-bg"
        id="home"
      >
        {data.map((item, index) => {
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
                    href="https://demo.themewinter.com/wp/digiqoles/category/lifestyle/fashion/"
                    style={{ color: item.categories[0].color }}
                  >
                    {item.categories[0].title}
                  </a>
                </span>
                <h4 className="post-title">
                  <a href="https://demo.themewinter.com/wp/digiqoles/ratcliffe-to-be-director-of-nation-talent-trump-ignored/">
                    {item.title}
                  </a>
                </h4>
                <div className="post-meta">
                  <span className="post-date">
                    <i className="fa fa-clock-o" aria-hidden="true" />
                    {item.date}
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
