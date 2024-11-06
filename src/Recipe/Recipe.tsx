import Recipe$ from "../Interface/Recipe";
import './Recipe.css'
function Recipe({
  foodTag,
  foodImage,
  foodName,
  foodDescription,
  foodPrepTime,
  foodIngredients,
  numberOFMemServes,
}: Recipe$) {
  return (
    <div className="recipe-card">
      <div className="recipe-image">
        <img src={foodImage} alt="Chocolate Cake" />
        {foodTag && <div className="recipe-label">{foodTag}</div>}
        <div className="close-btn">&times;</div>
      </div>
      <div className="recipe-content">
        <h2>{foodName}</h2>
        <div className="recipe-info">
          <div>{foodPrepTime} Minutes</div>
          <div>
            <span>&#x1F35E;</span> {foodIngredients.length} Ingredients
          </div>
          <div>
            <span>&#x1F958;</span> {numberOFMemServes} Servings
          </div>
        </div>
        <p>
          {foodDescription}
        </p>
        <button className="recipe-btn">View Recipe</button>
      </div>
    </div>
  );
}

export default Recipe;
