import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import {
  Causes,
  CauseDetail,
} from './components'


export default class Routes extends Component {

  render() {
    return (
      <Switch>
        <Route path="/causes/" component={Causes} />
        <Route path="/causes/:id" component={CauseDetail} />
        <Route exact path="/" component={Causes} />
      </Switch>
    )
  }
}
