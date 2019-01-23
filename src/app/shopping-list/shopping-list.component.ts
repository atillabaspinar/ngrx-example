import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import * as fromShoppinglist from './store/shopping-list.reducers';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StartEdit } from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit
//, OnDestroy 
{
  // ingredients: Ingredient[];
  shoppingListState: Observable<{ingredients: Ingredient[]}>;
  //private subscription: Subscription;

  constructor(private slService: ShoppingListService, private store: Store<fromShoppinglist.AppState>) { }

  ngOnInit() {
    // this.ingredients = this.slService.getIngredients();
    this.shoppingListState = this.store.select('shoppingList');
    
    // this.subscription = this.slService.ingredientsChanged
    //   .subscribe(
    //     (ingredients: Ingredient[]) => {
    //       this.ingredients = ingredients;
    //     }
    //   );
  }

  onEditItem(index: number) {
    this.store.dispatch(new StartEdit(index));
    this.slService.startedEditing.next(index);
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
