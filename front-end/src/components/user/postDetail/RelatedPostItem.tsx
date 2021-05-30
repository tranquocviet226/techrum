import { Path } from "constants/path";
import { useHistory } from "react-router";
import { Category, Post } from "types/model";
import { formatDate } from "utils/function";

type Props = {
  item: Post;
};

const RelatedPostItem: React.FC<Props> = (props) => {
  const { item } = props;
  const history = useHistory();
  const id = item?.id || 0;
  const title = item?.title || "";
  const categories = item?.categories || [];
  const background_url = item?.background_url || "";
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
    <div className="owl-item cloned">
      <div className="item item post-block-style">
        <div className="post-thumb">
          <a>
            <img
              className="img-fluid lazyloaded"
              src={background_url}
              style={{ height: 250, objectFit: "cover" }}
              alt=""
              data-ll-status="loaded"
            />
            <noscript>
              &lt;img class="img-fluid" src="${background_url}" alt=""&gt;
            </noscript>
          </a>
          <div className="grid-cat">
            {categories.map((it) => (
              <a
                key={it.id}
                className="post-cat"
                style={{
                  backgroundColor: it?.color,
                  color: "#ffffff",
                }}
              >
                {it?.title}
              </a>
            ))}
          </div>
        </div>
        <div className="post-content">
          <h3 onClick={handleSelectPost} className="post-title">
            <a>{title}</a>
          </h3>
          <span className="post-date-info">
            <i className="fa fa-clock-o" />
            {formatDate(created_at)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RelatedPostItem;
