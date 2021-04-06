// @material-ui/icons
import BubbleChart from "@material-ui/icons/BubbleChart";
import Dashboard from "@material-ui/icons/Dashboard";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import PostAddIcon from "@material-ui/icons/PostAdd";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views for Admin layout
import DashboardPage from "views/Admin/Dashboard/Dashboard";
import Icons from "views/Admin/Icons/Icons";
import Maps from "views/Admin/Maps/Maps";
import NotificationsPage from "views/Admin/Notifications/Notifications";
import PostManagement from "views/Admin/PostManagement/PostManagement";
import TableList from "views/Admin/TableList/TableList";
import Typography from "views/Admin/Typography/Typography";
import UpgradeToPro from "views/Admin/UpgradeToPro/UpgradeToPro";

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
    component: PostManagement,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Category",
    icon: "content_paste",
    component: TableList,
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
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin",
  },
];

export default dashboardRoutes;
