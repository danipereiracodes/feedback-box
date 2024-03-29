import { PropTypes } from "prop-types"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
import Card from "./shared/Card"
import {FaTimes, FaEdit} from 'react-icons/fa'

function FeedbackItem({item}) {

  const {deleteFeedback, handleEdit} = useContext(FeedbackContext)
  

  return (
    <Card>
        <div className='num-display'>
    {item.rating}
        </div>
        <button onClick={() => deleteFeedback(item.id)} className='close'>
          <FaTimes color='purple'/>
          </button>
          <button onClick={() => handleEdit(item)}className="edit">
            <FaEdit color='purple'/>
          </button>
        <div className='text-display'>
            {item.text}
        </div>
       
    </Card>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}


export default FeedbackItem