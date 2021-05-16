import txtConstants from "constants/index";
import { Path } from "constants/path";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { ComponentType } from "types/common/componentTypes";
import { Post } from "types/model";
import { ParamsPost } from "types/model/Post";
import { formatDate } from "utils/function";

type Props = {
  content_id: number;
  newContentPosts: Post[];
  getPostsByCategory: (
    componentType: ComponentType,
    paramsPost?: ParamsPost
  ) => void;
  resetPosts: (componentType: ComponentType) => void;
};

type PostItemProps = {
  item: Post;
};

const TabContentItem = ({ item }: PostItemProps) => {
  const history = useHistory();
  const id = item?.id || 1;
  const title = item?.title || "";
  const background_url = item?.background_url || "";
  const categories = item?.categories || [];
  const created_at = item?.created_at || Date.now();

  const onSelectPost = () => {
    history.push({
      pathname: Path.POST.concat("/" + id),
      state: {
        id: id,
      },
    });
  };
  return (
    <li>
      <div className="post-block-style post-float media">
        <div className="post-thumb d-flex">
          <a
            rel="bookmark"
            title={title}
          >
            <span
              className="digiqole-sm-bg-img"
              style={{
                backgroundImage: `url(${background_url})`,
              }}
            />
          </a>
        </div>
        <div className="post-content media-body">
          {categories.map((category: any) => (
            <a
              key={category.id}
              className="post-cat only-color"
              style={{ color: category.color }}
            >
              {category.title}
            </a>
          ))}

          <h4 className="post-title title-small cur-po">
            <a onClick={onSelectPost} rel="bookmark" title={title}>
              {title}
            </a>
          </h4>
          <div className="post-meta">
            <span className="post-date">
              <i className="far fa-clock" />
              {formatDate(created_at)}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

const TabContentNews = ({
  content_id,
  getPostsByCategory,
  newContentPosts,
}: Props) => {
  const history = useHistory();

  useEffect(() => {
    getPostsByCategory(ComponentType.NEW_CONTENT_POSTS, {
      total_result: 5,
      category_id: content_id,
    });
  }, [content_id]);

  const handleSelectPost = (id: number) => {
    history.push({
      pathname: Path.POST.concat("/" + id),
      state: {
        id: id,
      },
    });
  };

  const _renderLeftData = (item: Post) => {
    const id = item?.id || 1;
    const background_url = item?.background_url || "";
    const categories = item?.categories || [];
    const title = item?.title || "";
    const author = item?.author || txtConstants.rootAuthor;
    const created_at = item?.created_at || Date.now();
    const sort_description = item?.sort_description || "";

    return (
      <div className="col-md-6 col-sm-6">
        <div className="post-block-style big-block post-thumb-bg">
          <div className="post-thumb ts-resize post-thumb-full post-thumb-low-padding">
            <a rel="bookmark" title={title}>
              <span
                className="digiqole-sm-bg-img"
                style={{
                  backgroundImage: `url(${background_url})`,
                }}
              />
            </a>
            <div className="grid-cat">
              {categories.map((category: any) => (
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
              ))}
            </div>
          </div>
          <div className="post-content">
            <h4 className="post-title md cur-po">
              <a onClick={() => handleSelectPost(id)} title={title}>
                {title}
              </a>
            </h4>
            <div className="post-meta  ">
              <span className="post-author">
                <i className="fa fa-user" />
                <a title={`Posts by ${author}`} rel="author">
                  {author}
                </a>
              </span>
              <span className="post-date">
                <i className="far fa-clock" />
                {formatDate(created_at)}
              </span>
            </div>
            <p>{sort_description}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="tab-content">
      <div
        role="tabpanel"
        className="tab-pane fade active show"
        id="7fc4cdd4bc5ea88"
      >
        <div className="block-tab-item">
          <div className="row">
            {newContentPosts.length > 0 && _renderLeftData(newContentPosts[0])}
            <div className="col-md-6 col-sm-6 second">
              <div className="post-block-list post-thumb-bg">
                <ul className="list-post">
                  {newContentPosts.length > 1 &&
                    newContentPosts
                      .slice(1, newContentPosts.length)
                      .map((item: Post) => (
                        <TabContentItem key={item.id} item={item} />
                      ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabContentNews;
