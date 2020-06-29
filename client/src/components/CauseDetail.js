import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchCauseById } from '../store/causes'

export class CauseDetail extends Component{
    componentDidMount() {
        this.props.getCausebyId(this.props.match.params.id)
    }

    render() {
      return (
        <h1>CAUSE DETAIL!!!!!!!!!!!</h1>
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
