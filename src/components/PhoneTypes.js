import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { checkPhoneType } from '../actions/suppressionList'

const styles = {
  root: {
  },
  checked: {},
  size: {
    width: 40,
    height: 40,
  },
};

const mapStateToProps = state => {
  return {
    types: state.suppressionFormPhoneTypes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkPhoneType: (name) => dispatch(checkPhoneType(name))
  }
}

class CheckboxLabels extends React.Component {

  handleChange = name => event => {
    this.props.checkPhoneType(name)
  };

  render() {
    const { classes } = this.props;

    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={this.props.types.sms}
              onChange={this.handleChange('sms')}
              value="sms"
              color="primary"
            />
          }
          label="SMS"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.props.types.voicemail}
              onChange={this.handleChange('voicemail')}
              value="voicemail"
              color="primary"
            />
          }
          label="Voicemail"
        />
      </FormGroup>
    );
  }
}

CheckboxLabels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CheckboxLabels));