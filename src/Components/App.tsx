import SliderMenubar from "./SliderMenu.tsx/SliderMenubar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <SliderMenubar />
    </Router>
  );
}
