import { Category } from "types/model"

type CategoryProps = {
    category: Category
};

type CategoriesProps = {
    categories?: Category[]
};

const CategoriesAside = (props: CategoriesProps) => {
    const { categories } = props

    return (<div
        id="digiqole-category-list-2"
        className="widget digiqole-category-list"
    >
        <div className="widgets_category ts-category-list-item">
            <ul className="ts-category-list">
                {categories?.map((item: Category) => {
                    return <CategoryAside category={item} />
                })}
            </ul>
        </div>
    </div>)
}

const CategoryAside = (props: CategoryProps) => {
    const { category } = props
    return (
        <li>
            <a
                className="rocket-lazyload lazyloaded"
                style={{
                    backgroundImage:
                        `url(${category.background_image})`,
                }}
                href="£"
                data-ll-status="loaded"
            >
                <span>{category.title}</span>
                <span className="bar" />
                <span className="category-count">{category.count}</span>
            </a>
        </li>
    )
}

export default CategoriesAside
