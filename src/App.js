import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";



const App = () => {
    const [feedback, setFeedback] = useState(FeedbackData)


    const handleAdd = (newFeedback) => {
        newFeedback.id = uuidv4()

        setFeedback([newFeedback, ...feedback]);
    }


    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }



    return (
        <BrowserRouter>

            <Header title='Feedback UI' />
            <div className="container">

                <Routes>
                    <Route path='/' element={
                        <>
                            <FeedbackForm handleAdd={handleAdd} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                        </>}
                    />


                    <Route path='/about' element={<AboutPage />}></Route>
                </Routes>
            </div>

        </BrowserRouter>

    )
}

export default App;