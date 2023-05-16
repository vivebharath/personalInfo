/** @format */

import React from "react";
import Personalscreenimg from "../images/personalscreenimg.png";
import { makeStyles } from "@material-ui/core";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const useStyele = makeStyles(() => ({
  imgStyle: {
    height: "200px",
    borderRadius: "50%",
    width: "186.656px",
  },
  emailIcon: {
    gap: "10px",
  },
  learnMoreButton: {
    background: "#fff",
    height: "53.8906px",
    backgroundColor: "transparent",
    border: 0,
    cursor: "pointer",
    textAlign: "center",
    boxShadow: "inset 0 0 0 1px hsla(0,0%,63%,.3)",
    "&:hover": {
      color: " #2e59ba!important",
      boxShadow: "inset 0 0 0 1px #2e59ba",
    },
  },
  footerIcon: {
    color: "black",
    opacity: 0.6,
    padding: 5,
    "&:hover": {
      color: "blue",
    },
  },
}));
const BasicInfo: React.FC<any> = () => {
  const classes = useStyele();
  return (
    <div>
      <h3> Wellcome...............</h3>
      <img className={classes.imgStyle} src={Personalscreenimg} alt=""></img>
      <div style={{ display: "flex" }}>
        <h2>Vivek Narsingaperumal</h2>
      </div>
      <div style={{ display: "flex" }}>
        <EmailIcon className={classes.emailIcon} />
        <div style={{ paddingLeft: "10px" }}>
          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new">
            vivebharath@gmail.com
          </a>
        </div>
      </div>
      <hr></hr>
      <h3>ABOUT</h3>
      <p>
        Bootstrap is a front end framework used to design responsive web pages
        and applications. It takes a mobile-first approach to web development,
        and includes pre-built CSS styles and classes, plus some JavaScript
        functionality. this course, you'll learn how to build responsive
        websites with Bootstrap, and use its included classes to style buttons,
        images, forms, navigation, and other common elements.
      </p>
      <button className={classes.learnMoreButton}>LEARN MORE</button>
      <hr></hr>
      <div>
        <a
          href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"
          target="_blank"
          rel="noreferrer"
        >
          <EmailIcon className={classes.footerIcon} />
        </a>
        <a
          href="https://www.linkedin.com/in/vivek-narasingaperumal-20633419a"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon className={classes.footerIcon} />
        </a>
        <a
          href="https://github.com/vivebharath?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon className={classes.footerIcon} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <InstagramIcon className={classes.footerIcon} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <TwitterIcon className={classes.footerIcon} />
        </a>
      </div>
    </div>
  );
};
export default BasicInfo;
