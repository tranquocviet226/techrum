import txtConstants from "constants/index";
import { DataPost } from "data";
import { Post } from "types/model";
import { formatDate } from "utils/function";

type PostItemProps = {
  post: Post;
};

type PostListProps = {
  postList: Post[];
};

const PostList = (props: PostListProps) => {
  const { postList } = props;
  const renderItem = (postList: Post[]) => {
    return postList.map((post: Post) => <PostItem post={post} key={post.id}/>);
  };
  return (
    <div className="recent-posts-widget post-list-item">
      <div className="post-tab-list">{renderItem(postList)}</div>
    </div>
  );
};

const PostItem = (props: PostItemProps) => {
  const { post } = props;
  const background_url = post?.background_url || "";
  const categories = post?.categories || [];
  const title = post?.title || "";
  const created_at = post?.created_at || Date.now();
  return (
    <div className="post-content media">
      <div className="post-thumb">
        <a href={post.redirect_to_url} rel="bookmark" title={title}>
          <span
            className="digiqole-sm-bg-img rocket-lazyload lazyloaded"
            style={{ backgroundImage: `url(${background_url})` }}
            data-ll-status="loaded"
          />
        </a>
      </div>
      <div className="post-info media-body">
        <span className="post-tag">
          <a
            className="post-cat only-color"
            href="£"
            style={{ color: categories[0].color }}
          >
            {categories[0].title}
          </a>
        </span>
        <h4 className="post-title">
          <a href={"#"} rel="bookmark">
            {title}
          </a>
        </h4>
        <div className="post-meta">
          <span className="post-date">
            <i className="fa fa-clock-o" aria-hidden="true" />
            {formatDate(created_at)}
          </span>
        </div>
      </div>
      <div className="clearfix" />
    </div>
  );
};

PostList.defaultProps = {
  postList: DataPost,
};

export default PostList;
