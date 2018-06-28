import { combineReducers } from 'redux'
import {
  suppressionFormIsSubmitting,
  suppressionFormSubmitted,
  suppressionFormError,
  suppressionFormReset,
  suppressionFormPhoneTypes,
  suppressionFormPhoneNumber,
} from './suppressionList'

import {
  SUPPRESSIONFORM_SHOULD_RESET,
} from '../constants/actionTypes'

const appReducers = combineReducers({
  suppressionFormIsSubmitting,
  suppressionFormSubmitted,
  suppressionFormError,
  suppressionFormReset,
  suppressionFormPhoneTypes,
  suppressionFormPhoneNumber,
})

const suppressionRootReducer = (state, action) => {
  switch (action.type) {
    case SUPPRESSIONFORM_SHOULD_RESET:
      state = undefined
      break
  }

  return appReducers(state, action)
}

export default suppressionRootReducer