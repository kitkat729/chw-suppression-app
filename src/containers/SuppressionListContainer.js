import React, { Component } from 'react'
import { connect } from 'react-redux'

import PhoneInput from '../components/PhoneInput'
import PhoneTypes from '../components/PhoneTypes'

import { checkPhoneType, formSubmit } from '../actions/suppressionList'

const mapStateToProps = state => {
  return {
    formSubmitting: state.suppressionFormIsSubmitting,
    formSubmitted: state.suppressionFormSubmitted,
    formError: state.suppressionFormError,
    formReset: state.suppressionFormReset,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkPhoneType: (type) => dispatch(checkPhoneType(type)),
    formSubmit: (url, data, config = {}) => dispatch(formSubmit(url, data, config)),
  }
}

class SuppressionListContainer extends Component
{
  constructor(props)
  {
    super(props)

  }

  componentDidMount()
  {

  }

  render()
  {
    return(
      <div>
        <PhoneInput title="Phone"/>
        <PhoneTypes />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SuppressionListContainer)