import React from "react";
import { Route, useLocation } from "react-router";
import Layout from "./components/Layout";
import ActivityDashboard from './components/ActivityDashboard';
import Navbar from './components/NavBar';
import  {HomePage}  from "./components/HomePage";
import  ActivityForm  from "./components/ActivityForm";
import ActivityDetail  from "./components/ActivityDetail";



export default () => (
  <Layout>
    
    <Navbar/>
    <Route exact path ="/" component={HomePage}/>
    <Route exact path="/activities" component={ActivityDashboard}/>
    <Route path="/activities/:id" component={ActivityDetail} />
    <Route key={useLocation().key} path={["/createActivity", "/manage/:id"]} component={ActivityForm} />
  </Layout>
);