

function RatingSelect({rating, setRating}) {
    
    const handleChange = (e) => {
        
        setRating(+e.currentTarget.value)
        
      }

    

  return (
    <ul className="rating">
        <li>
            <input 
            type='radio'
            id="num1"
            value={1}
            name='rating'
            onChange={handleChange}
            checked={rating === 1}
            />
            <label htmlFor="num1">1</label>
        </li>
        <li>
            <input 
            type='radio'
            id="num2"
            value={2}
            name='rating'
            onChange={handleChange}
            checked={rating === 2}
            />
            <label htmlFor="num2">2</label>
        </li>
        <li>
            <input 
            type='radio'
            id="num3"
            value={3}
            name='rating'
            onChange={handleChange}
            checked={rating === 3}
            />
            <label htmlFor="num3">3</label>
        </li>
        <li>
            <input 
            type='radio'
            id="num4"
            name='rating'
            value={4}
            onChange={handleChange}
            checked={rating === 4}
            />
            <label htmlFor="num4">4</label>
        </li>
        <li>
            <input 
            type='radio'
            id="num5"
            value={5}
            name='rating'
            onChange={handleChange}
            checked={rating === 5}
            />
            <label htmlFor="num5">5</label>
        </li>
        <li>
            <input 
            type='radio'
            id="num6"
            value={6}
            name='rating'
            onChange={handleChange}
            checked={rating === 6}
            />
            <label htmlFor="num6">6</label>
        </li>
        <li>
            <input 
            type='radio'
            id="num7"
            value={7}
            name='rating'
            onChange={handleChange}
            checked={rating === 7}
            />
            <label htmlFor="num7">7</label>
        </li>
        <li>
            <input 
            type='radio'
            id="num8"
            value={8}
            name='rating'
            onChange={handleChange}
            checked={rating === 8}
            />
            <label htmlFor="num8">8</label>
        </li>
        <li>
            <input 
            type='radio'
            id="num9"
            value={9}
            name='rating'
            onChange={handleChange}
            checked={rating === 9}
            />
            <label htmlFor="num9">9</label>
        </li>
        <li>
            <input 
            type='radio'
            id="num10"
            value={10}
            name='rating'
            onChange={handleChange}
            checked={rating === 10}
            />
            <label htmlFor="num1">10</label>
        </li>
    </ul>
  )
}

export default RatingSelect