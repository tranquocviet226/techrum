import { getPostById } from "actions/admin/postAction";
import Aside from "components/user/aside";
import txtConstants from "constants/index";
import keys from "constants/key";
import { Path } from "constants/path";
import RelatedPostsContainer from "containers/user/RelatedPostsContainer";
import moment from "moment";
import React, { useEffect } from "react";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Post } from "types/model";
import colors from "utils/colors";
import { upsert } from "utils/function";
import { getLocalStorage, setLocalStorage } from "utils/localStorage";
import styles from "utils/styles";
import CommentComponent from "./postComponents/CommentComponent";

type Props = {
  postDetail: Post;
  match: any;
};

const PostDetail: React.FC<Props> = (props) => {
  const id = props?.match?.params?.id;

  const { postDetail } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  const title = postDetail?.title || "";
  const categories = postDetail?.categories || [];
  const firstCategory = categories?.length > 0 ? categories[0] : undefined;
  const author = postDetail?.author || "admin";
  const updated_at = postDetail?.updated_at || Date.now();
  const content = postDetail?.content || "";

  // Save recent post to localstorage
  useEffect(() => {
    if (postDetail) {
      const recentPosts = getLocalStorage(keys.recentPosts);
      if (recentPosts) {
        const newPosts = JSON.parse(recentPosts) as Array<any>;
        upsert(newPosts, postDetail);
        const sliceArray = newPosts.slice(0, 4);
        setLocalStorage(keys.recentPosts, JSON.stringify(sliceArray));
      } else {
        const newPosts = [];
        newPosts.push(postDetail);
        setLocalStorage(keys.recentPosts, JSON.stringify(newPosts));
      }
    }
  }, [postDetail]);

  useEffect(() => {
    getPostDetail();
  }, [id]);

  const getPostDetail = () => {
    dispatch(getPostById(id));
  };

  const handleGoHome = () => {
    history.push({
      pathname: `/${Path.HOME_PAGE}`,
    });
  };

  const _renderHeader = () => {
    return (
      <header className="entry-header clearfix">
        <h1 className="lg">{title}</h1>
        <ul className="post-meta">
          {categories.map((it) => (
            <li key={it.id} className="post-category">
              <a
                className="post-cat"
                style={{
                  backgroundColor: it?.color,
                }}
              >
                <span
                  className="before"
                  style={{
                    backgroundColor: it?.color,
                    color: "#ffffff",
                  }}
                />
                {it?.title}
                <span
                  className="after"
                  style={{
                    backgroundColor: it?.color,
                    color: "#ffffff",
                  }}
                />
              </a>
            </li>
          ))}
          <p></p>
          <li className="post-author">
            <img
              alt=""
              src="https://wolf-wallpapers.pro/images/hd-wolf-backgrounds-pixelstalknet-79-1-wolf-wallpapers.pro.jpg"
              srcSet="https://wolf-wallpapers.pro/images/hd-wolf-backgrounds-pixelstalknet-79-1-wolf-wallpapers.pro.jpg"
              className="avatar avatar-55 photo"
              height={55}
              width={55}
              loading="lazy"
            />
            <a href="#">{author}</a>
          </li>
          <li className="post-meta-date">
            <i className="far fa-clock" />
            {moment(updated_at).format("L")}
          </li>
          <li className="post-comment">
            <i className="fa fa-comments" />
            <a href="#" className="comments-link">
              {Math.floor(Math.random() * 100)}
            </a>
          </li>
        </ul>
      </header>
    );
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ol className="breadcrumb" data-wow-duration="2s">
              <li>
                <i className="fa fa-home" />{" "}
                <a style={styles.title} onClick={handleGoHome}>
                  {txtConstants.home}
                </a>
                <i className="fa fa-angle-right" />
              </li>
              <li>
                <a style={styles.title}>{firstCategory?.title}</a>{" "}
              </li>
              <li>
                <i className="fa fa-angle-right" />
                {title}
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div
        id="main-content"
        className="main-container blog-single post-layout-style1"
        role="main"
      >
        <div className="container">
          <div className="row"></div>
          <div className="row digiqole-content">
            <div className="col-lg-8 col-md-12">
              <article
                id="post-364"
                className="post-content post-single post-364 post type-post status-publish format-video has-post-thumbnail hentry category-video tag-technology post_format-post-format-video"
              >
                {/* Article header */}
                {_renderHeader()}
                <div className="post-body clearfix">
                  <div className="entry-content clearfix">
                    <FroalaEditorView
                      model={content}
                      config={{ attribution: false }}
                    />
                  </div>
                </div>
              </article>
              {/* Author box end */}
              <RelatedPostsContainer category={firstCategory} />
              <CommentComponent />
            </div>
            <Aside />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
