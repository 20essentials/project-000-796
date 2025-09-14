import { createSignal } from "solid-js";
import { render } from "solid-js/web";

const App = () => {
  const [active, setActive] = createSignal(false);

  const bodyStyle = {
    "background-image":
      "linear-gradient(to top,#4fb576 0%,#44c489 30%,#28a9ae 46%,#28a2b7 59%,#4c7788 71%,#6c4f63 86%,#432c39 100%)",
    height: "100vh",
    margin: 0,
    "padding-top": "1rem",
    "box-sizing": "border-box",
  };

  const buttonStyle = {
    width: "50%",
    "margin-inline": "auto",
    padding: "0.7rem",
    "background-color": active() ? "#555" : "#ddd",
    color: active() ? "white" : "black",
    position: "relative",
    cursor: "pointer",
    "box-sizing": "border-box",
    "@media (max-width: 1111px)": {
      width: "70%",
    },
  };

  const buttonAfter = {
    content: active() ? '"−"' : '"+"',
    "font-size": "2rem",
    "font-weight": 900,
    position: "absolute",
    right: "1rem",
    top: 0,
    padding: 0,
  };

  const contentStyle = {
    width: "50%",
    "margin-inline": "auto",
    "background-color": "rgba(255,0,255,0.05)",
    "max-height": active() ? "1000px" : "0",
    overflow: "hidden",
    transition: "max-height 0.5s ease",
    display: "flex",
    "flex-wrap": "wrap",
    "place-content": "center",
    "background-image": "url('assets/super.avif')",
    "box-sizing": "border-box",
    "@media (max-width: 1111px)": {
      width: "70%",
    },
  };

  const imgStyle = {
    padding: "1rem",
    width: "80%",
    height: "80%",
    transform: "rotate(45deg)",
  };

  return (
    <div style={bodyStyle}>
      <div style={buttonStyle} onClick={() => setActive(!active())}>
        Foto 1
        <span style={buttonAfter}></span>
      </div>
      <div style={contentStyle}>
        <img src="assets/super.avif" style={imgStyle} />
      </div>
    </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
render(() => <App />, root);

export default App;
