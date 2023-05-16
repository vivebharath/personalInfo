/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core";
import BasicInfo from "./basicInformation";

const useStyele = makeStyles(() => ({
  header: {
    display: "flex",
    flexDirection: "row",
    height: 65,
    width: "100%",
    position: "fixed",
    background: "#fff",
  },
  button: {
    height: "50%",
    width: "10%",
    margin: "15px 44px",
    borderRadius: 15,
    background: "#fff",
    cursor: "pointer",
    border: "none",
  },
  all: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    padding: 80,
    maxWidth: "100%",
    width: "1680px",
    height: "auto",
    opacity: 1,
    background: "whitesmoke",
  },
  div1: {
    width: "30%",
    textAlign: "initial",
  },
  div2: {
    width: "70%",
  },
  titleh1: {
    zIndex: 3,
  },
  titeleH1: {
    width: 200,
  },
  buttonDiv: {
    width: "60%",
    display: "flex",
  },
}));

const Personal: React.FC<any> = () => {
  const classes = useStyele();
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.titeleH1}>
          <h4 style={{ marginBottom: "10px" }}> Vivek Narsingaperumal</h4>
        </div>
        <div style={{ border: "2px solid black" }} />
        <div className={classes.buttonDiv}>
          <button className={classes.button}> ABOUT</button>
          <div style={{ border: "1px solid black" }} />
          <button className={classes.button}> RESUME</button>
          <div style={{ border: "1px solid black" }} />
          <button className={classes.button}> PROJECT</button>
          <div style={{ border: "1px solid black" }} />
          <button className={classes.button}> CONTACT</button>
          <div style={{ border: "1px solid black" }} />
        </div>
      </header>
      <div className={classes.all}>
        <div style={{ display: "flex" }}>
          <div className={classes.div1}>
            <BasicInfo />
          </div>
          <div className={classes.div2}>djlkhdldhldh</div>
        </div>
      </div>
    </div>
  );
};
export default Personal;
