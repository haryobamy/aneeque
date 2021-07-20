import React from "react";
import { GlobalStyles } from "./globalStyle";
import { SidebarNav, Sidebar, Main, Rightbar } from "./components";
import { Dashboard } from "./page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Employee,
  Orders,
  OverviewPage,
  Products,
  Settings,
  Shipment,
} from "./components/subpage";
import { DashboardWrapper, MainContainer } from "./globalStyle";
import { Backdrop } from "@material-ui/core";

const App = () => {
  function handleDevice() {
    if (window.innerWidth > 500) {
      return (
        <Router>
          <div className="mx-3 my-2 text-primary">
            <Switch>
              <DashboardWrapper>
                <SidebarNav />
                <MainContainer>
                  <Switch>
                    <Route exact path="/">
                      <OverviewPage />
                    </Route>
                    <Route exact path="/orders">
                      <Orders />
                    </Route>
                    <Route exact path="/products">
                      <Products />
                    </Route>
                    <Route exact path="/settings">
                      <Settings />
                    </Route>
                    <Route exact path="/shipment">
                      <Shipment />
                    </Route>
                    <Route exact path="/employee">
                      <Employee />
                    </Route>
                  </Switch>
                </MainContainer>
                <Rightbar />
              </DashboardWrapper>
            </Switch>
          </div>
        </Router>
      );
    } else {
      return (
        <div style={{ textAlign: "center", backgroundColor: "blue" }}>
          <p>Coming soon .....</p>
          <p>please view on desktop</p>
        </div>
      );
    }
  }

  return (
    <>
      <GlobalStyles />
      {handleDevice()}
    </>
  );
};

export default App;
