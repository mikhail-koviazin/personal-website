import * as React from "react";
import styles from "./Loader.module.scss"

type TProps = {
    show: boolean;
    labelSize?: 1 | 2 | 3 | 4 | 5 | 6;
    logo?: string;
};

export default function Loader(props: TProps): JSX.Element {
    if (!props.show) {
        return <></>;
    }
    return (
        <div className={styles.loader}>
            {
                props.logo &&
                <img className="mb-4" src={props.logo} alt="" />
            }
            <label className={`display-${props.labelSize || 6}`}>
                Loading...
                {/* <i className="spinner fas fa-spinner fa-spin ms-3" /> */}
            </label>
        </div>
    );
}
