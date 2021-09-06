import cx from "classnames";
import styles from "./WorkTypeCard.module.scss";
import * as React from "react";
import WorkTypeCardExample from "./WorkTypeCardExample/WorkTypeCardExample";
import ContactMeButton from "../../../components/ContactMeButton/ContactMeButton";

type TProps = {
    id: string;
    title: string;
    image: string;
    text: string;
    examples: React.ComponentProps<typeof WorkTypeCardExample>[];
    learnLink: string;
}

export default function WorkTypeCard(props: TProps) {
    let cardImageClassname = cx(styles.cardImage, "card-img-top");
    let cardTitleClassname = cx(styles.cardTitle, "card-title text-center display-6");
    let examplesElems = props.examples.map((example, i) => {
        return <WorkTypeCardExample key={i} {...example} />
    })
    return (
        <div id={props.id} className="card h-100">
            <img src={props.image} className={cardImageClassname} alt="Web Scraping"/>
            <div className="card-body d-flex flex-column">
                <h5 className={cardTitleClassname}>
                    {props.title}
                </h5>
                <div className="card-text mb-3">
                    {props.text}
                    <ul className="mb-0">
                        {examplesElems}
                    </ul>
                    and others.
                </div>
                <ContactMeButton className="mt-auto" />
            </div>
        </div>
    )
}
