import SliderMenubar from "./SliderMenu.tsx/SliderMenubar";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <SliderMenubar />
      </Router>
    </>
  );
}
