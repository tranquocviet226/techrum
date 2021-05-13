import txtConstants from "constants/index";
import { Post } from "types/model";
import { formatDate } from "utils/function";

type Props = {
  item: Post;
  onSelectPost: () => void;
};

const SlickItem = ({ item, onSelectPost }: Props) => {
  const background_url = item?.background_url || "";
  const categories = item?.categories || [];
  const title = item?.title || "";
  const author = item?.author || txtConstants.rootAuthor;
  const created_at = item?.created_at || Date.now();
  const views = item?.views || 0;
  return (
    <div className="ts-overlay-style featured-post  post-361 post type-post status-publish format-standard has-post-thumbnail hentry category-fashion tag-food">
      <div
        className="item item-before rocket-lazyload lazyloaded"
        style={{ backgroundImage: `url("${background_url}")` }}
        data-ll-status="loaded"
      >
        <div className="overlay-post-content">
          <div className="post-content">
            <div className="grid-category">
              {categories.map((it: any) => (
                <a
                  className="post-cat cur-po"
                  key={it.id}
                  style={{ backgroundColor: it.color, color: "#fff" }}
                >
                  {it.title}
                </a>
              ))}
            </div>
            <h3 onClick={onSelectPost} className="post-title cur-po">
              <a>{title}</a>
            </h3>
            <ul className="post-meta-info">
              <li className="author">
                <div className="txt_clip">
                  <i className="fa fa-user" />
                  <a href="">{author}</a>
                </div>
              </li>
              <li>
                <div className="txt_clip">
                  <i className="far fa-clock" />
                  <a> {formatDate(created_at)}</a>
                </div>
              </li>
              <li className="active">
                <div className="txt_clip">
                  <i className="fas fa-fire"></i>
                  {views}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

SlickItem.defaultProps = {};

export default SlickItem;
