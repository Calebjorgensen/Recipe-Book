import { Component, Input, } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  standalone: false,
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {

  
  @Input() recipe: Recipe;
  
  constructor(private recipeService: RecipeService){}
  
  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }


}
