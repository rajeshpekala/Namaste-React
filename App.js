import React from "react"
import  ReactDOM from "react-dom/client";

/*
const heading = React.createElement(
    "h1",
    {id : "heading" },
"hello world from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

<div parent>
child div indulo h1 tag pettu
</div>

*/
const parent = React.createElement("div",{id : "parent"},
React.createElement("div",{id : "child"},[
React.createElement("h1",{},"Hello Rajesh")
,React.createElement("h2",{},"Random Things h2 tag")]
)

)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
