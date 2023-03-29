import React from 'react'
import { useState, useEffect } from 'react'

function Search(props) {

        const [input, setInput] = useState("")

        const handleChange = e => {
            const userInput = e.target.value
            setInput(userInput)
        }

        const handleSubmit = e => {
            console.log('Form - input', input)
            e.preventDefault()
            props.onSubmitFromApp(input)
        }

        return (
            <div className="create-new">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Search By Name'
                        onChange={handleChange}
                        value={input}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
    
export default Search
