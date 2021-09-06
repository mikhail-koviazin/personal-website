import React from "react";
import {
    Route, BrowserRouter as Router, Switch
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

export default function AppUI(): JSX.Element {
    return (
        <Router>
            <header>
                <div className="navbar navbar-dark bg-dark shadow-sm">
                    <div className="container">
                        <a href="#" className="navbar-brand d-flex align-items-center">
                            <strong>Mikhail Koviazin</strong>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </header>
            <main>
                <Switch>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </main>
            <footer className="text-muted py-3 border-top">
                <div className="container d-flex justify-content-between">
                    <span>Mikhail Koviazin | {new Date().getFullYear()}</span>
                    <a className="float-end" href="#">Back to top</a>
                </div>
            </footer>
        </Router>
    );
}
