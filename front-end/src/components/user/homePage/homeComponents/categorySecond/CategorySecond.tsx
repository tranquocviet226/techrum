import { getPostFind } from "actions/user/postAction";
import Aside from "components/user/aside";
import { Path } from "constants/path";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { ComponentType } from "types/common/componentTypes";
import { Category } from "types/model";
import { FindPostBody, Post } from "types/model/Post";
import { formatDate } from "utils/function";

type Props = {
  categories?: Category[];
  categorySecondPosts?: Post[];
};

const CategorySecond: React.FC<Props> = (props) => {
  const { categories, categorySecondPosts } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const [category, setCategory] = useState<Category>();
  const categoryTitle = category?.title;
  const categoryColor = category?.color;

  useEffect(() => {
    if (categories && categories.length > 1) {
      setCategory(categories[1]);
    }
  }, [categories]);

  useEffect(() => {
    getListPostByCategorySecond();
  }, []);

  const getListPostByCategorySecond = () => {
    const body: FindPostBody = {
      total_result: 5,
      category_id: categories && categories?.length > 0 ? categories[1].id : 0,
      sort_by: {
        target: "views",
        order: "DESC",
      },
    };
    dispatch(getPostFind(ComponentType.CATEGORY_POSTS_2, body));
  };

  const handleSelectPost = (id: number) => {
    history.push({
      pathname: Path.POST.concat("/" + id),
      state: {
        id: id,
      },
    });
  };

  const _renderFirstItem = () => {
    const firstItem =
      categorySecondPosts && categorySecondPosts.length > 0
        ? categorySecondPosts[0]
        : null;
    const id = firstItem?.id || 0;
    const title = firstItem?.title || "";
    const backgroundUrl = firstItem?.background_url || "";
    const author = firstItem?.author || "admin";
    const created_at = firstItem?.created_at || Date.now();
    const views = firstItem?.views || 0;
    const description = firstItem?.description;

    return (
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <div className="post-block-style post-thumb-bg">
            <div className="post-thumb ts-resize post-thumb-full post-thumb-low-padding">
              <a rel="bookmark" title={title}>
                <span
                  className="digiqole-sm-bg-img rocket-lazyload lazyloaded"
                  style={{
                    backgroundImage: `url("${backgroundUrl}")`,
                  }}
                  data-ll-status="loaded"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="post-content feature-contents">
            <a
              className="post-cat"
              style={{
                backgroundColor: categoryColor,
                color: "#ffffff",
              }}
            >
              {categoryTitle}
            </a>
            <h4 onClick={() => handleSelectPost(id)} className="post-title md">
              <a rel="bookmark" title={title}>
                {title}
              </a>
            </h4>
            <div className="post-meta ">
              <span className="post-author">
                <i className="fa fa-user" />
                <a title={author} rel="author">
                  {author}
                </a>
              </span>
              <span className="post-date">
                <i className="far fa-clock" /> {formatDate(created_at)}
              </span>
              <span className="post-view">
                <i className="fas fa-fire" />
                {views}
              </span>
            </div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  };

  const _renderListPost = () => {
    return (
      <div className="row post-list post-block-list post-thumb-bg">
        {categorySecondPosts?.slice(1, 5).map((item) => (
          <div key={item.id} className="col-md-6 col-sm-6">
            <div className="post-block-style post-float media">
              <div className="post-thumb d-flex post-thumb-low-padding">
                <a rel="bookmark" title={item?.title}>
                  <span
                    className="digiqole-sm-bg-img rocket-lazyload lazyloaded"
                    style={{
                      backgroundImage: `url("${item?.background_url}")`,
                    }}
                    data-ll-status="loaded"
                  />
                </a>
              </div>
              <div className="post-content media-body">
                <a
                  className="post-cat only-color"
                  style={{ color: categoryColor }}
                >
                  {categoryTitle}
                </a>
                <h4
                  onClick={() => handleSelectPost(item?.id)}
                  className="post-title"
                >
                  <a rel="bookmark" title={item?.title}>
                    {item?.title}
                  </a>
                </h4>
                <div className="post-meta">
                  <span className="post-date">
                    <i className="far fa-clock" aria-hidden="true" />
                    {formatDate(item?.created_at)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-2df75866 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="2df75866"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-row">
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-2a19a800"
            data-id="2a19a800"
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div
                  className="elementor-element elementor-element-6a650e17 elementor-widget elementor-widget-newszone-title"
                  data-id="6a650e17"
                  data-element_type="widget"
                  data-widget_type="newszone-title.default"
                >
                  <div className="elementor-widget-container">
                    <div className="section-heading heading-style3">
                      <h2 className="block-title" style={{ color: "#fc4a00" }}>
                        <span className="title-angle-shap">
                          {categoryTitle}
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-2ec806e3 elementor-widget elementor-widget-newszone-post-block"
                  data-id="2ec806e3"
                  data-element_type="widget"
                  data-widget_type="newszone-post-block.default"
                >
                  <div className="elementor-widget-container">
                    <div className="block-item-post style1">
                      {_renderFirstItem()}
                      {_renderListPost()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Aside isShowGenre={false} />
        </div>
      </div>
    </section>
  );
};

export default CategorySecond;
