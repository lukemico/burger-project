import React, {Component} from 'react'
import './App.css'
import injectSheet        from 'react-jss'
import {connect}          from 'react-redux'


const Header = injectSheet({
  yellow: {
    backgroundColor: 'yellow',
  },
})(({classes, name}) => {
  return (
    <div className={classes.yellow}>
      {name}
    </div>
  )
})

const mapStateToProps = (state) => {
  return {
    username: state.user.username || ''
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateUsername: (username) => dispatch({type: 'set_username', data: username})
})

const App = connect(mapStateToProps, mapDispatchToProps)(
  class App extends Component {
    render() {
      const {username, updateUsername} = this.props
      return (
        <div className="App">
          <Header name={username}/>
          <input placeholder="Username" type="text" onChange={e => updateUsername(e.target.value)}/>
        </div>
      )
    }
  }
)

export default App
