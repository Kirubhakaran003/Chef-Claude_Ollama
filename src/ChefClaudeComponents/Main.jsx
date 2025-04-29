import React from "react";
import ClaudeReceipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
// import { getRecipeFromMistral } from "../../ai";
import { getRecipeFromLlama3 } from "../ollama";

export default function Main() {
  //Storing the ingredients
  const [ingredients, setMyIngredients] = React.useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);

  //Adding the ingredients into useState by receiving the ingredients from input element
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");

    setMyIngredients((prevState) => [...prevState, newIngredient]);
  }

  //Getting the receipe from ai and storing into an useState()
  const [recipe, setRecipe] = React.useState("");
  
  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromLlama3(ingredients);
    setRecipe(recipeMarkdown);
  }

  //Creating the useRef to scrollDown to the section where ai generates the Recipe

  const recipeSection = React.useRef(null);
  console.log(recipeSection);

  React.useEffect(() => {
    if(recipe !=="" && recipe !== null){
      recipeSection.current.scrollIntoView()
    }
  }, [recipe]);

  

  return (
    <main>
      <form className="add-ingredient-form" action={addIngredient}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button type="submit">+ Add ingredient</button>
      </form>

      <IngredientsList
        ingredients={ingredients}
        getRecipe={getRecipe}
        ref={recipeSection}
      />

      {recipe && <ClaudeReceipe recipe={recipe} />}
    </main>
  );
}
