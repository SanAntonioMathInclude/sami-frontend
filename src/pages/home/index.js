import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import Parallax from "components/Parallax/Parallax.jsx";
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import {
    HomeWrapper
} from "./style";
import HomeSection from "./components/HomeSection";
import bgImage from "../../static/dice.jpg";


class Home extends PureComponent {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        const { classes } = this.props;

        return (
            <HomeWrapper>
                <Parallax image={bgImage} >
                    <div className={classes.container}>
                        <GridContainer>
                          <GridItem xs={12} sm={8} md={6}>
                            <h2 className={classes.title}>By the Students<br />For the Students</h2>
                            <h4>
                                San Antonio Math Include, SaMi, is a
                                <a className="link" href="https://www.501c3.org/what-is-a-501c3/" target="_blank" rel="noopener noreferrer"> 501(c)(3) </a>
                                nonprofit organization founded by a group of students passionate about math. Our mission is to INCLUDE all students from different cultures, backgrounds and experiences and to help them achieve their success and pursue their interests in Math and other related fields. 
                            </h4>
                            <br />
                          </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <HomeSection />
                </div>
            </HomeWrapper>
        )
    }
}

Home.propTypes = {
    classes: PropTypes.object
};

export default withStyles(landingPageStyle)(Home)

