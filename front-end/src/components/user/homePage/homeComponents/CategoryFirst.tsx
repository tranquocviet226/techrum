import { Path } from "constants/path";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { ComponentType } from "types/common/componentTypes";
import { Category, Post } from "types/model";
import { ParamsPost } from "types/model/Post";
import { formatDate } from "utils/function";

type Props = {
  categories: Category[];
  categoryFirstPosts: Post[];
  getPostsByCategory: (
    componentType: ComponentType,
    paramsPost?: ParamsPost
  ) => void;
  resetPosts: (componentType: ComponentType) => void;
};

const CategoryFirst: React.FC<Props> = (props) => {
  const { categoryFirstPosts, getPostsByCategory, resetPosts, categories } =
    props;
  const history = useHistory();

  useEffect(() => {
    if (categories?.length)
      getPostsByCategory(ComponentType.CATEGORY_POSTS_1, {
        total_result: 5,
        category_id: categories[0].id,
      });
  }, [categories]);

  const _renderContentLeft = () => {
    const post = categoryFirstPosts[0];
    const title = post?.title || "";
    const id = post?.id || 1;
    const background_url = post?.background_url || "";
    const author = post?.author || "admin";
    const created_at = post?.created_at || Date.now();

    const handleSelectPost = () => {
      history.push({
        pathname: `/${Path.POST.concat("/" + id)}`,
        state: {
          id: id,
        },
      });
    };

    const _renderItemCategory = (categories: Category[]) => {
      return categories.map((category) => (
        <a
          key={category.id}
          className="post-cat"
          style={{
            backgroundColor: category.color,
            color: "#ffffff",
          }}
        >
          {category.title}
        </a>
      ));
    };

    return (
      <div className="col-md-6 col-sm-6 feature-grid-content order-md-1">
        <div className="post-block-style clearfix">
          <div className="post-thumb ts-resize">
            <div
              className="item ts-overlay-style"
              style={{ backgroundImage: `url(${background_url})` }}
            >
              <a className="img-link" />
            </div>
            {_renderItemCategory(post.categories)}
          </div>
          <div className="post-content">
            <h4 className="post-title">
              <a onClick={handleSelectPost} rel="bookmark" title={title}>
                {title}
              </a>
            </h4>
            <div className="post-meta  ">
              <span className="post-author">
                <i className="fa fa-user" />
                <a title={author} rel="author">
                  {` `}
                  {author}
                </a>
              </span>
              <span className="post-date">
                <i className="far fa-clock" aria-hidden="true" />
                {formatDate(created_at)}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const _renderItemContentRight = (post: Post) => {
    const id = post?.id || 1;
    const background_url = post?.background_url || "";
    const title = post?.title || "";
    const created_at = post?.created_at || Date.now();

    const handleSelectPost = () => {
      history.push({
        pathname: `/${Path.POST.concat("/" + id)}`,
        state: {
          id: id,
        },
      });
    };

    return (
      <div key={post.id} className="col-md-6 col-sm-6 sm-grid-content">
        <div className="post-block-style post-float post-thumb-bg">
          <div className="post-thumb post-thumb-full post-thumb-low-padding">
            <a rel={title} title={title}>
              <span
                className="digiqole-sm-bg-img"
                style={{ backgroundImage: `url(${background_url})` }}
              />
            </a>
          </div>
          <div className="post-content">
            <h4 onClick={handleSelectPost} className="post-title">
              <a rel="bookmark" title={title}>
                {title}
              </a>
            </h4>
            <div className="post-meta">
              <span className="post-date">
                <i className="fa fa-clock-o"></i>
                {formatDate(created_at)}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const _renderContentRight = () => {
    const posts = categoryFirstPosts.slice(1, categoryFirstPosts.length);
    return (
      <div className="col-md-6 col-sm-6 order-md-2">
        <div className="row">
          {posts.map((post) => {
            return _renderItemContentRight(post);
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      {categoryFirstPosts.length && (
        <section
          className="elementor-section elementor-inner-section elementor-element elementor-element-41ac85fd elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="41ac85fd"
          data-element_type="section"
          data-settings='{"ekit_has_onepagescroll_dot":"yes"}'
        >
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-33a62336"
              data-id="33a62336"
              data-element_type="column"
              data-settings='{"background_background":"classic"}'
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-78f70d1f elementor-widget elementor-widget-newszone-title"
                  data-id="78f70d1f"
                  data-element_type="widget"
                  data-widget_type="newszone-title.default"
                >
                  <div className="elementor-widget-container">
                    <div className="section-heading heading-style3">
                      <h2 className="block-title">
                        <span className="title-angle-shap">
                          {categories[0].title || ""}
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-4c2d7e56 elementor-widget elementor-widget-newszone-post-block"
                  data-id="4c2d7e56"
                  data-element_type="widget"
                  data-widget_type="newszone-post-block.default"
                >
                  <div className="elementor-widget-container">
                    <div className="post-block-item style3">
                      <div className="row">
                        {_renderContentLeft()}
                        {_renderContentRight()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CategoryFirst;
