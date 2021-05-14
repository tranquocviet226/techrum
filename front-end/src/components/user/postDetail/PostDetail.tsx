import { getPostById } from "actions/admin/postAction";
import Aside from "components/user/aside";
import txtConstants from "constants/index";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Post } from "types/model";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";

type Props = {
  postDetail: Post;
  location: any;
};

const PostDetail: React.FC<Props> = (props) => {
  const id = props.location?.state?.id;
  const { postDetail } = props;
  const dispatch = useDispatch();

  const title = postDetail?.title || "";
  const categories = postDetail?.categories || [];
  const firstCategory = categories?.length > 0 ? categories[0].title : null;
  const author = postDetail?.author || "admin";
  const createdAt = postDetail?.created_at || Date.now();
  const content = postDetail?.content || "";

  useEffect(() => {
    getPostDetail();
  }, []);

  const getPostDetail = () => {
    dispatch(getPostById(id));
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ol className="breadcrumb" data-wow-duration="2s">
              <li>
                <i className="fa fa-home" /> <a href="">{txtConstants.home}</a>
                <i className="fa fa-angle-right" />
              </li>
              <li>
                <a href="">{firstCategory}</a>{" "}
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
                <header className="entry-header clearfix">
                  <h1 className="post-title lg">{title}</h1>
                  <ul className="post-meta">
                    <li className="post-category">
                      <a
                        className="post-cat"
                        href=""
                        style={{
                          backgroundColor: "#fc4a00",
                          color: "#ffffff",
                        }}
                      >
                        <span
                          className="before"
                          style={{
                            backgroundColor: "#fc4a00",
                            color: "#ffffff",
                          }}
                        />
                        {firstCategory}
                        <span
                          className="after"
                          style={{
                            backgroundColor: "#fc4a00",
                            color: "#ffffff",
                          }}
                        />
                      </a>
                    </li>
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
                      <i className="fa fa-clock-o" />
                      {moment(createdAt).format("lll")}
                    </li>
                    <li className="post-comment">
                      <i className="fa fa-comments" />
                      <a href="#" className="comments-link">
                        {Math.floor(Math.random() * 100000)}{" "}
                      </a>
                    </li>
                  </ul>
                </header>
                <div className="post-body clearfix">
                  {/* Article content */}
                  <div className="entry-content clearfix">
                    {/* {content} */}
                    <FroalaEditorView model={content}/>
                  </div>  
                  {/* end entry-content */}
                </div>
                {/* end post-body */}
              </article>
              <div className="author-box solid-bg">
                <div className="author-img pull-left">
                  <img
                    alt=""
                    src="https://wolf-wallpapers.pro/images/hd-wolf-backgrounds-pixelstalknet-79-1-wolf-wallpapers.pro.jpg"
                    srcSet="https://wolf-wallpapers.pro/images/hd-wolf-backgrounds-pixelstalknet-79-1-wolf-wallpapers.pro.jpg"
                    className="avatar avatar-96 photo"
                    height={96}
                    width={96}
                    loading="lazy"
                  />
                </div>
                <div className="author-info">
                  <h3>duynn100198</h3>
                  <p className="author-url">
                    <a href="" target="_blank">
                      akdjskdhskdh
                    </a>
                  </p>
                  <p></p>
                </div>
              </div>{" "}
              {/* Author box end */}
              <div className="ts-related-post">
                <div className="section-heading heading-style3">
                  <h3 className="mb-25">Related post </h3>
                </div>
                <div className="popular-grid-slider owl-carousel owl-loaded owl-drag">
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(-663px, 0px, 0px)",
                        transition: "all 0s ease 0s",
                        width: "2322px",
                      }}
                    >
                      <div
                        className="owl-item cloned"
                        style={{ width: "301.664px", marginRight: "30px" }}
                      >
                        <div className="item item post-block-style">
                          <div className="post-thumb">
                            <a href="https://demo.themewinter.com/wp/digiqoles/lopez-has-reportedly-added-to-her-real-estate-holdings-an-eight/">
                              <img
                                className="img-fluid lazyloaded"
                                src="https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_4-455x300.jpg"
                                alt=""
                                data-ll-status="loaded"
                              />
                              <noscript>
                                &lt;img class="img-fluid"
                                src="https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_4-455x300.jpg"
                                alt=""&gt;
                              </noscript>
                            </a>
                            <div className="grid-cat">
                              <a
                                className="post-cat"
                                href="https://demo.themewinter.com/wp/digiqoles/category/lifestyle/fashion/"
                                style={{
                                  backgroundColor: "#da1793",
                                  color: "#ffffff",
                                }}
                              >
                                Fashion
                              </a>
                            </div>
                          </div>
                          <div className="post-content">
                            <h3 className="post-title">
                              <a href="https://demo.themewinter.com/wp/digiqoles/lopez-has-reportedly-added-to-her-real-estate-holdings-an-eight/">
                                Lopez has reportedly added to her real...
                              </a>
                            </h3>
                            <span className="post-date-info">
                              <i className="fa fa-clock-o" />
                              June 30, 2019{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "301.664px", marginRight: "30px" }}
                      >
                        <div className="item item post-block-style">
                          <div className="post-thumb">
                            <a href="https://demo.themewinter.com/wp/digiqoles/the-billionaire-philan-thropist-read-to-learn-more-and-city/">
                              <img
                                className="img-fluid lazyloaded"
                                src="https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_5-455x300.jpg"
                                alt=""
                                data-ll-status="loaded"
                              />
                              <noscript>
                                &lt;img class="img-fluid"
                                src="https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_5-455x300.jpg"
                                alt=""&gt;
                              </noscript>
                            </a>
                            <div className="grid-cat">
                              <a
                                className="post-cat"
                                href="https://demo.themewinter.com/wp/digiqoles/category/lifestyle/fashion/"
                                style={{
                                  backgroundColor: "#da1793",
                                  color: "#ffffff",
                                }}
                              >
                                Fashion
                              </a>
                              <a
                                className="post-cat"
                                href="https://demo.themewinter.com/wp/digiqoles/category/lifestyle/"
                                style={{
                                  backgroundColor: "#fda400",
                                  color: "#ffffff",
                                }}
                              >
                                Lifestyle
                              </a>
                            </div>
                          </div>
                          <div className="post-content">
                            <h3 className="post-title">
                              <a href="https://demo.themewinter.com/wp/digiqoles/the-billionaire-philan-thropist-read-to-learn-more-and-city/">
                                The billionaire Philan thropist read to learn...
                              </a>
                            </h3>
                            <span className="post-date-info">
                              <i className="fa fa-clock-o" />
                              June 30, 2019{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "301.664px", marginRight: "30px" }}
                      >
                        <div className="item item post-block-style">
                          <div className="post-thumb">
                            <a href="https://demo.themewinter.com/wp/digiqoles/how-childhood-viral-infections-may-later-drive-multiple/">
                              <img
                                className="img-fluid lazyloaded"
                                src="https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/health_4-455x300.jpg"
                                alt=""
                                data-ll-status="loaded"
                              />
                              <noscript>
                                &lt;img class="img-fluid"
                                src="https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/health_4-455x300.jpg"
                                alt=""&gt;
                              </noscript>
                            </a>
                            <div className="grid-cat">
                              <a
                                className="post-cat"
                                href="https://demo.themewinter.com/wp/digiqoles/category/lifestyle/health/"
                                style={{
                                  backgroundColor: "#690aa0",
                                  color: "#ffffff",
                                }}
                              >
                                Health
                              </a>
                            </div>
                          </div>
                          <div className="post-content">
                            <h3 className="post-title">
                              <a href="https://demo.themewinter.com/wp/digiqoles/how-childhood-viral-infections-may-later-drive-multiple/">
                                How childhood viral infections may later
                                drive...
                              </a>
                            </h3>
                            <span className="post-date-info">
                              <i className="fa fa-clock-o" />
                              June 30, 2019{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "301.664px", marginRight: "30px" }}
                      >
                        <div className="item item post-block-style">
                          <div className="post-thumb">
                            <a href="https://demo.themewinter.com/wp/digiqoles/lopez-has-reportedly-added-to-her-real-estate-holdings-an-eight/">
                              <img
                                className="img-fluid lazyloaded"
                                src="https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_4-455x300.jpg"
                                alt=""
                                data-ll-status="loaded"
                              />
                              <noscript>
                                &lt;img class="img-fluid"
                                src="https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_4-455x300.jpg"
                                alt=""&gt;
                              </noscript>
                            </a>
                            <div className="grid-cat">
                              <a
                                className="post-cat"
                                href="https://demo.themewinter.com/wp/digiqoles/category/lifestyle/fashion/"
                                style={{
                                  backgroundColor: "#da1793",
                                  color: "#ffffff",
                                }}
                              >
                                Fashion
                              </a>
                            </div>
                          </div>
                          <div className="post-content">
                            <h3 className="post-title">
                              <a href="https://demo.themewinter.com/wp/digiqoles/lopez-has-reportedly-added-to-her-real-estate-holdings-an-eight/">
                                Lopez has reportedly added to her real...
                              </a>
                            </h3>
                            <span className="post-date-info">
                              <i className="fa fa-clock-o" />
                              June 30, 2019{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "301.664px", marginRight: "30px" }}
                      >
                        <div className="item item post-block-style">
                          <div className="post-thumb">
                            <a href="https://demo.themewinter.com/wp/digiqoles/the-billionaire-philan-thropist-read-to-learn-more-and-city/">
                              <img
                                className="img-fluid lazyloaded"
                                src="https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_5-455x300.jpg"
                                alt=""
                                data-ll-status="loaded"
                              />
                              <noscript>
                                &lt;img class="img-fluid"
                                src="https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_5-455x300.jpg"
                                alt=""&gt;
                              </noscript>
                            </a>
                            <div className="grid-cat">
                              <a
                                className="post-cat"
                                href="https://demo.themewinter.com/wp/digiqoles/category/lifestyle/fashion/"
                                style={{
                                  backgroundColor: "#da1793",
                                  color: "#ffffff",
                                }}
                              >
                                Fashion
                              </a>
                              <a
                                className="post-cat"
                                href="https://demo.themewinter.com/wp/digiqoles/category/lifestyle/"
                                style={{
                                  backgroundColor: "#fda400",
                                  color: "#ffffff",
                                }}
                              >
                                Lifestyle
                              </a>
                            </div>
                          </div>
                          <div className="post-content">
                            <h3 className="post-title">
                              <a href="https://demo.themewinter.com/wp/digiqoles/the-billionaire-philan-thropist-read-to-learn-more-and-city/">
                                The billionaire Philan thropist read to learn...
                              </a>
                            </h3>
                            <span className="post-date-info">
                              <i className="fa fa-clock-o" />
                              June 30, 2019{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "301.664px", marginRight: "30px" }}
                      >
                        <div className="item item post-block-style">
                          <div className="post-thumb">
                            <a href="https://demo.themewinter.com/wp/digiqoles/how-childhood-viral-infections-may-later-drive-multiple/">
                              <img
                                className="img-fluid lazyloaded"
                                src="https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/health_4-455x300.jpg"
                                alt=""
                                data-ll-status="loaded"
                              />
                              <noscript>
                                &lt;img class="img-fluid"
                                src="https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/health_4-455x300.jpg"
                                alt=""&gt;
                              </noscript>
                            </a>
                            <div className="grid-cat">
                              <a
                                className="post-cat"
                                href="https://demo.themewinter.com/wp/digiqoles/category/lifestyle/health/"
                                style={{
                                  backgroundColor: "#690aa0",
                                  color: "#ffffff",
                                }}
                              >
                                Health
                              </a>
                            </div>
                          </div>
                          <div className="post-content">
                            <h3 className="post-title">
                              <a href="https://demo.themewinter.com/wp/digiqoles/how-childhood-viral-infections-may-later-drive-multiple/">
                                How childhood viral infections may later
                                drive...
                              </a>
                            </h3>
                            <span className="post-date-info">
                              <i className="fa fa-clock-o" />
                              June 30, 2019{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "301.664px", marginRight: "30px" }}
                      >
                        <div className="item item post-block-style">
                          <div className="post-thumb">
                            <a href="https://demo.themewinter.com/wp/digiqoles/lopez-has-reportedly-added-to-her-real-estate-holdings-an-eight/">
                              <img
                                className="img-fluid lazyloaded"
                                src="https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_4-455x300.jpg"
                                alt=""
                                data-ll-status="loaded"
                              />
                              <noscript>
                                &lt;img class="img-fluid"
                                src="https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_4-455x300.jpg"
                                alt=""&gt;
                              </noscript>
                            </a>
                            <div className="grid-cat">
                              <a
                                className="post-cat"
                                href="https://demo.themewinter.com/wp/digiqoles/category/lifestyle/fashion/"
                                style={{
                                  backgroundColor: "#da1793",
                                  color: "#ffffff",
                                }}
                              >
                                Fashion
                              </a>
                            </div>
                          </div>
                          <div className="post-content">
                            <h3 className="post-title">
                              <a href="https://demo.themewinter.com/wp/digiqoles/lopez-has-reportedly-added-to-her-real-estate-holdings-an-eight/">
                                Lopez has reportedly added to her real...
                              </a>
                            </h3>
                            <span className="post-date-info">
                              <i className="fa fa-clock-o" />
                              June 30, 2019{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-nav">
                    <div className="owl-prev">
                      <i className="fa fa-angle-left" />
                    </div>
                    <div className="owl-next">
                      <i className="fa fa-angle-right" />
                    </div>
                  </div>
                  <div className="owl-dots disabled" />
                </div>
              </div>
            </div>{" "}
            {/* .col-md-8 */}
            <Aside />
          </div>{" "}
          {/* .row */}
        </div>{" "}
        {/* .container */}
      </div>
      {/*#main-content */}
    </>
  );
};

export default PostDetail;
