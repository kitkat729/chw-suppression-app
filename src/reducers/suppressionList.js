import _ from 'lodash'
import {
  SUPPRESSIONFORM_SUBMITTING,
  SUPPRESSIONFORM_SUBMITTED,
  SUPPRESSIONFORM_SUBMIT_FAIL,
  SUPPRESSIONFORM_PHONE_TYPE,
  SUPPRESSIONFORM_SHOULD_RESET,
  SUPPRESSIONFORM_PHONE_NUMBER,
} from '../constants/actionTypes'

export const suppressionFormIsSubmitting = (state = false, action) => {
  switch (action.type) {
    case SUPPRESSIONFORM_SUBMITTING:
      return action.isSubmitting
    default:
      return state
  }
}

export const suppressionFormSubmitted = (state = {}, action) => {
  switch (action.type) {
    case SUPPRESSIONFORM_SUBMITTED:
      return action.response
    default:
      return state
  }
}

export const suppressionFormError = (state = false, action) => {
  switch (action.type) {
    case SUPPRESSIONFORM_SUBMIT_FAIL:
      return action.error
    default:
      return state
  }
}

export const suppressionFormReset = (state = false, action) => {
  switch (action.type) {
    case SUPPRESSIONFORM_SHOULD_RESET:
      return action.shouldReset
    default:
      return state
  }
}

export const suppressionFormPhoneTypes = (state = {sms: true, voicemail: true}, action) => {
  switch (action.type) {
    case SUPPRESSIONFORM_PHONE_TYPE:
      let newState = {}
      newState[action.name] = !state[action.name]

      state = _.merge({}, state, newState)

      return state
    default:
      return state
  }
}

export const suppressionFormPhoneNumber = (state = '(   )    -    ', action) => {
  switch (action.type) {
    case SUPPRESSIONFORM_PHONE_NUMBER:
      return action.number
    default:
      return state
  }
}
