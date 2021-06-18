import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Work from "./components/Work";
import WorkDetail from "./components/WorkDetail";
import Footer from "./components/Footer";

const routes = [
  {
    path: "/work",
    main: () => <Work />,
  },
  {
    path: "/work-detail",
    main: () => <WorkDetail />,
  },
];

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
