// const heading = React.createElement("h1", {id: 'heading'}, "Hello World from React");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

{/* <div id="parent">
  <div id="child-one">
    <h1>I am h1 tag</h1>
    <h2>I am h2 tag</h2>
  </div>
  <div id="child-two">
    <h1>I am h1 tag</h1>
    <h2>I am h2 tag</h2>
  </div>
</div> */}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child-one", key: 1 }, [
    React.createElement("h1", { key: 1 }, "I am h1 tag."),
    React.createElement("h2", { key: 2 }, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child-two", key: 2 }, [
    React.createElement("h1", { key: 1 }, "I am h1 tag"),
    React.createElement("h2", { key: 2 }, "I am h2 tag"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
