import React from 'react'
import Typography from 'material-ui/Typography'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui'
import { convertKelvinToFahrenheit } from '../../misc/utils'

const styles = theme => ({

})

class ClockWeatherDisplay extends React.Component {
  convertTemperature () {
    const {weather} = this.props
    if (weather) {
      const {main} = weather
      return Math.ceil(convertKelvinToFahrenheit(main.temp))
    }
  }

  getWeatherInformation () {
    return `${this.convertTemperature()}° F`
  }

  render () {
    return (
      <Typography>
        &nbsp;|&nbsp;{this.getWeatherInformation()}
      </Typography>
    )
  }
}

function mapStateToProps ({weather}) {
  return {
    weather
  }
}

export default connect(mapStateToProps)(withStyles(styles)(ClockWeatherDisplay))