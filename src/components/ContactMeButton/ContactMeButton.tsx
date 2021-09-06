import * as React from "react";
import styles from "./ContactMeButton.module.scss"
import cx from "classnames";

type TProps = {
    className?: string;
};

export default function ContactMeButton(props: TProps): JSX.Element {
    return (
        <a href="mailto:mikhailkoviazin@gmail.com" target="_blank" className={cx(...(props.className ? [props.className] : []), "btn btn-lg btn-primary w-100 fw-bolder")}>
            Contact me
        </a>
    );
}
