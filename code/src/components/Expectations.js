import React from 'react'

const Expectations = ({ expectations, setExpectations, nextSlide, backSlide }) => {
  const feedbackValues = ['superduper', 'great', 'standard', 'horrible']

    return (
     <section>
      <div>
        <h2>How did you find the stay</h2>
        {feedbackValues.map(feedback => (
        <label key={feedback} htmlFor='feedback'>
        <input
          id='feedback'
          type='radio'
          value={feedback}
          onChange={(event) => {setExpectations(event.target.value)}}
          checked={expectations === feedback}
        />
        {feedback}
        </label>
        ))}
        <div>
          <button className='button' onClick={backSlide}>
            back
          </button>
          <button className='button' onClick={nextSlide}>
            submit
          </button>
        </div>
      </div>
     </section> 
    )
}

    export default Expectations
