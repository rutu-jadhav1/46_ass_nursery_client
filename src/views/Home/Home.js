import { useEffect, useState } from "react"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"
import { Link } from "react-router-dom"

import "./Home.css"
import PlantCard from "../../components/PlantCard/PlantCard"
import addImage from "./plus.png"

function Home() {

  const [plants, setPlants] = useState([])

  const loadPlants = async () =>{
    toast.loading("Loading plants....")
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/plants`)
    toast.dismiss()
    toast.success("Plants loaded successfully")
    setPlants(response.data.data);
  }

  useEffect(()=>{
    loadPlants()
  }, [])

  return (
    <>
      <h1 className="heading">RJ's Nursery</h1>
      <div className="plantCard-div">
        {
          plants.map((plant, i)=>{
            const {_id, name, category, image, price, description} =plant
            return <PlantCard key={i} _id={_id} name={name} category={category} image={image} price={price} description={description}/>
          })
        }
        <Toaster/>
        <Link to="/add">
          <img src={addImage} alt="addImage" className="addImage-btn"/>
        </Link>
      </div>
    </>
  )
}

export default Home