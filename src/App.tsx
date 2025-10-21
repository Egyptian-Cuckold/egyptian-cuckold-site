import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Gallery from "./pages/Gallery";
import Videos from "./pages/Videos";
import Challenges from "./pages/Challenges";
import Comments from "./pages/Comments";
import { Route, Switch } from "wouter";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/stories"} component={Stories} />
      <Route path={"/gallery"} component={Gallery} />
      <Route path={"/videos"} component={Videos} />
      <Route path={"/challenges"} component={Challenges} />
      <Route path={"/comments"} component={Comments} />
      {/* Final fallback route */}
      <Route component={Home} />
    </Switch>
  );
}

function App() {
  return (
    <Router />
  );
}

export default App;
