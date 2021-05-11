import SliderMenubar from "./SliderMenu.tsx/SliderMenubar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { Overview, Revenue, Users } from "../Pages/Overview";
import { Reports, Reports1, Reports2, Reports3 } from "../Pages/Reports";
import { Messages, Messages1, Messages2 } from "../Pages/Messages";
import Team from "../Pages/Team";
import Products from "../Pages/Products";
import Support from "../Pages/Support";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <SliderMenubar />
        <Switch>
          <Route path="/overview" exact component={Overview} />
          <Route path="/overview/users" exact component={Users} />
          <Route path="/overview/revenue" exact component={Revenue} />

          <Route path="/reports" exact component={Reports} />
          <Route path="/reports/reports1" component={Reports1} />
          <Route path="/reports/reports2" component={Reports2} />
          <Route path="/reports/reports3" component={Reports3} />

          <Route path="/messages" exact component={Messages} />
          <Route path="/messages/messages1" component={Messages1} />
          <Route path="/messages/messages2" component={Messages2} />

          <Route path="/team" component={Team} />
          <Route path="/products" component={Products} />
          <Route path="/support" component={Support} />
        </Switch>
      </Router>
    </>
  );
}
