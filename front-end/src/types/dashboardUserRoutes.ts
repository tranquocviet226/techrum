import PostCreate from "components/user/postManagement/PostCreate";
import { Path } from "constants/path";
import CategoryPageContainer from "containers/user/CategoryPageContainer";
import HomePageContainer from "containers/user/HomePageContainer";
import PostDetail from "containers/user/PostDetailContainer";

const dashboardRoutes = [
  {
    path: Path.HOME_PAGE,
    name: "Home",
    component: HomePageContainer,
    layout: "/",
  },
  {
    path: Path.POST.concat("/:id"),
    name: "Post",
    component: PostDetail,
    layout: "/",
  },
  {
    path: Path.CATEGORY.concat("/:id"),
    name: "Category",
    component: CategoryPageContainer,
    layout: "/",
  },
  {
    path: Path.PUBLISH_POST,
    name: "Publish Post",
    component: PostCreate,
    layout: "/",
  },
];

export default dashboardRoutes;
