import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchCauseById } from '../store/causes'
import { sendEmail } from '../store/emails'

import './CauseDetail.css'

export class CauseDetail extends Component{
    componentDidMount() {
        this.props.getCausebyId(this.props.match.params.id)
    }

    getLocationText = (city, state) => {
      if (!city && !state) return ""
      return [city, state].join(", ")
    }

    handleSubmit = () => {
      console.log("send that email baby")
      const { cause, user } = this.props
      sendEmail(user.name, cause.id)
  }

    render() {
      const cause = this.props.causes.currentCause
      if (!cause) return null
      const locationText = this.getLocationText(cause.city, cause.state)
      return (
        <div className="cause-detail-container">
          <h1>{`${cause.subject}`}</h1>
          {
            cause.victim_name &&
            <div className="field-item">
              <span className="bold">Victim: </span>
              <span>{cause.victim_name}</span>
            </div>
          }
          {
            locationText &&
            <div className="field-item">
              <span className="bold">Location: </span>
              <span>{locationText}</span>
            </div>
          }
          {
            cause.description &&
            <div className="field-item">
              <span className="bold">Description of Cause: </span>
              <span>{cause.description}</span>
            </div>
          }
          <div title="Send an Email!">
              <button className="button-primary" onClick={this.handleSubmit}><p className="primary-text">Demand Justice</p></button>
          </div>
          <div className="field-item">
              <span className="bold">PLEASE consider taking action and emailing the relevant decision makers! Click this button to auto-populate your email.  You are encouraged to edit the body of the email to add your specific opinion about the situation, custom emails are always more impactful; however, if time does not allow, sending a templated email is better than nothing at all!  </span>
          </div>
          <div className="field-item">
              <span className="bold">Email Body Template: </span>
              <span>{cause.body_text}</span>
          </div>

        </div>
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
        user: state.user,
        causes: state.causes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getCausebyId: (id) => {
        dispatch(fetchCauseById(id))
      },
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(CauseDetail)
