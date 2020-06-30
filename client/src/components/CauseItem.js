import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'

import { sendEmail } from '../store/emails'

import './Causes.css'

export  class CauseItem extends Component {

    handleClickItem = () => {
        const { cause, history } = this.props
        history.push(`/causes/${cause.id}`)
    }

    handleSubmit = () => {
        console.log("send that email baby")
        const { cause, user } = this.props
        sendEmail(user.name, cause.id)
    }

    renderBasicCell = (text, width) => {
        return (
            <p className={`small-${width} cause-cell`} title="Click For More Information" onClick={this.handleClickItem}>{text}</p>
        )
    }

    render() {
        const { cause } = this.props
      return (
          <div className="casues-page">
            <div className="item-container">
                <div className="small-1" title="Take Action!">
                    <input className="button-outline cause-cell" type="submit" value="Email" onClick={this.handleSubmit}/>
                </div>
                {this.renderBasicCell(cause.subject, 2)}
                {this.renderBasicCell(cause.victim_name || "", 1)}
                {this.renderBasicCell(cause.state || "", 1)}
                {this.renderBasicCell(cause.body_text || "", 4)}
                {this.renderBasicCell(moment(cause.created).format('MM/DD/YYYY'), 1)}
            </div>
          </div>
      )
    }
  }

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        recordSentEmail: (name, cause) => {
        dispatch(sendEmail(name, cause))
      },
    }
  }


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CauseItem))
