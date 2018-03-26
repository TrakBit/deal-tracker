//@flow
import type {Deals} from '../types/Deals';
import type {Deal} from '../types/Deal';

export type GET_DEALS_ACTION = {|
    type: 'GET_DEALS',
    deals: Deals
|}

export type ADD_DEALS_ACTION = {|
    type: 'ADD_DEAL',
    deal: Deal
|}

export type DELETE_DEAL_ACTION = {|
    type: 'DELETE_DEAL',
    dealItem: number
|}

export type EDIT_DEAL_ACTION = {|
    type: 'EDIT_DEAL',
    deal: Deal,
    dealRow: number
|}

export type Action =
    | GET_DEALS_ACTION
    | ADD_DEALS_ACTION
    | DELETE_DEAL_ACTION
    | EDIT_DEAL_ACTION