import React from "react";
import "./App.css";
import AppContextConsumer from "./components/AppContextConsumer";
import AppContextValue3Consumer from "./components/AppContextValue3Consumer";
import RenderSignal from "./components/RenderSignal";
import RawComponent from "./components/RawComponent";
import { AppContextProvider } from "./context/AppContext";
import { IsolatedValue3Provider } from "./context/IsolatedValue3Context";
import IsolatedValue3Consumer from "./components/IsolatedValue3Consumer";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <RenderSignal borderColor="black">
          Level 0 <AppContextConsumer />
          <RenderSignal borderColor="blue">
            Level 1
            <RenderSignal borderColor="green">
              Level 2
              <RenderSignal borderColor="purple">
                Level 3{" "}
                <AppContextConsumer>
                  <RawComponent />
                </AppContextConsumer>
              </RenderSignal>
            </RenderSignal>
          </RenderSignal>
        </RenderSignal>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "980px",
            width: "90%",
          }}
        >
          <IsolatedValue3Provider>
            <IsolatedValue3Consumer />
            <AppContextValue3Consumer />
            <IsolatedValue3Consumer />
          </IsolatedValue3Provider>
        </div>
      </AppContextProvider>
    </div>
  );
}

export default App;
