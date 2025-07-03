import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

   private recipes: Recipe[] = [
      new Recipe('A Test recipe', 'This is simply a test',
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ffast-food&psig=AOvVaw3HUSIDtg2kjPhRqbr3mi6h&ust=1747188558263000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPj97eWun40DFQAAAAAdAAAAABAE',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
      new Recipe('Recipe 2', 'Here is how to make...', '', 
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
      return this.recipes.slice();
    }

    getRecipe(index: number) {
      return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
    }
  
    updateRecipe(index: number, newRecipe: Recipe){
      this.recipes[index] = newRecipe;
      this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
      this.recipes.splice(index, 1);
      this.recipesChanged.next(this.recipes.slice());
    }
}
