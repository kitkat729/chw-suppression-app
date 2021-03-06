import * as types from '../constants/actionTypes'
import axios from 'axios'

export const formSubmit = (url, data, config) => {
  return (dispatch) => {
    dispatch(formSubmitting(true));

    axios.post(url, data, config)
      .then((response) => {
          if (response.status !== 201 && response.status !== 200) {
              throw Error(response.statusText);
          }

          dispatch(formSubmitting(false));
          return response;
      })
      .then((response) => dispatch(formSubmitted(response.data)))
      .then((response) => {
        if (response.status === 201) {
          // new
        } else if (response.status === 200) {
          // edit
        }
        dispatch(formShouldReset(true))
      })
      .catch((error) => dispatch(formSubmitError(error)));
  }
}

export const formSubmitting = isSubmitting => {
  return {
    type: types.SUPPRESSIONFORM_SUBMITTING,
    isSubmitting: isSubmitting
  }
}

export const formSubmitted = response => {
  return {
    type: types.SUPPRESSIONFORM_SUBMITTED,
    response: response
  }
}

export const formSubmitError = error => {
  return {
    type: types.SUPPRESSIONFORM_SUBMIT_FAIL,
    error: error
  }
}

export const formShouldReset = shouldReset => {
  return {
    type: types.SUPPRESSIONFORM_SHOULD_RESET,
    shouldReset: shouldReset
  }
}

export const checkPhoneType = name => {
  return {
    type: types.SUPPRESSIONFORM_PHONE_TYPE,
    name: name
  }
}

export const inputPhoneNumber = number => {
  return {
    type: types.SUPPRESSIONFORM_PHONE_NUMBER,
    number: number
  }
}