import * as React from "react";
import * as ReactDom from "react-dom";
import { Header } from "../shared/App.tsx";

window.addEventListener("load", () => {
  ReactDom.hydrate(<Header />, document.getElementById("react_root"));
});
