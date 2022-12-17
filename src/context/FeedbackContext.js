import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from "react"

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
          id: 1,
          rating: 10,
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
        },
        {
          id: 2,
          rating: 9,
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
        },
        {
          id: 3,
          rating: 8,
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
        },
      ])
      const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit:false
      })

    const handleAdd = (newFeedback) => {
        newFeedback.id = uuidv4()

        setFeedback([newFeedback, ...feedback]);
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const handleEdit = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        handleAdd,
        handleEdit
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext