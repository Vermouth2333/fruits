import React, { Component } from 'react'
import {routerConfig} from "@router"
import {Switch,Redirect} from "react-router-dom";
import BaseRoute from "@common/baseRoute";
export default class App extends Component {
  render() {
    return (
      <Switch>
          <Redirect from="/" to="/home" exact/>
          {
            routerConfig.map((item,index)=>(
               <BaseRoute key={index} {...item}/>
            ))
          }
      </Switch>
    )
  }
}

