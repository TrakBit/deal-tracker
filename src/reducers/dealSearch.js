//@flow
import {EDIT_DEAL_SEARCH} from '../constants/deals';
import type {Action} from '../types/Action';

export const dealSearchReducer = (
    state: string = '',
    action: Action
) => {
    switch (action.type) {
    case EDIT_DEAL_SEARCH:
        return action.dealSearch;
    default:
        return state;
    }
};