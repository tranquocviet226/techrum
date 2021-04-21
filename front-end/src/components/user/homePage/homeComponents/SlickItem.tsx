import { Post } from "types/model";

type Props = {
  item: Post;
  onSelectPost: () => void;
};

const SlickItem = ({ item, onSelectPost }: Props) => {
  return (
    <div className="owl-item cloned ss-w-732">
      <div className="ts-overlay-style featured-post  post-361 post type-post status-publish format-standard has-post-thumbnail hentry category-fashion tag-food">
        <div
          className="item item-before rocket-lazyload lazyloaded"
          style={{ backgroundImage: `url("${item.background_url}")` }}
          data-ll-status="loaded"
        >
          <div className="overlay-post-content">
            <div className="post-content">
              <div className="grid-category">
                {item.categories.map((it: any) => (
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
                <a>{item.title}</a>
              </h3>
              <ul className="post-meta-info">
                <li className="author">
                  <i className="fa fa-user" />
                  <a href={item.author ? item.author.url : ""}>{item.author ? item.author.name : ""}</a>
                </li>
                <li>
                  <i className="fa fa-clock-o" />
                  {item.date}
                </li>
                <li className="active">
                  <i className="fas fa-fire"></i>
                  {item.views}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SlickItem.defaultProps = {};

export default SlickItem;
