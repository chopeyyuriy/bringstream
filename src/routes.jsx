import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { HashRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import ForgetPwd from "./pages/Authentication/ForgetPassword";
import PasswordRecovery from "./pages/Authentication/PasswordRecovery";
import UserProfile from "./pages/Authentication/UserProfile";
import Pages404 from "./pages/Utility/pages-404"
import Dashboard from "./pages/Dashboard/index";
import CreateChannel from "./pages/Channels/CreateChannel";
import ChannelSettings from "./pages//Channels/ChannelSettings";
import Content from './pages/Content/Content';
import HorizontalLayout from "./components/HorizontalLayout";
import GettingStarted from './pages/Channels/GettingStarted';
import { LastLocationProvider } from 'react-router-last-location'
import "./assets/scss/theme.scss";

// function getLayout(layout) {
//   let layoutCls = VerticalLayout;

//   switch (layout.layoutType) {
//     case "horizontal":
//       layoutCls = HorizontalLayout;
//       break;
//     default:
//       layoutCls = VerticalLayout;
//       break;
//   }
//   return layoutCls;
// };


const Private = ({ component: Component, ...rest }) => {

  return (
    <Route {...rest} render={props => {
      if (rest.authData) {
        return <HorizontalLayout><Component {...props} /></HorizontalLayout>
      }
      return <Redirect to="/login" />
    }} />
  )
}

const mapStateToProps = (state) => ({
  authData: state.authorization.authData,
  layout: state.Layout,
})

const PrivateRoute = connect(mapStateToProps)(Private)

export const Routes = () => {
  return (
    <HashRouter>
      <LastLocationProvider>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgetPwd} />
          <Route path="/register" component={Register} />
          <Route path="/passwordrecovery" component={PasswordRecovery} />
          <PrivateRoute path="/profile" component={UserProfile} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/content" component={Content} />
          <PrivateRoute path="/channels/create" component={CreateChannel} />
          <PrivateRoute path="/channels/getting-started" component={GettingStarted} />
          <PrivateRoute path="/channels/settings" component={ChannelSettings} />
          <Route component={Pages404} />
        </Switch>
      </LastLocationProvider>
    </HashRouter>
  )
}

export const history = createBrowserHistory()