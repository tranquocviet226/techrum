import { useEffect } from "react"
import { ComponentType } from "types/common/componentTypes"
import { Category, Post } from "types/model"
import { ParamsPost } from "types/model/Post"

type Props = {
    categories: Category[]
    categoryFirstPosts: Post[]
    getPostsByCategory: (
        componentType: ComponentType,
        paramsPost?: ParamsPost
    ) => void,
    resetPosts: (componentType: ComponentType) => void
}

const CategoryFirst: React.FC<Props> = (props) => {
    const { categoryFirstPosts, getPostsByCategory, resetPosts, categories } = props

    const categoryFirst = categories[0]

    useEffect(() => {
        if (categories.length)
            getPostsByCategory(ComponentType.CATEGORY_POSTS_1, { total_result: 5, category_id: categoryFirst.id })
    }, [categories])

    return (
        <>
            {categoryFirstPosts[0] &&
                <section
                    className="elementor-section elementor-inner-section elementor-element elementor-element-41ac85fd elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="41ac85fd"
                    data-element_type="section"
                    data-settings='{"ekit_has_onepagescroll_dot":"yes"}'
                >
                    <div className="elementor-container elementor-column-gap-default">
                        <div
                            className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-33a62336"
                            data-id="33a62336"
                            data-element_type="column"
                            data-settings='{"background_background":"classic"}'
                        >
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                    className="elementor-element elementor-element-78f70d1f elementor-widget elementor-widget-newszone-title"
                                    data-id="78f70d1f"
                                    data-element_type="widget"
                                    data-widget_type="newszone-title.default"
                                >
                                    <div className="elementor-widget-container">
                                        <div className="section-heading heading-style3">
                                            <h2 className="block-title">
                                                <span className="title-angle-shap">
                                                    {categoryFirst.title}
                                                </span>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="elementor-element elementor-element-4c2d7e56 elementor-widget elementor-widget-newszone-post-block"
                                    data-id="4c2d7e56"
                                    data-element_type="widget"
                                    data-widget_type="newszone-post-block.default"
                                >
                                    <div className="elementor-widget-container">
                                        <div className="post-block-item style3">
                                            <div className="row">
                                                {_renderContentLeft(categoryFirstPosts[0])}
                                                {/* Col end */}
                                                {/* feature item */}
                                                {_renderContentRight(categoryFirstPosts.slice(1, categoryFirstPosts.length))}
                                                {/* List post Col end */}
                                                {/* feature item */}
                                            </div>
                                            {/* row */}
                                        </div>
                                        {/* block-item6 */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

const _renderItemContentRight = (post: Post) => {
    return (
        <div className="col-md-6 col-sm-6 sm-grid-content">
            <div className="post-block-style post-float post-thumb-bg">
                <div className="post-thumb post-thumb-full post-thumb-low-padding">
                    <a
                        href="./index.php/2019/06/30/copa-america-luis-suarez-devastated-us/index.html"
                        rel="bookmark"
                        title="Copa America: Luis Suarez devastated US"
                    >
                        <span
                            className="digiqole-sm-bg-img"
                            style={{ backgroundImage: `url(${post.background_url})`, }}
                        />
                    </a>
                </div>
                <div className="post-content">
                    <h4 className="post-title">
                        <a
                            href="./index.php/2019/06/30/copa-america-luis-suarez-devastated-us/index.html"
                            rel="bookmark"
                            title="Copa America: Luis Suarez devastated US"
                        >
                            {post.title}
                        </a>
                    </h4>
                    <div className="post-meta">
                        <span className="post-date">
                            <i className="fa fa-clock-o"></i>
                            {post.date}
                        </span>
                    </div>
                </div>
                {/* Post content end */}
            </div>
            {/* Post block style end */}
        </div>
    )
}

const _renderContentRight = (posts: Post[]) => {
    return (
        <div className="col-md-6 col-sm-6 order-md-2">
            <div className="row">
                {posts.map((post) => {
                    return _renderItemContentRight(post)
                })}
            </div>
        </div>
    )
}

const _renderContentLeft = (post: Post) => {

    const _renderItemCategory = (categories: Category[]) => {
        return (
            categories.map(category =>
                <a
                    className="post-cat"
                    href="./index.php/category/lifestyle/index.html"
                    style={{
                        backgroundColor: category.color,
                        color: "#ffffff",
                    }}
                >
                    {category.title}
                </a>
            )
        )
    }
    return (
        <div className="col-md-6 col-sm-6 feature-grid-content order-md-1">
            <div className="post-block-style clearfix">
                <div className="post-thumb ts-resize">
                    <div
                        className="item ts-overlay-style"
                        style={{ backgroundImage: `url(${post.background_url})`, }}
                    >
                        <a
                            href="./index.php/2019/06/30/the-billionaire-philan-thropist-read-to-learn-more-and-city/index.html"
                            className="img-link"
                        />
                    </div>
                    {_renderItemCategory(post.categories)}
                </div>
                <div className="post-content">
                    <h4 className="post-title">
                        <a
                            href="./index.php/2019/06/30/the-billionaire-philan-thropist-read-to-learn-more-and-city/index.html"
                            rel="bookmark"
                            title="The billionaire Philan thropist read to learn more and city"
                        >{post.title}
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
                                {post.author ? post.author.name : "Duynn"}
                            </a>
                        </span>
                        <span className="post-date">
                            <i
                                className="fa fa-clock-o"
                                aria-hidden="true"
                            />
                            {post.date}
                        </span>
                    </div>
                </div>
                {/* Post content end */}
            </div>
            {/* Post Block style end */}
        </div>
    )
}


export default CategoryFirst
