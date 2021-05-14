import { useEffect, useState } from "react";

import { DataCategory, DataPost, DataPost2 } from "data";

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
    <div id="apsc_widget-3" className="widget widget_apsc_widget">
      <div className="post-list-item widgets grid-no-shadow">
        <TabRatingCategory
          selectCategory={(id: number) => handleSelectCategory(id)}
        />
        <TabContent category_id={categoryId} />
      </div>
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
      {DataCategory.slice(0,3).map((item) => (
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
  const [data, setData] = useState(DataPost);
  useEffect(() => {
    switch (category_id) {
      case 1:
        setData(DataPost);
        break;
      case 2:
        setData(DataPost2);
        break;
      case 3:
        setData(DataPost);
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
                    {item.created_at}
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
