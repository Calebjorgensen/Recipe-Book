import { Component, } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

  

  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService, 
    private router: Router,
    private route: ActivatedRoute) { 

    }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }


  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }


}
