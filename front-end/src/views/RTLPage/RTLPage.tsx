/*eslint-disable*/
import React from 'react';
// import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from 'react-chartist';
// @material-ui/core
import withStyles from '@material-ui/core/styles/withStyles';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Store from '@material-ui/icons/Store';
import Warning from '@material-ui/icons/Warning';
import DateRange from '@material-ui/icons/DateRange';
import LocalOffer from '@material-ui/icons/LocalOffer';
import Update from '@material-ui/icons/Update';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import AccessTime from '@material-ui/icons/AccessTime';
import Accessibility from '@material-ui/icons/Accessibility';
import BugReport from '@material-ui/icons/BugReport';
import Code from '@material-ui/icons/Code';
import Cloud from '@material-ui/icons/Cloud';
// core components
import Button from '../../components/MaterialCommon/CustomButtons/Button';
import GridItem from '../../components/MaterialCommon/Grid/GridItem';
import GridContainer from '../../components/MaterialCommon/Grid/GridContainer';
import Table from '../../components/MaterialCommon/Table/Table';
import Tasks from '../../components/MaterialCommon/Tasks/Tasks';
import CustomTabs from '../../components/MaterialCommon/CustomTabs/CustomTabs';
import Danger from '../../components/MaterialCommon/Typography/Danger';
import Card from '../../components/MaterialCommon/Card/Card';
import CardHeader from '../../components/MaterialCommon/Card/CardHeader';
import CardAvatar from '../../components/MaterialCommon/Card/CardAvatar';
import CardIcon from '../../components/MaterialCommon/Card/CardIcon';
import CardBody from '../../components/MaterialCommon/Card/CardBody';
import CardFooter from '../../components/MaterialCommon/Card/CardFooter';
import SnackbarContent from '../../components/MaterialCommon/Snackbar/SnackbarContent';

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from '../../variables/charts';

import rtlStyle from '../../assets/jss/material-dashboard-react/views/rtlStyle';

import avatar from '../../assets/img/faces/marc.jpg';

let bugs = [
  'طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن؟',
  '	نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند؟',
  'همان حال کار آنها به نوعی وابسته به متن می‌باشد',
  '	آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند'
];
let website = [
  'بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته',
  'اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید؟'
];
let server = [
  'گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی؟',
  'از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی ؟',
  'از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند؟'
];

interface Props {
  classes: any;
}

interface State {
  value: number;
}

class RTLPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
  }

  handleChange = (event: any, value: number) => {
    this.setState({ value });
  }

  handleChangeIndex = (index: number) => {
    this.setState({ value: index });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats={true} icon={true}>
                <CardIcon color="warning">
                  <Icon>content_copy</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>فضا مصرف شده</p>
                <h3 className={classes.cardTitle}>
                  49/50 <small>GB</small>
                </h3>
              </CardHeader>
              <CardFooter stats={true}>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    فضای بیشتری داشته باشید...
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats={true} icon={true}>
                <CardIcon color="success">
                  <Store />
                </CardIcon>
                <p className={classes.cardCategory}>سود</p>
                <h3 className={classes.cardTitle}>$34,245</h3>
              </CardHeader>
              <CardFooter stats={true}>
                <div className={classes.stats}>
                  <DateRange />
                  ۲۴ ساعت اخیر
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats={true} icon={true}>
                <CardIcon color="danger">
                  <Icon>info_outline</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>مشکلات حل شده</p>
                <h3 className={classes.cardTitle}>75</h3>
              </CardHeader>
              <CardFooter stats={true}>
                <div className={classes.stats}>
                  <LocalOffer />
                  توسط گیت‌هاب
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats={true} icon={true}>
                <CardIcon color="info">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>دنبال‌کننده</p>
                <h3 className={classes.cardTitle}>+245</h3>
              </CardHeader>
              <CardFooter stats={true}>
                <div className={classes.stats}>
                  <Update />
                  هم‌اکنون
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart={true}>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  // listener={dailySalesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>فروش روزانه</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                  </span>{' '}
                  رشد در فروش امروز.
                </p>
              </CardBody>
              <CardFooter chart={true}>
                <div className={classes.stats}>
                  <AccessTime /> ۴ دقیقه پیش
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart={true}>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  // responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  // listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>دنبال کننده‌های ایمیلی</h4>
                <p className={classes.cardCategory}>کارایی آخرین کمپین</p>
              </CardBody>
              <CardFooter chart={true}>
                <div className={classes.stats}>
                  <AccessTime /> کمپین دو روز پیش ارسال شد
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart={true}>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  // listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>وظایف انجام شده</h4>
                <p className={classes.cardCategory}>کارایی آخرین کمپین</p>
              </CardBody>
              <CardFooter chart={true}>
                <div className={classes.stats}>
                  <AccessTime /> کمپین دو روز پیش ارسال شد
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomTabs
              title="وظایف:"
              headerColor="primary"
              rtlActive={true}
              tabs={[
                {
                  tabName: 'باگ‌ها',
                  tabIcon: BugReport,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0, 3]}
                      tasksIndexes={[0, 1, 2, 3]}
                      tasks={bugs}
                      rtlActive={true}
                    />
                  )
                },
                {
                  tabName: 'وبسایت',
                  tabIcon: Code,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0]}
                      tasksIndexes={[0, 1]}
                      tasks={website}
                      rtlActive={true}
                    />
                  )
                },
                {
                  tabName: 'سرور',
                  tabIcon: Cloud,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[1]}
                      tasksIndexes={[0, 1, 2]}
                      tasks={server}
                      rtlActive={true}
                    />
                  )
                }
              ]}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>آمار کارکنان</h4>
                <p className={classes.cardCategoryWhite}>
                  کارکنان جدید از ۱۵ آبان ۱۳۹۶
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={['کد', 'نام', 'حقوق', 'استان']}
                  tableData={[
                    ['1', 'احمد حسینی	', '$36,738', 'مازندران'],
                    ['2', 'مینا رضایی	', '$23,789', 'گلستان'],
                    ['3', 'مبینا احمدپور	', '$56,142', 'تهران'],
                    ['4', 'جلال آقایی	', '$38,735', 'شهرکرد']
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>اعلان ها</h4>
                <p className={classes.cardCategoryWhite}>
                  يدويا من قبل أصدقائنا من{' '}
                  <a target="_blank" href="https://material-ui-next.com/">
                    واجهة المستخدم المادية
                  </a>{' '}
                  ونصب من قبل{' '}
                  <a target="_blank" href="https://www.creative-tim.com/">
                    الإبداعية تيم
                  </a>
                  . يرجى التحقق من{' '}
                  <a href="#pablo" target="_blank">
                    وثائق كاملة
                  </a>
                  .
                </p>
              </CardHeader>
              <CardBody>
                <SnackbarContent
                  message={
                    'این یک اعلان است که با کلاس color="warning" ایجاد شده است.'
                  }
                  close={true}
                  rtlActive={true}
                  color="warning"
                />
                <SnackbarContent
                  message={
                    'این یک اعلان است که با کلاس color="primary" ایجاد شده است.'
                  }
                  close={true}
                  rtlActive={true}
                  color="primary"
                />
                <SnackbarContent
                  message={'این یک اعلان با دکمه بستن و آیکن است'}
                  close={true}
                  rtlActive={true}
                  color="info"
                />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card profile={true}>
              <CardAvatar profile={true}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile={true}>
                <h6 className={classes.cardCategory}>مدیرعامل / مدیرفنی</h6>
                <h4 className={classes.cardTitle}>خداداد عزیزی</h4>
                <p className={classes.description}>
                  طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر
                  کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده
                  استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه
                  فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی،
                  نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند ...
                </p>
                <Button color="primary" round={true}>
                  دنبال‌کردن
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

// RTLPage.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(rtlStyle)(RTLPage);