import React, {useState, useEffect} from 'react'
import { useLocation, useNavigate, useParams, } from 'react-router-dom'
import diet from "../../assets/diet.svg"
import styles from "./Recipe.module.css"
import BackArrow from "../../assets/BackArrow"


const RecipeCard = () => {
  const navigate = useNavigate()
  const handleBack = ()=> {
    navigate(-1)
  }


  const location = useLocation()
  const  recipe= location.state.recipe.recipe

  return (
    <div>
      <div >
      </div>
      <div className={styles.header}>
        <BackArrow onClick={handleBack} className= {styles.backArrow} />
        <h1>{recipe.label}</h1>
        <img className={styles.dietIcon} src={diet} alt="" />
      </div>
      <div className={styles.details}>
        <div className={styles.ingredients}>
          {recipe?.ingredientLines.map((line,index) =>(
            <div key={index}>
              <h4>{line}</h4>
            </div>
          ))}
        </div>
        <div className={styles.image}>
          <img src={recipe.image} alt="" />
        </div>
      </div>
      





    </div>
  )
}

export default RecipeCard

