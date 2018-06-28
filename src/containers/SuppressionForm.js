// suppressionForm.js
import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import PhoneMaskInput from '../components/PhoneMaskInput'
import PhoneTypes from '../components/PhoneTypes'
import IconSaveButton from '../components/IconSaveButton'

import { formSubmit } from '../actions/suppressionList'

const mapStateToProps = state => {
  console.log(state)
  return {
    formSubmitting: state.suppressionFormIsSubmitting,
    formSubmitted: state.suppressionFormSubmitted,
    formError: state.suppressionFormError,
    //formReset: state.suppressionFormReset,
    formPhoneNumber: state.suppressionFormPhoneNumber,
    formPhoneTypes: state.suppressionFormPhoneTypes,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    formSubmit: (url, data, config = {}) => dispatch(formSubmit(url, data, config)),
  }
}

class SuppressionForm extends Component
{
  constructor(props)
  {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event)
  {
    const data = {
      trunk_code: '1',
      phone: this.props.formPhoneNumber.replace(/[^\d]/g, ''),
      sms: this.props.formPhoneTypes.sms ? 1 : 0,
      voicemail: this.props.formPhoneTypes.voicemail ? 1 : 0,
    }

    // data validation
    if (data.phone.length === 10) {
      this.props.formSubmit('http://192.168.56.10/api/v1/suppressed-phones', data)
    }
  }

  render()
  {
    let buttonAttributes = {
      disabled: false
    }

    if (this.props.formSubmitting) {
      buttonAttributes = _.merge(buttonAttributes, {
        disabled: true,
      })
    }

    return(
      <form>
        <PhoneMaskInput title="Phone" />
        <PhoneTypes />
        <IconSaveButton other={buttonAttributes} onClick={this.handleSubmit}/>
      </form>
    )
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(SuppressionForm)
