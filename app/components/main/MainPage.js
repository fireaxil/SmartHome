import React from 'react'
import { withStyles } from 'material-ui/styles'
import deepPurple from 'material-ui/colors/deepPurple'
import Clock from './Clock'
import {connect} from 'react-redux'
import { getWeather } from '../../actions/MainPageActions'

const styles = theme => ({
  mainPageRoot: {
    height: '100%',
    backgroundColor: deepPurple[500],
    color: '#fafafa !important'
  }
})

class MainPage extends React.Component {
  constructor (props) {
    super(props)
    props.getWeather()
  }

  render () {
    const { classes } = this.props
    console.log(this.props.weather)
    return (
      <div className={classes.mainPageRoot}>
        <Clock />
      </div>
    )
  }
}

function mapStateToProps ({weather}) {
  return {
    weather
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getWeather: () => dispatch(getWeather())
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(MainPage))
