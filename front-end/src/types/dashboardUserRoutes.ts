import HomePage from "components/User/HomePage//HomePage";
import PostDetail from "containers/PostDetail";
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
