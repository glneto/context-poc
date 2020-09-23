import React, { useRef } from "react";
import { useRenderHighlight } from "../hooks/useRenderHighlight";

const RenderSignal = ({ children, style, borderColor }) => {
  const ref = useRef();
  useRenderHighlight(ref);

  //const [clicks, setClicks] = useState(0);
  return (
    <div
      ref={ref}
      /*onClick={(e) => {
        e.stopPropagation();
        setClicks(clicks + 1);
      }}*/
      style={{
        border: `solid 1px ${borderColor}`,
        padding: "10px",
        margin: "20px",
        minHeight: "100px",
        backgroundColor: "#F0F0F0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default RenderSignal;
