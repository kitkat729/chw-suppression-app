import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Save from '@material-ui/icons/Save'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

const IconSaveButton = props => {
  const { classes, onClick, other } = props;
  return (
    <Button {...other} variant="contained" size="small" className={classes.button} onClick={ e => { onClick(e) } }>
      <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
      Save
    </Button>
  )
}

IconSaveButton.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(IconSaveButton)