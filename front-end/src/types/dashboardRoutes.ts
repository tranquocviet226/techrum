// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import Person from '@material-ui/icons/Person';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import BubbleChart from '@material-ui/icons/BubbleChart';
import LocationOn from '@material-ui/icons/LocationOn';
import Notifications from '@material-ui/icons/Notifications';
import Unarchive from '@material-ui/icons/Unarchive';
import Language from '@material-ui/icons/Language';
// core components/views for Admin layout
import DashboardPage from 'views/Admin/Dashboard/Dashboard';
import PostManagement from 'views/Admin/PostManagement/PostManagement';
import TableList from 'views/Admin/TableList/TableList';
import Typography from 'views/Admin/Typography/Typography';
import Icons from 'views/Admin/Icons/Icons';
import Maps from 'views/Admin/Maps/Maps';
import NotificationsPage from 'views/Admin/Notifications/Notifications';
import UpgradeToPro from 'views/Admin/UpgradeToPro/UpgradeToPro';
// core components/views for RTL layout
import AuthContainer from "containers/Login";
import RTLPage from 'views/Admin/RTLPage/RTLPage';

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: Dashboard,
    component: DashboardPage,
    layout: '/admin'
  },
  {
    path: '/post',
    name: 'Post Management',
    icon: Person,
    component: PostManagement,
    layout: '/admin'
  },
  {
    path: '/table',
    name: 'Category',
    icon: 'content_paste',
    component: TableList,
    layout: '/admin'
  },
  {
    path: '/typography',
    name: 'Typography',
    icon: LibraryBooks,
    component: Typography,
    layout: '/admin'
  },
  {
    path: '/icons',
    name: 'Icons',
    icon: BubbleChart,
    component: Icons,
    layout: '/admin'
  },
  {
    path: '/maps',
    name: 'Maps',
    icon: LocationOn,
    component: Maps,
    layout: '/admin'
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: Notifications,
    component: NotificationsPage,
    layout: '/admin'
  },
  {
    path: '/upgrade-to-pro',
    name: 'Upgrade To PRO',
    icon: Unarchive,
    component: UpgradeToPro,
    layout: '/admin'
  }
];

export default dashboardRoutes;
