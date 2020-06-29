import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import {
  Causes,
  CauseDetail,
  Login
} from './components'


export class Routes extends Component {

  render() {
      const { causeList, user: { name, location} } = this.props
    return (
        <Switch>
            {
                name && location &&
                <Switch>
                    <Route path="/causes/" component={Causes} />
                    <Route path="/causes/:id" component={CauseDetail} />
                    <Route exact path="/" component={Causes} />
                </Switch>
            }
            <Route path="/" component={Login} />
        </Switch>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        causeList: state.causes.causeList,
        user: state.user,
    }
}

export default connect(mapStateToProps)(Routes)
