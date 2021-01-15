import { Key } from './Key'
import { Team } from './Team'

export class Round{
    
    private _keys: Key[]

    constructor(keys: Key[]){
        this._keys = keys
    }

    getWiners(): Team[] {
        const winers = this._keys.map(key => key.getWiner())
        return winers
    }

    get keys(): Key[]{
        return this._keys
    }
}