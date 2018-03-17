import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from 'material-ui/CssBaseline'
import Typography from 'material-ui/Typography'

function App () {
  return (
    <div>
      <CssBaseline />
      <Typography>
        Ben is a sexy motherfucker
      </Typography>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#container'))
