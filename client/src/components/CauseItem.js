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

    render() {
        const { cause } = this.props
      return (
          <div className="casues-page">
            <div className="item-container">
                <div className="small-1">
                    <input className="button-outline cause-cell" type="submit" value="Email" onClick={this.handleSubmit}/>
                </div>
                <p className="small-2 cause-cell" onClick={this.handleClickItem}>{cause.subject}</p>
                <p className="small-1 cause-cell" onClick={this.handleClickItem}>{cause.victim_name || ""}</p>
                <p className="small-1 cause-cell" onClick={this.handleClickItem}>{cause.state || ""}</p>
                <p className="small-4 cause-cell" onClick={this.handleClickItem}>{cause.body_text || ""}</p>
                <p className="small-1 cause-cell" onClick={this.handleClickItem}>{moment(cause.created).format('MM/DD/YYYY')}</p>
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
