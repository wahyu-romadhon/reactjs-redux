import React, { useEffect } from "react";
import ComponentA from "./components/componentA";
import ComponentB from "./components/componentB";
import ComponentC from "./components/componentC";
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
        <ComponentC />
      </div>
    </Provider>
  );
}

export default App;
