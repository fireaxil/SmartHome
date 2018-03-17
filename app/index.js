import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from 'material-ui/CssBaseline'
import Typography from 'material-ui/Typography'
import { createMuiTheme } from 'material-ui/styles'

function App () {
  return (
    <div>
      <CssBaseline />
      <Typography>
        Hello world!
      </Typography>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#container'))
