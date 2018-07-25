import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import NavData from './NavData';
import Teradata from "./components/Teradata";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import * as slug from "slug";
import connect from "react-redux/es/connect/connect";
import TimeLineWork from "./components/TimeLineWork";
import TimeLinePersonal from "./components/TimeLinePersonal";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import BooksRead from "./components/BooksRead";
import Education from "./components/Education";
import Resume from "./components/Resume";
import Jupyterr from "./components/Jupyterr";
import Accomplishments from "./components/Accomplishments";
import UclaSeas from "./components/UclaSeas";
import Startups from "./components/Startups";
import Alliacense from "./components/Alliacense";
import AwsMetrics from "./components/AwsMetrics";
import ReadIt from "./components/ReadIt";
import BooksApp from "./components/MyReads/BooksApp";
import CustomerOnboarding from "./components/CustomerOnboarding";


const drawerWidth = 240;
const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '100vh',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        position: 'absolute',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
            position: 'relative',
        },
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        paddingTop: theme.spacing.unit * 5,
        paddingRight: theme.spacing.unit * 20,
        paddingBottom: theme.spacing.unit * 20,
        paddingLeft: theme.spacing.unit * 20,
        overflow: 'scroll'
    },

});

class NavDrawer extends React.Component {
    state = {
        mobileOpen: false,
        activeSubCategory: ''
    };

    handleDrawerToggle = () => {
        this.setState(state => ({mobileOpen: !state.mobileOpen}));
    };

    // componentDidUpdate(prevProps) {
    //     // console.log(this.props)
    //     // Typical usage (don't forget to compare props):
    //     // console.log('---START-----')
    //     //
    //     // console.log("prev props",prevProps.activeMainCategory)
    //     // console.log("this props",this.props.activeMainCategory)
    //     // console.log('---')
    //     // console.log("prev props",prevProps.activeSubCategory)
    //     // console.log("this props",this.props.activeSubCategory)
    //     // console.log("State",this.state.activeSubCategory)
    //     //
    //     // console.log('---END-----')
    //
    //
    //
    //
    //
    //     if (prevProps.location.pathname !== this.props.location.pathname) {
    //         console.log("CHANGED")
    //         // console.log(this.props.activeSubCategory)
    //         // console.log(prevProps.activeSubCategory)
    //         this.setState({activeSubCategory:'Teradata'})
    //
    //     }
    // }

    render() {
        const {classes, theme} = this.props;
        console.log("~~~~~~~RENDERRRR~~~~~~`", this.props.activeMainCategory, this.props.activeSubCategory)


        const drawer = (
            <div>

                <div className={classes.toolbar}/>

                <Divider/>
                <List>
                    <NavData/>
                </List>
                {/*<List>{otherMailFolderListItems}</List>*/}
            </div>
        );
        return (
            <div className={classes.root}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Open drawer" onClick={this.handleDrawerToggle}
                                    className={classes.navIconHide}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="title" color="inherit" noWrap>Google</Typography>
                    </Toolbar>
                </AppBar>
                <Hidden mdUp>
                    <Drawer variant="temporary" anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen} onClose={this.handleDrawerToggle}
                            classes={{paper: classes.drawerPaper,}} ModalProps={{keepMounted: true}}>
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer variant="permanent" open classes={{paper: classes.drawerPaper,}}>
                        {drawer}
                    </Drawer>
                </Hidden>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>


                    <Route exact path={`/portfolio/${slug('Web Apps')}/${slug('React/Redux AWS Serverless')}`} component={ReadIt}/>
                    <Route exact path={`/portfolio/${slug('Web Apps')}/${slug('React My Books App')}`} component={BooksRead}/>
                    <Route exact path={`/portfolio/${slug('Web Apps')}/${slug('AWS Metrics (MEAN Python)')}`} component={AwsMetrics}/>
                    <Route exact path={`/portfolio/${slug('Web Apps')}/${slug('Customer Onboarding Wizard')}`} component={CustomerOnboarding}/>



                    <Route exact path={`/portfolio/${slug('Professional Experience')}/${slug('Teradata')}`} component={Teradata}/>
                    <Route exact path={`/portfolio/${slug('Professional Experience')}/${slug('Alliacense')}`} component={Alliacense}/>
                    <Route exact path={`/portfolio/${slug('Professional Experience')}/${slug('Startups')}`} component={Startups}/>
                    <Route exact path={`/portfolio/${slug('Professional Experience')}/${slug('UCLA SEAS')}`} component={UclaSeas}/>


                    <Route exact path={`/portfolio/${slug('Time Line')}/${slug('Work')}`} component={TimeLineWork}/>
                    <Route exact path={`/portfolio/${slug('Time Line')}/${slug('Personal')}`} component={TimeLinePersonal}/>

                    <Route exact path={`/portfolio/${slug('Accomplishments')}`} component={Accomplishments}/>

                    <Route exact path={`/portfolio/${slug('Machine Learning/Finance')}/${slug('1')}`} component={Jupyterr}/>
                    <Route exact path={`/portfolio/${slug('Machine Learning/Finance')}/${slug('2')}`} component={Jupyterr}/>


                    <Route exact path={`/portfolio/${slug('Resume')}`} component={Resume}/>

                    <Route exact path={`/portfolio/${slug('Education')}`} component={Education}/>

                    <Route exact path={`/portfolio/${slug('Books Read')}`} component={BooksRead}/>

                    <Route exact path={`/portfolio/${slug('About Me')}`} component={AboutMe}/>

                    <Route exact path={`/portfolio/${slug('Contact Me')}`} component={ContactMe}/>


                </main>
            </div>
        );
    }
}

NavDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
    return {
        activeMainCategory: state.activeMainCategory,
        activeSubCategory: state.activeSubCategory

    }
}

export default connect(mapStateToProps, null)(withStyles(styles, {withTheme: true})(NavDrawer));
