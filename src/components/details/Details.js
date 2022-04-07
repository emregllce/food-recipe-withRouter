import React from 'react'
import diet from "../../assets/diet.svg"
import meal from "../../assets/meal.svg"
import meal2 from "../../assets/meal2.svg"

const Details = () => {

  // const location = useLocation();
  // const recipe = location.state.recipe;

  return (
    <div>
       <img style={{width :"250px"}} src={diet} alt="" />
        <img style={{width :"250px"}} src={meal} alt="" />
        <img style={{width :"250px"}} src={meal2} alt="" />
    </div>
  )
}

export default Details