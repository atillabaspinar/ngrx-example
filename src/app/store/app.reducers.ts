import * as ShoppingList from '../shopping-list/store/shopping-list.reducers';
import * as Auth from '../auth/store/aut.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    shoppingList: ShoppingList.State;
    auth: Auth.State;
}

export const reducers: ActionReducerMap<AppState> = {
    shoppingList: ShoppingList.shoppingListReducer,
    auth: Auth.authReducer
};

