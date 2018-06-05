import React from 'react'
import Typography from 'material-ui/Typography'
import moment from 'moment'
import { withStyles } from 'material-ui/styles'
import ClockWeatherDisplay from './clockWeatherDisplay'

const styles = theme => ({
  clockRoot: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 15
  },
  timeText: {
    fontSize: '5em',
    lineHeight: '1.3em'
  },
  subClockHeader: {
    display: 'flex'
  }
})

class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      time: new Date()
    }
  }

  tick () {
    this.setState({
      time: new Date()
    })
  }

  formatTime () {
    // return moment(this.state.time).format('h:mm:ss a')
    return moment(this.state.time).format('h:mma')
  }

  formatDayOfWeek () {
    return moment(this.state.time).format('ddd MMM Do')
  }

  componentDidMount () {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount () {
    clearInterval(this.timerId)
  }

  render () {
    const {classes} = this.props
    return (
      <div className={classes.clockRoot}>
        <Typography className={classes.timeText} variant='display2' color='inherit'>
          {this.formatTime()}
        </Typography>
        <Typography className={classes.subClockHeader}>
          {this.formatDayOfWeek()}
          <ClockWeatherDisplay />
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(Clock)
