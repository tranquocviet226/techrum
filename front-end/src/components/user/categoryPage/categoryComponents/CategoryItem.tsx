import txtConstants from "constants/index";
import { Path } from "constants/path";
import { useHistory } from "react-router";
import { Post } from "types/model";
import { formatDate } from "utils/function";

type Props = {
  item: Post;
};

const CategoryItem: React.FC<Props> = (props) => {
  const { item } = props;
  const history = useHistory();

  const id = item?.id || 0;
  const title = item?.title || "";
  const background_url = item?.background_url || "";
  const categories = item?.categories || [];
  const author = item?.author || txtConstants.rootAuthor;
  const created_at = item?.created_at || Date.now();
  const description = item?.description || "";

  const handleGoPostDetail = () => {
    history.push({ pathname: `/${Path.POST}/${id}` });
  };

  return (
    <div className="col-lg-6">
      <article
        id="post-361"
        className="post-layout post-361 post type-post status-publish format-standard has-post-thumbnail hentry category-fashion tag-food"
      >
        <div className="post-block-style">
          <div className="post-thumb">
            <a>
              <img
                onClick={handleGoPostDetail}
                className="img-fluid lazyloaded"
                src={background_url}
                style={{ height: 300, objectFit: "cover" }}
                alt=" Ratcliffe to be Director of nation  talent Trump ignored"
                data-ll-status="loaded"
              />
            </a>
            <div className="grid-cat">
              {categories.map((it) => (
                <a
                  key={it.id}
                  className="post-cat"
                  style={{
                    backgroundColor: it.color,
                    color: "#ffffff",
                  }}
                >
                  <span
                    className="before"
                    style={{
                      backgroundColor: it.color,
                      color: "#ffffff",
                    }}
                  />
                  {it.title}
                  <span
                    className="after"
                    style={{
                      backgroundColor: it.color,
                      color: "#ffffff",
                    }}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="post-content">
            <div className="entry-blog-header">
              <h3 onClick={handleGoPostDetail} className="post-title md">
                <a>{title}</a>
              </h3>
            </div>
            <div className="post-meta">
              <div className="post-meta">
                <span className="post-author">
                  <i className="fa fa-user" /> <a>{author}</a>
                </span>
                <span className="post-meta-date">
                  <i className="fa fa-clock-o" />
                  {formatDate(created_at)}
                </span>{" "}
              </div>
            </div>
            <div className="entry-blog-summery">
              <p>{description} </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CategoryItem;
