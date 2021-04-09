import { Category } from "types/model";

const DataCategory: Category[] = [
  {
    id: 1,
    parent_id: 1,
    slug: "fashion",
    title: "Fashion",
    color: "#da1793",
    position: 0,
    is_active: 1,
    background_image: "https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_5.jpg",
    count:1
  },
  {
    id: 2,
    parent_id: 1,
    slug: "fashion",
    title: "Fashion",
    color: "#fc4a00",
    position: 1,
    is_active: 0,
    background_image: "https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_4.jpg",
    count: 1
  },
];

export default DataCategory;
