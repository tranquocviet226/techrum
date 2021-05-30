import { Path } from "constants/path";
import { useHistory } from "react-router";
import { Post } from "types/model";
import { formatDate } from "utils/function";

type Props = {
  item: Post;
};

const ReadNextPostItem: React.FC<Props> = (props) => {
  const { item } = props;
  const history = useHistory();
  const id = item?.id || 0;
  const title = item?.title || "";
  const background_url = item?.background_url || "";
  const category = item ? item?.categories[0] : null;
  const author = item?.author || "admin";
  const created_at = item?.created_at || Date.now();

  const handleSelectPost = () => {
    history.push({
      pathname: `/${Path.POST.concat("/" + id)}`,
      state: {
        id: id,
      },
    });
  };

  return (
    <div className="col-md-6 grid-item">
      <div className="loadmore-style2 post-grid-loadmore post-361 post type-post status-publish format-standard has-post-thumbnail hentry category-fashion tag-food">
        <div className="post-block-style">
          <div className="post-thumb ts-resize ">
            <a rel="bookmark" title={title}>
              <img
                style={{ width: 600, height: 300, objectFit: "cover" }}
                onClick={handleSelectPost}
                src={background_url}
                className="attachment-digiqole-medium size-digiqole-medium wp-post-image lazyloaded"
                alt=""
                data-ll-status="loaded"
              />
              <noscript>
                &lt;img width="600" height="398" src="${background_url}"
                class="attachment-digiqole-medium size-digiqole-medium
                wp-post-image" alt="" /&gt;
              </noscript>
            </a>
            <div className="grid-cat">
              <a
                className="post-cat"
                style={{
                  backgroundColor: category?.color,
                  color: "#ffffff",
                }}
              >
                {category?.title}
              </a>
            </div>
          </div>
          <div className="post-content">
            <h4 onClick={handleSelectPost} className="post-title">
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
                <i className="fa fa-clock-o" aria-hidden="true" />
                {formatDate(created_at)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadNextPostItem;
