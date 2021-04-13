import { useEffect, useState } from "react";
import { ComponentType } from "types/common/componentTypes";
import { Post } from "types/model";
import { ParamsPost } from "types/model/Post";

type Props = {
  content_id: number;
  newContentPosts: Post[]
  getPostsByCategory: (
    componentType: ComponentType,
    paramsPost?: ParamsPost
  ) => void,
  resetPosts: (componentType: ComponentType) => void
};

type PostItemProps = {
  item: Post;
};

const TabContentItem = ({ item }: PostItemProps) => {
  const onSelectPost = () => {
    console.log(item.id);
  };
  return (
    <li>
      <div className="post-block-style post-float media">
        <div className="post-thumb d-flex">
          <a
            href="./index.php/2019/06/30/naturalistic-design-is-thriving-as-actual-nature-dies/index.html"
            rel="bookmark"
            title={item.title}
          >
            <span
              className="digiqole-sm-bg-img"
              style={{
                backgroundImage: `url(${item.background_url})`,
              }}
            />
          </a>
        </div>
        <div className="post-content media-body">
          {item.categories.map((category: any) => (
            <a
              key={category.id}
              className="post-cat only-color"
              style={{ color: category.color }}
            >
              {category.title}
            </a>
          ))}

          <h4 className="post-title title-small">
            <a onClick={onSelectPost} rel="bookmark" title={item.title}>
              {item.title}
            </a>
          </h4>
          <div className="post-meta">
            <span className="post-date">
              <i className="fa fa-clock-o" />
              {item.date}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

const TabContentNews = ({ content_id, getPostsByCategory, newContentPosts }: Props) => {
  useEffect(() => {
    getPostsByCategory(ComponentType.NEW_CONTENT_POSTS, { total_result: 5, category_id: content_id })
  }, [content_id])

  const _renderLeftData = (item: any) => {
    return (
      <div className="col-md-6 col-sm-6">
        <div className="post-block-style big-block post-thumb-bg">
          <div className="post-thumb ts-resize post-thumb-full post-thumb-low-padding">
            <a
              href="./index.php/2019/06/30/best-gardening-supplies-for-the-horticultural-hopeless/index.html"
              rel="bookmark"
              title={item.title}
            >
              <span
                className="digiqole-sm-bg-img"
                style={{
                  backgroundImage: `url(${item.background_url})`,
                }}
              />
            </a>
            <div className="grid-cat">
              {item.categories.map((category: any) => (
                <a
                  key={category.id}
                  className="post-cat"
                  href="./index.php/category/lifestyle/tech/index.html"
                  style={{
                    backgroundColor: category.color,
                    color: "#ffffff",
                  }}
                >
                  {category.title}
                </a>
              ))}
            </div>
          </div>
          <div className="post-content">
            <h4 className="post-title md">
              <a
                href="./index.php/2019/06/30/best-gardening-supplies-for-the-horticultural-hopeless/index.html"
                rel="bookmark"
                title={item.title}
              >
                {item.title}
              </a>
            </h4>
            <div className="post-meta  ">
              <span className="post-author">
                <i className="fa fa-user" />
                <a
                  href="./index.php/author/duynn100198/index.html"
                  title="Posts by duynn100198"
                  rel="author"
                >
                  {item.author ? item.author.name : "Duynn"}
                </a>
              </span>
              <span className="post-date">
                <i className="fa fa-clock-o" />
                {item.date}
              </span>
            </div>
            <p>{item.sort_description}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="tab-content">
      <div
        role="tabpanel"
        className="tab-pane fade active show"
        id="7fc4cdd4bc5ea88"
      >
        <div className="block-tab-item">
          <div className="row">
            {newContentPosts.length > 0 && _renderLeftData(newContentPosts[0])}
            <div className="col-md-6 col-sm-6 second">
              <div className="post-block-list post-thumb-bg">
                <ul className="list-post">
                  {newContentPosts.length > 1 && newContentPosts.slice(1, newContentPosts.length).map((item: Post) => (
                    <TabContentItem key={item.id} item={item} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabContentNews;
