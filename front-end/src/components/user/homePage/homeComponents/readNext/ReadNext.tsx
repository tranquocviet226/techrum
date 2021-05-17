import { getPostFind } from "actions/user/postAction";
import txtConstants from "constants/index";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ComponentType } from "types/common/componentTypes";
import { FindPostBody, Post } from "types/model/Post";
import RecentComment from "../recentComment/RecentComment";
import ReadNextPostItem from "./ReadNextPostItem";

type Props = {
  readNextPosts?: Post[];
};

const ReadNext: React.FC<Props> = (props) => {
  const { readNextPosts } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    getRandomPost();
  }, []);

  const getRandomPost = () => {
    const body: FindPostBody = {
      total_result: 12,
      type: "rand",
    };
    dispatch(getPostFind(ComponentType.READ_NEXT_POSTS, body));
  };

  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-3858afa6 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="3858afa6"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-row">
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-72fb4780"
            data-id="72fb4780"
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div
                  className="elementor-element elementor-element-399f7306 elementor-widget elementor-widget-newszone-title"
                  data-id="399f7306"
                  data-element_type="widget"
                  data-widget_type="newszone-title.default"
                >
                  <div className="elementor-widget-container">
                    <div className="section-heading heading-style3">
                      <h2 className="block-title">
                        <span className="title-angle-shap">
                          {txtConstants.readNext}
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-2c3070ef elementor-widget elementor-widget-newszone-post-grid-loadmore"
                  data-id="2c3070ef"
                  data-element_type="widget"
                  data-widget_type="newszone-post-grid-loadmore.default"
                >
                  <div className="elementor-widget-container">
                    <div className="grid-loadmore-content row">
                      {readNextPosts?.map((item) => (
                        <ReadNextPostItem key={item.id} item={item} />
                      ))}
                    </div>
                    <div className="load-more-btn text-center">
                      <button
                        className="digiqole-post-grid-loadmore"
                        data-json_grid_meta='{"order":"DESC","posts_per_page":4,"terms":["2"],"tags":"","post_sortby":"latestpost","total_post":32,"grid_style":"style2","show_view_count":"no","show_cat":"yes","show_author":"yes","show_date":"yes","desc_limit":"35","post_title_crop":10,"show_gradient":"","show_author_avator":"no"}'
                      >
                        {txtConstants.loadMore}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <RecentComment />
        </div>
      </div>
    </section>
  );
};

export default ReadNext;
