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
        //    background:"#fff"
    },
    button: {
        height: "50%",
        width: "10%",
        // margin: "15px 44px",
        borderRadius: 15,
        background: "#fff",
        cursor: "pointer",
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
        textAlign:"initial"
    },
    div2: {
        width: "70%"
    },

}));

const Personal : React.FC<any>  = () => {
    const classes = useStyele();
    return (
        <div className={classes.all}>
            <div className={classes.header}>
                <button className={classes.button}> About Me</button>
                <button className={classes.button}> About Me</button>
                <button className={classes.button}> About Me</button>
                <button className={classes.button}> About Me</button>
                <button className={classes.button}> About Me</button>
            </div>
            <div style={{ display: "flex" }}>
                <div className={classes.div1}>
                 <BasicInfo/>
                </div>
                <div className={classes.div2}>djlkhdldhldh</div>

            </div>

        </div>
    );
};
export default Personal;
