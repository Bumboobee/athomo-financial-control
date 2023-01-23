import { createRoot } from "react-dom/client";
import App from "./app"
import React from "react";
import { ReactDOM } from "react";

const root = createRoot(document.querySelector("#root"))

root.render(<App />);