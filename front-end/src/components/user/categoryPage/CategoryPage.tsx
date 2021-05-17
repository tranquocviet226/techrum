import { getPostsByCategory } from "actions/admin/postAction";
import Aside from "components/user/aside";
import txtConstants from "constants/index";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ComponentType } from "types/common/componentTypes";
import { Post } from "types/model";
import CategoryItem from "./categoryComponents/CategoryItem";

type Props = {
  match: any;
  categoryDetailPosts: Post[];
};

const CategoryPage: React.FC<Props> = (props) => {
  const category_id = props?.match?.params?.id;
  const { categoryDetailPosts } = props;
  const categoryFirst =
    categoryDetailPosts && categoryDetailPosts.length > 0
      ? categoryDetailPosts[0]
      : null;
  const categoryTitle = categoryFirst?.categories[0].title || "";

  const dispatch = useDispatch();

  useEffect(() => {
    getPostByCategory();
  }, [category_id]);

  const getPostByCategory = () => {
    dispatch(
      getPostsByCategory(ComponentType.CATEGORY_DETAIL, {
        category_id: category_id,
      })
    );
  };

  const _renderHeader = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ol className="breadcrumb" data-wow-duration="2s">
              <li>
                <i className="fa fa-home" /> <a href="">{txtConstants.home}</a>
                <i className="fa fa-angle-right" />
              </li>
              <li>
                <a href="">{categoryTitle}</a>{" "}
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {_renderHeader()}

      <div
        id="main-content"
        className="main-container blog-single post-layout-style1"
        role="main"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading heading-style3">
                <h2 className="block-title">
                  <span className="title-angle-shap">{`${txtConstants.category}: ${categoryTitle}`}</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row digiqole-content">
            <div className="col-lg-8 sidebar-right">
              <div className="row main-content-inner category-layout3">
                {categoryDetailPosts.map((item) => (
                  <CategoryItem key={item.id} item={item} />
                ))}
              </div>
            </div>
            <Aside />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
