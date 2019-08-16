import { useState } from 'react'

const useBookDetails = (initialState) => {

    const[selectedBook, setSelectedBook] = useState(initialState)

    const handleBookSelect = (event) => {
        setSelectedBook(event.target.id)
    }

    return {
        handleBookSelect,
        selectedBook
    };
}

export default useBookDetails