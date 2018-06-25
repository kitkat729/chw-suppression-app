import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styles = {
  root: {
  },
  checked: {},
  size: {
    width: 40,
    height: 40,
  },
};

class CheckboxLabels extends React.Component {
  state = {
    sms: true,
    voicemail: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;

    return (
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.sms}
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
              checked={this.state.voicemail}
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

export default withStyles(styles)(CheckboxLabels);