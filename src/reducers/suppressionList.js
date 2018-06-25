import {
  SUPPRESSIONLIST_CHECK_TYPE,
  SUPPRESSIONFORM_SUBMITTING,
  SUPPRESSIONFORM_SUBMITTED,
  SUPPRESSIONFORM_SUBMIT_FAIL,
  SUPPRESSIONFORM_PHONE_TYPE,
  SUPPRESSIONFORM_SHOULD_RESET,
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

export const suppressionFormPhoneTypes = (state = [], action) => {
  switch (action.type) {
    case SUPPRESSIONFORM_PHONE_TYPE:
      state.push(action.value)
      return state
    default:
      return state
  }
}
