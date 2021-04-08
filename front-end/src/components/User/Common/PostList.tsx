import { DataPost } from "data";
import { Post } from "types/model";

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
  return (
    <div className="post-content media">
      <div className="post-thumb">
        <a href={post.redirect_to_url} rel="bookmark" title={post.title}>
          <span
            className="digiqole-sm-bg-img rocket-lazyload lazyloaded"
            style={{ backgroundImage: `url(${post.background_url})` }}
            data-ll-status="loaded"
          />
        </a>
      </div>
      <div className="post-info media-body">
        <span className="post-tag">
          <a
            className="post-cat only-color"
            href="£"
            style={{ color: post.categories[0].color }}
          >
            {post.categories[0].title}
          </a>
        </span>
        <h4 className="post-title">
          <a href={post.redirect_to_url} rel="bookmark">
            {post.title}
          </a>
        </h4>
        <div className="post-meta">
          <span className="post-date">
            <i className="fa fa-clock-o" aria-hidden="true" />
            {post.date}
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
