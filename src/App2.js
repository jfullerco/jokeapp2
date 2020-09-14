import React, { Component } from 'react'

class App2 extends Component {
  constructor() {
    super()
    this.state = {
      joke: ""
    }
  }
  componentDidMount() {
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => { 
      this.setState({
        joke: data
      })
    })
  }
  render() {
  
  return( 
    <div>
    {this.state.joke.setup} <p> {this.state.joke.punchline} </p>
    </div>
  )}
}

export default App2