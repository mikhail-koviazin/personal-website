import * as React from "react";
import { hydrate, render } from "react-dom";
import AppUI from "./AppUI";
import "bootstrap/dist/js/bootstrap.bundle";

import "./index.scss";

let rootElem = document.getElementById("root");
if (!rootElem) {
    rootElem = document.createElement("div");
    rootElem.id = "root"
    document.body.appendChild(rootElem);
}

if (rootElem.hasChildNodes()) {
    hydrate(<AppUI />, rootElem);
} else {
    render(<AppUI />, rootElem);
}

if (module.hot) {
    module.hot.accept();
}


