import HomePage from "components/user/homePage/HomePage";
import PostDetail from "containers/user/PostDetailContainer";
import { Path } from 'constants/path';

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
];

export default dashboardRoutes;
