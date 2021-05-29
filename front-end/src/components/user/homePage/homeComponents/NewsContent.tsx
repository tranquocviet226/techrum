import txtConstants from "constants/index";
import FeatureTabNews from "containers/user/FeatureTabNewsContainer";
import TabContentNews from "containers/user/TabContentNewsContainer";
import { useState } from "react";

const NewsContent = () => {
  const [contentId, setContentId] = useState<number>(1);

  const handleSelectCategory = (id: number)   => {
    setContentId(id);
  };

  return (
    <div
      className="elementor-element elementor-element-7fc4cdd4 elementor-widget elementor-widget-newszone-post-tab"
      data-id="7fc4cdd4"
      data-element_type="widget"
      data-widget_type="newszone-post-tab.default"
    >
      <div className="elementor-widget-container">
        <div className="featured-tab-item">
          <div className="post-block-element featured-tab">
            <div className="section-heading heading-style3">
              <h2 className="block-title">
                <span className="title-angle-shap">{txtConstants.news}</span>
              </h2>
            </div>
            <FeatureTabNews
              selectCategory={(id: number) => handleSelectCategory(id)}
            />
            <TabContentNews content_id={contentId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsContent;
