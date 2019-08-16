import { useState } from 'react'

const useForm = (callback) => {
    const[inputs, setInputs] = useState({
        // set initial values. unnecessary, but removes warning in browser console
        name: "",
        genre: "",
        authorId: "",
        age: 0
    })

    const handleSubmit = (event) => {
        if(event) {
            event.preventDefault()
        }
        callback()
    }

    const handleInputChange = (event) => {
        event.persist()
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}))
    }

    return {
        handleSubmit,
        handleInputChange,
        inputs
    };
}

export default useForm