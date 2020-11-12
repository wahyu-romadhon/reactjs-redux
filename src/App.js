import React from "react";
import ComponentA from "./components/componentA";
import ComponentB from "./components/componentB";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./reducer/reducers";

const storeRedux = createStore(rootReducer);

function App() {
  return (
    <Provider store={storeRedux}>
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
