import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {


  recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
      new Recipe('A Test recipe', 'This is simply a test',
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ffast-food&psig=AOvVaw3HUSIDtg2kjPhRqbr3mi6h&ust=1747188558263000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPj97eWun40DFQAAAAAdAAAAABAE'),
      new Recipe('Recipe 2', 'Here is how to make...', '')
    ];


    getRecipes() {
      return this.recipes.slice();
    }


  constructor() { }
}
