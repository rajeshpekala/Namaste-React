

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
React.createElement("h1",{},"Iam h1 tag")
,React.createElement("h2",{},"Iam h2 tag")]
)

)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
