import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from 'material-ui/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import deepPurple from 'material-ui/colors/deepPurple'
import red from 'material-ui/colors/red'
import MainPage from './components/main/MainPage'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers/index'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const theme = createMuiTheme({
  palette: {
    primary: {main: deepPurple[600]},
    secondary: {main: red[500]},
    type: 'dark'
  }
})

console.log(theme)

const store = createStore(rootReducer, applyMiddleware(thunk))

function App () {
  return [
    <CssBaseline key='cssBaseline' />,
    <MuiThemeProvider theme={theme} key='themeProvider'>
      <Provider store={store}>
        <MainPage />
      </Provider>
    </MuiThemeProvider>
  ]
}

ReactDOM.render(<App />, document.querySelector('#container'))
