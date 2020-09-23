import React, { useContext, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useRenderHighlight } from "../hooks/useRenderHighlight";

const AppContextConsumer = ({ children }) => {
  const { state, dispatch } = useContext(AppContext);
  const [selected, setSelected] = useState("SET_VALUE_1");
  const [inputValue, setInputValue] = useState("");

  const ref = useRef();
  useRenderHighlight(ref);

  return (
    <div ref={ref}>
      This is an AppContext Consumer. <br />
      AppContext.Value1: {state.value1} <br />
      AppContext.Value2: {state.value2} <br />
      AppContext.Value3: {state.value3} <br />
      <h6>Select a value to change:</h6>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value="SET_VALUE_1">value1</option>
        <option value="SET_VALUE_2">value2</option>
        <option value="SET_VALUE_3">value3</option>
      </select>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="new value"
      ></input>
      <button onClick={() => dispatch({ type: selected, value: inputValue })}>
        Go
      </button>
      {children}
    </div>
  );
};

export default AppContextConsumer;
