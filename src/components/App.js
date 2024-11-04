import React, {useState, useEffect} from "react";
function App() {
   const [dogsImage, setDogImage] = useState(null)
   const [loading, setLoading] = useState(true)

   useEffect(() => {
    fetch ("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
        setDogImage(data.message)
        setLoading(false)
    })
   }, []);
   if(loading) {
    return <p>Loading...</p>
   }
   return (
    <div>
        <img src={dogsImage} alt="A Random Dog" />
    </div>
   )
}
export default App;
