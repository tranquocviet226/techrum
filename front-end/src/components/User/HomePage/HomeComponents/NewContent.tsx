import { useState } from "react";

import FeatureTab from "./FeatureTabNew";
import TabContent from "./TabContentNew";

const TabContents = () => {
  const [contentId, setContentId] = useState<number>(1);

  const handleSelectCategory = (id: number) => {
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
                <span className="title-angle-shap">what’s new</span>
              </h2>
            </div>
            <FeatureTab
              selectCategory={(id: number) => handleSelectCategory(id)}
            />
            <TabContent content_id={contentId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabContents;
