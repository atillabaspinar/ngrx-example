import * as ShoppingListActions from './shopping-list.actions';
import { Ingredient } from '../../shared/ingredient.model';

export interface AppState {
    shoppingList: State;
}

export interface State {
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedIngredientIndex: number;
}

const initialState: State = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state, ingredients: [...state.ingredients, action.payload]
            };
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state, ingredients: [...state.ingredients, ...action.payload]
            };
        case ShoppingListActions.UPDATE_INGREDIENT:
            state.ingredients[action.payload.index] = action.payload.ingredient;
            return {
                ...state, ingredients: [...state.ingredients]
            };
        case ShoppingListActions.DELETE_INGREDIENT:
            state.ingredients.splice(action.payload, 1);
            return {
                ...state, ingredients: [...state.ingredients]
            };
        case ShoppingListActions.START_EDIT:
            state.editedIngredient = state[action.payload];
            state.editedIngredientIndex = action.payload;
            return state;
        default:
            return state;
    }
}
