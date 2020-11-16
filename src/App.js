import React from "react";
import ComponentA from "./components/componentA";
import ComponentB from "./components/componentB";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center", margin: "20px 0px" }}>
        <div
          style={{ fontSize: "15px", fontWeight: 600, marginBottom: "20px" }}
        >
          BELAJAR REACT REDUX
        </div>
        <ComponentA />
        <ComponentB />
      </div>
    </Provider>
  );
}

export default App;
