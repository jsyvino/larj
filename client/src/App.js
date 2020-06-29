
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Navbar, Login } from './components'
import Routes from './routes'


export default class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    )
  }
}
