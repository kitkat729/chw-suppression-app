/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

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

class PhoneInput extends React.Component {
  state = {
    textmask: '(1  )    -    ',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { textmask } = this.state;

    return (
      <div className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="phone-mask-input">{this.props.title}</InputLabel>
          <Input
            value={textmask}
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

export default withStyles(styles)(PhoneInput);