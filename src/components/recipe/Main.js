import React, { useState, useEffect } from "react";
import styles from "./Recipe.module.css";
import RecipeCard from "./RecipeCard";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import home from "../../assets/home.svg";

const Main = () => {
  const [recipes, setRecipes] = useState();
  const [search, setSearch] = useState("");
  const [mealType, setMealType] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  const handleSearch = (e) => setSearch(e.target.value);
  const handleMealType = (e) => setMealType(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchApi();
    setSearch("");
  };

  const fetchApi = async () => {
    const API_KEY = "f814cbdf7cd35d6688d9f5d4e842aaca";
    const APP_ID = "59dc9e12";
    const myUrl = ` https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${API_KEY}`;
    await axios.get(myUrl).then((res) => setRecipes(res.data.hits)); //console.log
  };
  // https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${API_KEY}

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className={styles.master}>
      <h1 className={styles.title}>Eat The Best</h1>

      <div className={styles.formDiv}>
        <form onSubmit={handleSubmit} className={styles.formStyle}>
          <div>
            <input
              id="search"
              className={styles.formInput}
              name="text"
              type="text"
              placeholder="Search"
              required
              onChange={handleSearch}
              value={search}
            />
          </div>
          <button className={styles.formSubmit} type="submit">
            Search
          </button>
          <div>
            <select
              className={styles.formSelect}
              name="mealType"
              onChange={handleMealType}
            >
              <option value="">Meal Type</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Brunch">Brunch</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Snack">Snack</option>
              <option value="Teatime">Teatime</option>
            </select>
          </div>
        </form>
      </div>
      {recipes?.length > 0 ? (
        <div className={styles.recipes}>
          {recipes?.map(
            (recipe, index) =>
              `${recipe.recipe.mealType[0]}`.includes(
                `${mealType}`.toLowerCase()
              ) && (
                <div className={styles.recipe} key={index}>
                  <h3 className={styles.recipeTitle}>{recipe.recipe.label}</h3>
                  <img
                    className={styles.recipeImage}
                    src={recipe.recipe.image}
                    alt=""
                  />
                  <button
                    onClick={() => navigate("/details", { state: { recipe } })}
                    className={styles.viewMore}
                    type="button"
                  >
                    View More
                  </button>
                  <p>
                    {recipe.recipe.mealType[0]} {mealType}
                  </p>
                </div>
              )
          )}
        </div>
      ) : (
        <div className={styles.iconDiv}>
          <img className={styles.icon} src={home} alt="" />
        </div>
      )}
    </div>
  );
};

export default Main;
