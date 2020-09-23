import React, { useRef } from "react";
import { useRenderHighlight } from "../hooks/useRenderHighlight";

const RawComponent = () => {
  const ref = useRef();
  useRenderHighlight(ref);

  return (
    <div style={{ margin: "10px", backgroundColor: "#F0F0F0" }} ref={ref}>
      I'm just a simple component using no context
    </div>
  );
};

export default RawComponent;
