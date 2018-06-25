import { combineReducers } from 'redux'
import { suppressionFormIsSubmitting, suppressionFormSubmitted, suppressionFormError, suppressionFormReset, suppressionFormPhoneTypes } from './suppressionList'

export default combineReducers({
  suppressionFormIsSubmitting,
  suppressionFormSubmitted,
  suppressionFormError,
  suppressionFormReset,
  suppressionFormPhoneTypes,
})