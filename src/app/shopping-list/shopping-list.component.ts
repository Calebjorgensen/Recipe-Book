import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  standalone: false,
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnDestroy{
  ingredients: Ingredient[] = [];
  private subscription: Subscription;


    constructor (private slService: ShoppingListService) {}

    ngOnInit() {
      this.ingredients = this.slService.getIngredients();
      this.subscription = this.slService.ingredientsChanged
        .subscribe(
          (ingredients: Ingredient[]) => {
            this.ingredients = ingredients;
          }
        );
    }

    onEditItem(index: number){
      this.slService.startedEditing.next(index);
    }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

}
