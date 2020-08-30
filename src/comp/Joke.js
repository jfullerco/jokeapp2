import React from 'react'



function Joke(props) {

  return(

      <div> 

        <p>{props.question}</p>
        <p>{props.answer}</p>

      </div>

  )
  

}

export default Joke