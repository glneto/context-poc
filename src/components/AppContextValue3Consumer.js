import React, { useContext, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useRenderHighlight } from "../hooks/useRenderHighlight";

const AppContextValue3Consumer = ({ children }) => {
  const { state, dispatch } = useContext(AppContext);
  const [selected, setSelected] = useState("SET_VALUE_3");
  const [inputValue, setInputValue] = useState("");

  const ref = useRef();
  useRenderHighlight(ref);

  return (
    <div ref={ref}>
      This is an AppContext Value 3 Consumer. <br />
      AppContext.Value3: {state.value3} <br />
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
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

export default AppContextValue3Consumer;
