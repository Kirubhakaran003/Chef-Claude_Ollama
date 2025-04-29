export default function IngredientsList(props) {

  const ingredientsElements = props.ingredients.map((items, index) => (
    <li key={index}>{items}</li>
  ));
  return (
    <>
      {props.ingredients.length > 0 && (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul>{ingredientsElements}</ul>
          {props.ingredients.length > 3 && (
            <div className="readyForRecipe_Container" ref={props.ref}>
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button onClick={props.getRecipe}>Get a recipe</button>
            </div>
          )}
        </section>
      )}
    </>
  );
}
