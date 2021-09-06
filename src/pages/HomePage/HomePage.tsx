import * as React from "react";
import styles from "./HomePage.module.scss"
import cx from "classnames";
import webScrapingImage from "../../assets/images/web_scraping.jpg"
import webAutomationImage from "../../assets/images/web-automation.jpg"
import browserExtensionsImage from "../../assets/images/browser_extensions.png"
import myPhotoImage from "../../assets/images/mikhail-koviazin.jpg"
import WorkTypeCard from "./WorkTypeCard/WorkTypeCard";
import ContactMeButton from "../../components/ContactMeButton/ContactMeButton";

const workTypesInfo = {
    webScraping: {
        id: "web-scraping",
        title: "Web Scraping",
        image: webScrapingImage,
        text: "Collect and process large amount of data from any Internet sources - websites, forums, online stores:",
        examples: [{
            // text: <>
            //     Do you need to monitor <span>Amazon bestseller products</span> and their prices each hour?
            // </>,
            text: <>
                Monitor Amazon bestseller products
            </>,
            link: "#"
        }, {
            // text: <>
            //     Collect all <span>comments of Instagram post</span> and author profiles for further audience analysis?
            // </>,
            text: <>
                Collect Instagram post comments
            </>,
            link: "#"
        }, {
            // text: <>
            //     Export list of thousands <span>employee profiles on LinkedIn</span> to your CRM or Excel?
            // </>,
            text: <>
                Export LinkedIn profiles to CRM
            </>,
            link: "#"
        }],
        learnLink: "#"
    } as React.ComponentProps<typeof WorkTypeCard>,
    webAutomation: {
        id: "web-automation",
        title: "Web Automation",
        image: webAutomationImage,
        text: "Automate thousands routine actions on the various websites:",
        examples: [{
            text: "Send unique personalized messages on Facebook",
            link: "#"
        }, {
            text: "Leave comments under selected Instagram posts",
            link: "#"
        }, {
            text: "Connect all employees of company on LinkedIn",
            link: "#"
        }],
        learnLink: "#"
    } as React.ComponentProps<typeof WorkTypeCard>,
    browserExtensions: {
        id: "browser-extensions",
        title: "Browser Extensions",
        image: browserExtensionsImage,
        text: "Augment browsing experience and provide new possibilities:",
        examples: [{
            text: "Shopping helpers - compare prices, apply coupons",
            link: "#"
        }, {
            text: "Add blocks of data from database or other website",
            link: "#"
        }, {
            text: "Connect all employees of company on LinkedIn",
            link: "#"
        }],
        learnLink: "#"
    } as React.ComponentProps<typeof WorkTypeCard>,
}
const myAge = Math.floor((Date.now() - Date.parse("11/04/1994").valueOf()) / (12 * 30 * 24 * 60 * 60 * 1000));

