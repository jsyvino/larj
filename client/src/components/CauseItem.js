import React, { Component } from 'react'
import DataTable from 'react-data-table-component'

import './Causes.css'

// created.format('MM/DD/YYYY')
export default class CauseItem extends Component {
    render() {
        const { cause } = this.props
      return (
          <div className="casues-page">
            <h2>Take Action and Support These Causes</h2>
            <div className="item-container">

            </div>
          </div>
      )
    }
  }
