import HomePage from "components/User/HomePage//HomePage";
import PostDetail from "containers/PostDetail";

const dashboardRoutes = [
    {
        path: "home",
        name: "Home",
        component: HomePage,
        layout: "/",
    },
    {
        path: "post",
        name: "Post",
        component: PostDetail,
        layout: "/",
    },
];

export default dashboardRoutes;