export default function HomePage(): JSX.Element {
    return (
        <div className={cx(styles.homePage)}>
            <div className={cx(styles.titleBlock, styles.blockBackgroundGray)}>
                <div className="container container-lg py-5">
                    <div className="row justify-content-center">
                        <div className={cx(styles.titlePhoto, "col-sm-12 col-md-4")}>
                            <img className="" src={myPhotoImage} alt="Mikhail Koviazin" />
                        </div>
                        <div className={cx(styles.titleDescription, "col-sm-12 col-lg-5")}>
                            <h1 className="display-4 fw-bold lh-1">
                                Mikhail Koviazin
                            </h1>
                            <h2 className={cx(styles.subtitle, "fw-normal lh-2")}>
                                Senior Full-Stack Web Developer
                            </h2>
                            <p className="lead pt-2 mb-0">
                                Hey! Looking for <span className={cx(styles.fw400)}>skilled web developer</span>?
                            </p>
                            <div className="lead">
                                <span className={cx(styles.textUnderlineThick, styles.fw600)}>{new Date().getFullYear() - 2014} years of experience</span> in:
                                <ul>
                                    <li>
                                        <a href={`#${workTypesInfo.webScraping.id}`} className={styles.fw400}>web scraping</a>
                                    </li>
                                    <li>
                                        <a href={`#${workTypesInfo.webAutomation.id}`} className={styles.fw400}>web automation</a>
                                    </li>
                                    <li>
                                        <a href={`#${workTypesInfo.browserExtensions.id}`} className={styles.fw400}>browser extensions</a>
                                    </li>
                                </ul>
                            </div>
                            <ContactMeButton />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx(styles.block, styles.aboutMeBlock, styles.blockBackgroundLightGray)}>
                <div className="container py-4">
                    <div className="row">
                        <div className="col-12">
                            <div className={styles.blockHeader}>
                                <h3 className="display-4 text-center">
                                    About me
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <div className={styles.codeBlock}>
                                <div>&#123;</div>
                                <div className={styles.tab1}>
                                    <span className={styles.fieldName}>&quot;personal&quot;</span>&#58; &#123;
                                </div>
                                <div className={styles.tab2}>
                                    <span className={styles.fieldName}>&quot;name&quot;</span>&#58; <span className={styles.fieldVal}>&quot;Mike&quot;</span>&#44;
                                </div>
                                <div className={styles.tab2}>
                                    <span className={styles.fieldName}>&quot;age&quot;</span>&#58; {myAge}&#44;
                                </div>
                                <div className={styles.tab2}>
                                    <span className={styles.fieldName}>&quot;birthplace&quot;</span>&#58; <span className={styles.fieldVal}>&quot;Russia&quot;</span>&#44;
                                </div>
                                <div className={styles.tab2}>
                                    <span className={styles.fieldName}>&quot;residence&quot;</span>&#58; <span className={styles.fieldVal}>&quot;China&quot;</span>
                                </div>
                                <div className={styles.tab1}>
                                    &#125;&#44;
                                </div>
                                <div className={styles.tab1}>
                                    <span className={styles.fieldName}>&quot;education&quot;</span>&#58; &#123;
                                </div>
                                <div className={styles.tab2}>
                                    <span className={styles.fieldName}>&quot;degree&quot;</span>&#58; <span className={styles.fieldVal}>&quot;Master&apos;s in Software Development&quot;</span>&#44;
                                </div>
                                <div className={styles.tab2}>
                                    <span className={styles.fieldName}>&quot;university&quot;</span>&#58; <span className={styles.fieldVal}>&quot;Harbin Institute of Technology&quot;</span>
                                </div>
                                <div className={styles.tab1}>
                                    &#125;
                                </div>
                                <div className={styles.tab1}>
                                    <span className={styles.fieldName}>&quot;skills&quot;</span>&#58; &#123;</div>
                                <div className={styles.tab2}>
                                    <span className={styles.fieldName}>&quot;frontend&quot;</span>&#58; &#91;<span className={styles.fieldVal}>&quot;ReactJS&quot;</span>&#44; <span className={styles.fieldVal}>&quot;Redux&quot;</span>&#44; ...10 more&#93;
                                </div>
                                <div className={styles.tab2}>
                                    <span className={styles.fieldName}>&quot;backend&quot;</span>&#58; &#91;<span className={styles.fieldVal}>&quot;NodeJS&quot;</span>&#44; <span className={styles.fieldVal}>&quot;Express&quot;</span>&#44; <span className={styles.fieldVal}>&quot;MongoDB&quot;</span>&#44; <span className={styles.fieldVal}>&quot;ApifySDK&quot;</span>&#44;  ...5 more&#93;
                                </div>
                                <div className={styles.tab2}>
                                    <span className={styles.fieldName}>&quot;common&quot;</span>&#58; &#91;<span className={styles.fieldVal}>&quot;JavaScript&quot;</span>&#44; <span className={styles.fieldVal}>&quot;TypeScript&quot;</span>&#44; <span className={styles.fieldVal}>&quot;AWS&quot;</span>&#44; <span className={styles.fieldVal}>&quot;Git&quot;</span>&#93;
                                </div>
                                <div className={styles.tab1}>
                                    &#125;
                                </div>
                                <div>
                                    &#125;
                                </div>
                            </div>
                        </div>
                        <div className={cx(styles.description, "col-lg-6 col-sm-12")}>
                            <p>
                                Hi there! <span className={styles.fw600}>My name is Mike</span>, I'm {myAge} years old, born in Russia and currently living in China. Starting from childhood I learnt to program, obtained Master degree in Software Development and now working as <span className={cx(styles.fw600, styles.textUnderlineThick)}>Senior Full-Stack Web Developer</span>.
                            </p>
                            <p>
                                I'm <span className={styles.fw600}>making life easier</span> for the last 7 years, developing tools and services for people in wide variety of areas and tech-stacks. Most of my projects are targeting on <span className={styles.textUnderlineThick}>saving time</span>, <span className={styles.textUnderlineThick}>automating routine</span> and <span className={styles.textUnderlineThick}>collecting web data</span>. Already <span className={styles.fw600}>helped to save thousands of man-hours</span> and will do the same for you.
                            </p>
                            <p>
                                My strongest skills are <span className={styles.textUnderlineThick}>Web Scraping</span>, <span className={styles.textUnderlineThick}>Web Automation</span> and <span className={styles.textUnderlineThick}>Browser Extensions</span> but also working on common web services and apps. I prefer to use React and NodeJS for delivering the best user experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx(styles.block, styles.blockBackgroundGray)}>
                <div className="container py-4">
                    <div className="row">
                        <div className="col-12">
                            <div className={styles.blockHeader}>
                                <h3 className="display-4 text-center">
                                    What I'm doing?
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-12 py-3">
                            <WorkTypeCard {...workTypesInfo.webScraping} />
                        </div>
                        <div className="col-lg-4 col-md-12 py-3">
                            <WorkTypeCard {...workTypesInfo.webAutomation} />
                        </div>
                        <div className="col-lg-4 col-md-12 py-3">
                            <WorkTypeCard {...workTypesInfo.browserExtensions} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
