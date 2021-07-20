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

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <div className="mx-3 my-2 text-primary" style={{}}>
          <Switch>
            <DashboardWrapper>
              <SidebarNav />
              <MainContainer>
                <Switch>
                  <Route exact path="/Overview">
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
    </>
  );
};

export default App;
