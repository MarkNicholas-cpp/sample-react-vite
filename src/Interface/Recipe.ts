export default interface Recipe${
    foodId?:number;
    foodTag?: string;
    foodImage: string;
    foodName:string,
    foodPrepTime:string,
    foodIngredients:String[],
    numberOFMemServes:number,
    foodDescription:string
}