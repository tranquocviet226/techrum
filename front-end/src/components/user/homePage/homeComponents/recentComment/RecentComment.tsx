import txtConstants from "constants/index";
import CommentItem from "./CommentItem";

const RecentComment = () => {
  return (
    <div
      className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1278fea7"
      data-id="1278fea7"
      data-element_type="column"
    >
      <div className="elementor-column-wrap elementor-element-populated">
        <div className="elementor-widget-wrap">
          <div
            className="elementor-element elementor-element-79f0dd5e elementor-widget elementor-widget-newszone-title"
            data-id="79f0dd5e"
            data-element_type="widget"
            data-widget_type="newszone-title.default"
          >
            <div className="elementor-widget-container">
              <div className="section-heading heading-style3">
                <h2 className="block-title">
                  <span className="title-angle-shap">
                    {txtConstants.recentComment}
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-7737e3f2 elementor-widget elementor-widget-newszone-comment"
            data-id="7737e3f2"
            data-element_type="widget"
            data-widget_type="newszone-comment.default"
          >
            <div className="elementor-widget-container">
              <div className="ts-author-comments">
                <CommentItem />
                <CommentItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentComment;
