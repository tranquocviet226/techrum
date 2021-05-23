import { MEDIA_URL } from "constants/index";
import keys from "constants/key";
import { Path } from "constants/path";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Post } from "types/model";
import { formatDate } from "utils/function";
import { getLocalStorage } from "utils/localStorage";

type PostItemProps = {
  post: Post;
};

type PostListProps = {
  postList?: Post[];
};

const RecentPostList = (props: PostListProps) => {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    const data = getLocalStorage(keys.recentPosts);
    if (data) {
      setPosts(JSON.parse(data));
    }
  }, []);

  const renderItem = () => {
    return posts?.map((post: Post) => (
      <PostItem post={post} key={post.id} />
    ));
  };

  return (
    <div className="recent-posts-widget post-list-item">
      <div className="post-tab-list">{renderItem()}</div>
    </div>
  );
};

const PostItem = (props: PostItemProps) => {
  const { post } = props;
  const history = useHistory()
  const id = post?.id || 0
  const background_url = post?.background_url || MEDIA_URL.concat(post?.background_name);
  const categories = post?.categories || [];
  const title = post?.title || "";
  const created_at = post?.created_at || Date.now();

  const handleSelectPost = () => {
    history.push({
      pathname: `/${Path.POST.concat("/" + id)}`,
      state: {
        id: id,
      },
    })
  }

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
            href=""
            style={{ color: categories && categories.length > 0 ? categories[0].color : "#FFF"}}
          >
            {categories && categories.length > 0 ? categories[0].title : ""}
          </a>
        </span>
        <h4 onClick={handleSelectPost} className="post-title">
          <a rel="bookmark" className="post-title">
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

export default RecentPostList;
