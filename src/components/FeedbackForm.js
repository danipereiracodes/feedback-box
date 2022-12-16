import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'

function FeedbackForm() {
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }
    
  return (
    <Card>
        <form>
            <h2>How would you rate your experience?</h2>
            {/* Todo rating component */}
            <div className='input-group'>
             <input type='text' placeholder='Write a review...' onChange={handleChange} value={text}/>
             <button type='submit'>Send</button>
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm