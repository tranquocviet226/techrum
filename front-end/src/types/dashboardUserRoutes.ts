import HomePage from "components/user/homePage/HomePage";
import { Path } from "constants/path";
import CategoryPageContainer from "containers/user/CategoryPageContainer";
import PostDetail from "containers/user/PostDetailContainer";

const dashboardRoutes = [
  {
    path: Path.HOME_PAGE,
    name: "Home",
    component: HomePage,
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
];

export default dashboardRoutes;
