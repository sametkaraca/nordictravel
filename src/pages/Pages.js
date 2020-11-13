import React from "react";
import { Route, Switch } from "react-router-dom";
// import { About } from "./About/About";
import { Home } from "./Home/Home";
// import { Project } from "./Project/Project";
// import { Error } from "./Error";
// import { Lab } from "./Lab/Lab";

export const Pages = () => {
  return <Home />;
  //   return (
  //     <Switch>
  //       <Route path="/About" component={About} exact />
  //       <Route path="/Projects" component={Project} exact />
  //       <Route path="/Lab" component={Lab} exact />
  //       <Route path="/Home" component={Home} exact />
  //       <Route path="/" component={Home} exact />
  //       <Route component={Error} exact />
  //     </Switch>
  //   );
};
