import Recipe$ from '../Interface/Recipe';
import Recipe from '../Recipe/Recipe';
import'./Cart.css'

function Cart() {
  const recipes: Recipe$[] = [
    {
      foodId: 1,
      foodTag: "Italian",
      foodImage:
        "https://www.sipandfeast.com/wp-content/uploads/2022/09/spaghetti-carbonara-recipe-snippet.jpg",
      foodName: "Spaghetti Carbonara",
      foodPrepTime: "25 mins",
      foodIngredients: [
        "spaghetti",
        "eggs",
        "pancetta",
        "Parmesan cheese",
        "pepper",
      ],
      numberOFMemServes: 4,
      foodDescription:
        "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    },
    {
      foodId: 2,
      foodTag: "Mexican",
      foodImage:
        "https://upload.wikimedia.org/wikipedia/commons/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg",
      foodName: "Tacos",
      foodPrepTime: "15 mins",
      foodIngredients: [
        "tortillas",
        "ground beef",
        "lettuce",
        "cheese",
        "tomatoes",
      ],
      numberOFMemServes: 2,
      foodDescription:
        "Soft or hard tortilla filled with seasoned beef and fresh toppings.",
    },
    {
      foodId: 3,
      foodTag: "Japanese",
      foodImage:
        "https://www.sipandfeast.com/wp-content/uploads/2022/09/spaghetti-carbonara-recipe-snippet.jpg",
      foodName: "Sushi",
      foodPrepTime: "40 mins",
      foodIngredients: ["rice", "vinegar", "nori", "salmon", "avocado"],
      numberOFMemServes: 3,
      foodDescription:
        "Traditional Japanese dish of vinegared rice with seafood and vegetables.",
    },
    {
      foodId: 4,
      foodTag: "Indian",
      foodImage:
        "https://www.sipandfeast.com/wp-content/uploads/2022/09/spaghetti-carbonara-recipe-snippet.jpg",
      foodName: "Chicken Curry",
      foodPrepTime: "50 mins",
      foodIngredients: ["chicken", "onions", "tomatoes", "garlic", "spices"],
      numberOFMemServes: 4,
      foodDescription:
        "A spicy and flavorful Indian chicken dish served with rice or naan.",
    },
    {
      foodId: 5,
      foodTag: "American",
      foodImage:
        "https://www.sipandfeast.com/wp-content/uploads/2022/09/spaghetti-carbonara-recipe-snippet.jpg",
      foodName: "Cheeseburger",
      foodPrepTime: "20 mins",
      foodIngredients: ["ground beef", "cheese", "lettuce", "tomato", "bun"],
      numberOFMemServes: 1,
      foodDescription:
        "Classic American burger with a beef patty and melted cheese.",
    },
    {
      foodId: 6,
      foodTag: "Thai",
      foodImage:
        "https://www.sipandfeast.com/wp-content/uploads/2022/09/spaghetti-carbonara-recipe-snippet.jpg",
      foodName: "Pad Thai",
      foodPrepTime: "30 mins",
      foodIngredients: [
        "rice noodles",
        "shrimp",
        "tofu",
        "bean sprouts",
        "peanuts",
      ],
      numberOFMemServes: 3,
      foodDescription:
        "A stir-fried rice noodle dish with shrimp, tofu, and fresh toppings.",
    },
  ];
  return (
    <div className='grid'>
       {recipes.map((recipe: Recipe$) => (
        <Recipe
        foodTag={recipe.foodTag}
          foodImage={recipe.foodImage}
          foodName={recipe.foodName}
          foodPrepTime={recipe.foodPrepTime}
          foodIngredients={recipe.foodIngredients}
          numberOFMemServes={recipe.numberOFMemServes}
          foodDescription={recipe.foodDescription}
        />
      ))}
    </div>
  )
}

export default Cart
