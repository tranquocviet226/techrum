// @material-ui/icons
import BubbleChart from "@material-ui/icons/BubbleChart";
import CategoryIcon from "@material-ui/icons/Category";
import Dashboard from "@material-ui/icons/Dashboard";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import PostAddIcon from "@material-ui/icons/PostAdd";
// core components/views for Admin layout
import DashboardPage from "components/admin/dashboard/Dashboard";
import Icons from "components/admin/icons/Icons";
import Maps from "components/admin/maps/Maps";
import NotificationsPage from "components/admin/notifications/Notifications";
import PostCreate from "components/admin/postManagement/PostCreate";
import Typography from "components/admin/typography/Typography";
import paths from "constants/path";
import CategoryContainer from "containers/admin/category/CategoryContainer";
import { default as PostContainer } from "containers/admin/post/PostManagementContainer";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/post",
    name: "Post Management",
    icon: PostAddIcon,
    component: PostContainer,
    layout: "/admin",
  },
  {
    path: "/category",
    name: "Category",
    icon: CategoryIcon,
    component: CategoryContainer,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: LocationOn,
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
  },
];

export const childrenRoutes = [
  {
    path: paths.POST_CREATE,
    name: "Create Post",
    component: PostCreate,
    layout: "/admin",
  },
];

export default dashboardRoutes;
