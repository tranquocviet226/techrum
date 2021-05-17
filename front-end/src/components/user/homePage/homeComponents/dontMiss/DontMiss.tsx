import RecentPostList from "components/user/common/RecentPostList";
import txtConstants from "constants/index";
import { Path } from "constants/path";
import { useHistory } from "react-router";
import { Post } from "types/model";

type Props = {
  randomPosts?: Post[];
};

const DontMiss: React.FC<Props> = (props) => {
  const { randomPosts } = props;
  const history = useHistory();

  const handleSelectPost = (id: number) => {
    history.push({
      pathname: `/${Path.POST.concat("/" + id)}`,
      state: {
        id: id,
      },
    });
  };

  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-a29a3c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="a29a3c"
      data-element_type="section"
      data-settings='{"ekit_has_onepagescroll_dot":"yes"}'
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-f28e52f"
          data-id="f28e52f"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-19a45928 elementor-widget elementor-widget-newszone-title"
              data-id="19a45928"
              data-element_type="widget"
              data-widget_type="newszone-title.default"
            >
              <div className="elementor-widget-container">
                <div className="section-heading heading-style3">
                  <h2 className="block-title">
                    <span className="title-angle-shap">
                      {txtConstants.dontMiss}
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-3373257d elementor-widget elementor-widget-newszone-post-vertical-grid"
              data-id="3373257d"
              data-element_type="widget"
              data-widget_type="newszone-post-vertical-grid.default"
            >
              <div className="elementor-widget-container">
                <div className="vertical-post-grid">
                  <div className="row">
                    {randomPosts?.map((item) => (
                      <DontMissItem
                        key={item.id}
                        item={item}
                        handleSelectPost={handleSelectPost}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-e6e2f6c"
          data-id="e6e2f6c"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-64329ae8 elementor-widget elementor-widget-newszone-title"
              data-id="64329ae8"
              data-element_type="widget"
              data-widget_type="newszone-title.default"
            >
              <div className="elementor-widget-container">
                <div className="section-heading heading-style3">
                  <h2 className="block-title">
                    <span className="title-angle-shap">
                      {txtConstants.recentPost}
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-6c8b8e82 elementor-widget elementor-widget-wp-widget-digiqole_latest_news_widget"
              data-id="6c8b8e82"
              data-element_type="widget"
              data-widget_type="wp-widget-digiqole_latest_news_widget.default"
            >
              <div className="elementor-widget-container">
                <RecentPostList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

type ItemProps = {
  item: Post;
  handleSelectPost: (id: number) => void;
};

const DontMissItem: React.FC<ItemProps> = (props) => {
  const { item, handleSelectPost } = props;
  const id = item?.id || 0;
  const background_url = item.background_url || "";
  const category = item?.categories[0] || [];
  const title = item?.title || "";

  return (
    <div className="col-lg-4">
      <div
        className="item ts-overlay-style"
        style={{
          backgroundImage: `url(${background_url})`,
        }}
      >
        <a className="img-link" />
        <div className="post-content">
          <div className="grid-category">
            <a
              className="post-cat"
              style={{
                backgroundColor: category.color,
                color: "#ffffff",
              }}
            >
              {category.title}
            </a>
          </div>
          <h3 onClick={() => handleSelectPost(id)} className="post-title">
            <a>{title}</a>
          </h3>
          <ul className="post-meta-info  "></ul>
        </div>
      </div>
    </div>
  );
};

export default DontMiss;
