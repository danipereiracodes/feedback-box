import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import { FeedbackProvider } from "./context/FeedbackContext";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutLink from "./components/AboutLink";



const App = () => {
    
    return (
        <FeedbackProvider>
        <BrowserRouter>

            <Header title='Feedback UI' />
            <div className="container">
        
                <Routes>
                    <Route path='/' element={
                        <>
                            <FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList />
                        </>}
                    />


                    <Route path='/about' element={<AboutPage />}></Route>
                    
                </Routes>
                <AboutLink />
            </div>

        </BrowserRouter>
        </FeedbackProvider>

    )
}

export default App;