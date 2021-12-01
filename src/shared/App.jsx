import {hot} from "react-hot-loader/root";
import React from "react";
import styles from "./app.less";

function AppComponent() {
    return (
        <div className={styles.app}>Hello world </div>
    )
}

export const App = hot(AppComponent)
