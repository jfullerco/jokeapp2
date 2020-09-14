import React from 'react'

import Joke from './comp/Joke'

import './style.css'



function JokeFilter() {



}


function App() {
  return(
    <div className="JokeBox">
      <Joke 
      question= {"Knock Knock"}
      answer= {"who is there?"}
      />
      <p>
      <Joke 
      question= {"Anya"}
      answer= {"Anya who?"}
      />
      </p><p>
      <Joke 
      question= {"Anya glad I knocked?"}
      />
      </p>
    </div>

  )
}
export default App