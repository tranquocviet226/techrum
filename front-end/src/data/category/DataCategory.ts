import { Category } from "types/model";

const DataCategory: Category[] = [
  {
    id: 1,
    parent_id: 1,
    slug: "home",
    title: "Home",
    color: "#da1793",
    position: 0,
    is_active: 1,
    background_image:
      "https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_5.jpg",
    count: 1,
    sub_category: [
      {
        id: 1,
        parent_id: 1,
        slug: "home-1",
        title: "Home 1",
        color: "#da1793",
        position: 1,
        is_active: 1,
        background_image:
          "https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_5.jpg",
        count: 1,
        sub_category: [],
      },
      {
        id: 2,
        parent_id: 1,
        slug: "home-2",
        title: "Home 2",
        color: "#da1793",
        position: 1,
        is_active: 1,
        background_image:
          "https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_5.jpg",
        count: 1,
        sub_category: [],
      },
    ],
  },
  {
    id: 2,
    parent_id: 1,
    slug: "technology",
    title: "Technology",
    color: "#4ca80b",
    position: 1,
    is_active: 1,
    background_image:
      "https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_5.jpg",
    count: 1,
    sub_category: [
      {
        id: 1,
        parent_id: 2,
        slug: "technology-1",
        title: "Technology 1",
        color: "#4ca80b",
        position: 1,
        is_active: 1,
        background_image:
          "https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_5.jpg",
        count: 1,
        sub_category: [],
      },
    ],
  },
  {
    id: 3,
    parent_id: 1,
    slug: "lifestyle",
    title: "Lifestyle",
    color: "#fc4a00",
    position: 1,
    background_image:
      "https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_4.jpg",
    count: 1,
    is_active: 1,
    sub_category: [
      {
        id: 1,
        parent_id: 3,
        slug: "lifestyle-1",
        title: "Lifestyle 1",
        color: "#da1793",
        position: 1,
        is_active: 1,
        background_image:
          "https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_5.jpg",
        count: 1,
        sub_category: [],
      },
    ],
  },
  {
    id: 4,
    parent_id: 1,
    slug: "travel",
    title: "Travel",
    color: "#fda400",
    position: 1,
    is_active: 1,
    background_image:
      "https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_5.jpg",
    count: 1,
    sub_category: [
      {
        id: 1,
        parent_id: 4,
        slug: "travel-1",
        title: "Travel 1",
        color: "#da1793",
        position: 1,
        is_active: 1,
        background_image:
          "https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_5.jpg",
        count: 1,
        sub_category: [],
      },
    ],
  },
  {
    id: 5,
    parent_id: 1,
    slug: "video",
    title: "Video",
    color: "#690aa0",
    position: 1,
    is_active: 1,
    background_image:
      "https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_5.jpg",
    count: 1,
    sub_category: [
      {
        id: 1,
        parent_id: 5,
        slug: "video-1",
        title: "Video 1",
        color: "#da1793",
        position: 1,
        is_active: 1,
        background_image:
          "https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_5.jpg",
        count: 1,
        sub_category: [],
      },
    ],
  },
];

export default DataCategory;
