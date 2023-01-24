import { v4 as uuidv4 } from 'uuid'
import { createContext, useState, useEffect } from "react"

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
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

    const updateFeedback = (id, updItem) => {
        
        setFeedback(
            feedback.map((item)=> (item.id === id ? { ...item, ...updItem}
                : item))
        )
        
    }

    useEffect(() => {
        fetchFeedback()
    }, [] )

    const fetchFeedback = async () => {
        const response = await fetch('http://localhost:5000/feedback?_sort=id&_order=desc')
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    return <FeedbackContext.Provider value={{
        feedbackEdit,
        feedback,
        isLoading,
        deleteFeedback,
        handleAdd,
        handleEdit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext