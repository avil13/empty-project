import { Action } from '@ngrx/store';
import { ApplicationState } from './application-state';



export function storeReducer(state: ApplicationState, action: Action): ApplicationState {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case 'USER_LOGIN':
            newState.auth = action.payload;
            return newState;

        default:
            return newState;
    }
}
