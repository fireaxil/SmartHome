import React from 'react'
import { withStyles } from 'material-ui/styles'
import deepPurple from 'material-ui/colors/deepPurple'
import Clock from './Clock'

const styles = theme => ({
  mainPageRoot: {
    height: '100%',
    backgroundColor: deepPurple[500],
    color: '#fafafa !important'
  }
})

class MainPage extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.mainPageRoot}>
        <Clock />
      </div>
    )
  }
}

export default withStyles(styles)(MainPage)
