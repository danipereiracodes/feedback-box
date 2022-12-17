import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)

    let average = feedback.reduce((acc, current) => {
        return (acc + current.rating)
    },0) / feedback.length

    Math.trunc(average)
  return (
    <div className='feedback-stats'>
        <h4>{`${feedback.length} ${feedback.length > 1 || feedback.length === 0 ? 'Reviews' : 'Review'}`}</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}



export default FeedbackStats