import styles from "./WorkTypeCardExample.module.scss";
import * as React from "react";
import cx from "classnames";

type TProps = {
    text: string | JSX.Element;
    link: string;
}

export default function WorkTypeCardExample(props: TProps) {
    return (
        <li className={styles.workTypeExample}>
            {props.text}
            {/*<span className="ms-2">*/}
            {/*    <a href={props.link} className={cx(styles.learnMore)}>*/}
            {/*        learn more*/}
            {/*    </a>*/}
            {/*</span>*/}
        </li>
    )
}
