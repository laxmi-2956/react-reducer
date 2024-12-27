import { ADD, SUB } from "./actionType";

export function AddToCounter (val)
{
    return {type:ADD , payload:val}
}

export function SubToCounter (val)
{
    return {type:SUB, payload:val}
}