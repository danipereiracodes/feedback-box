import React from 'react'
import Card from './shared/Card'
import { useState, useContext, useEffect } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [message, setMessage] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [rating, setRating] = useState(10)
    const {handleAdd, feedbackEdit} = useContext(FeedbackContext)

    useEffect(()=> {
        if(feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
        console.log('blab');
    }, [feedbackEdit])

    const handleChange = (e) => {

        if(text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10) {
            setMessage('Review must contain at least 10 characters')
            setBtnDisabled(true)
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }

        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            handleAdd(newFeedback);

            setText('')
        }
    }
    
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your experience?</h2>
            <RatingSelect rating={rating} setRating={setRating} />
            <div className='input-group'>
             <input type='text' placeholder='Write a review...' onChange={handleChange} value={text}/>
             <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm