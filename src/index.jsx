import React from "react";
import { createRoot } from "react-dom/client";
import ContactApp from "./ContactApp";

const element = <h1> Hello,world mas bro !</h1>;
const root = createRoot(document.getElementById("root"));
root.render(<ContactApp />);
