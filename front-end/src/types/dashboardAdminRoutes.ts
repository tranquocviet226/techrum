// @material-ui/icons
import BubbleChart from "@material-ui/icons/BubbleChart";
import Dashboard from "@material-ui/icons/Dashboard";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import PostAddIcon from "@material-ui/icons/PostAdd";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views for Admin layout
import DashboardPage from "components/admin/dashboard/Dashboard";
import Icons from "components/admin/icons/Icons";
import Maps from "components/admin/maps/Maps";
import NotificationsPage from "components/admin/notifications/Notifications";
import PostManagement from "components/admin/postManagement/PostManagement";
import TableList from "components/admin/tableList/TableList";
import Typography from "components/admin/typography/Typography";
import UpgradeToPro from "components/admin/upgradeToPro/UpgradeToPro";

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
