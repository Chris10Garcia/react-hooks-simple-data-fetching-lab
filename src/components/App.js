import React, { useEffect, useState } from 'react'



function App (){
    const [image, setImage] = useState(null)

    function handleImage(data){
        setImage(data)
    }

    useEffect( () => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => handleImage(data.message))
    }, [])


    return (
        image ? <img src = {image} alt = "A Random Dog"></img> : <p>Loading...</p>
    )
}


export default App