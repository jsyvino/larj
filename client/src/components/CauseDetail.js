import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchCauseById } from '../store/causes'
import { sendEmail } from '../store/emails'

import './CauseDetail.css'

export class CauseDetail extends Component{
    componentDidMount() {
        this.props.getCausebyId(this.props.match.params.id)
    }

    render() {
      console.log(this.props)
      const cause = this.props.causes.currentCause
      return (
        <div className="cause-detail-container">
          <h1>CAUSE DETAIL!!!!!!!!!!!</h1>

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
