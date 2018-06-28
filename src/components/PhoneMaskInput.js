/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import { connect } from 'react-redux'
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import { inputPhoneNumber } from '../actions/suppressionList'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
})

function PhoneMask (props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

PhoneMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    phone: { textmask: state.suppressionFormPhoneNumber },
  }
}

const mapDispatchToProps = dispatch => {
  return {
    inputPhoneNumber: (number) => dispatch(inputPhoneNumber(number))
  }
}

class PhoneInput extends React.Component {

  handleChange = name => event => {
    this.props.inputPhoneNumber(event.target.value)
  };


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="phone-mask-input">{this.props.title}</InputLabel>
          <Input
            value={this.props.phone.textmask}
            onChange={this.handleChange('textmask')}
            id="phone-mask-input"
            inputComponent={PhoneMask}
          />
        </FormControl>
      </div>
    );
  }
}

PhoneInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PhoneInput))