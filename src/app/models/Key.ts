import { Team } from './Team'

export class Key {

    private _teamA: Team
    private _teamB: Team
    private _winer: Team = null

    constructor(teamA: Team, teamB: Team) {
        this._teamA = teamA
        this._teamB = teamB
    }

    get teamA(): string { return this._teamA.name }
    get teamB(): string { return this._teamB.name }
    get winer(): string {
        if (this._winer)
            return this._winer.name
        return null
    }

    getWiner() {
        if (this._winer) 
            return this._winer;
        const winer = Math.random()
        this._winer = winer > 0.5 ? this._teamA : this._teamB
        return this._winer
    }

    winerA() {
        this._winer = this._teamA
        return this._winer
    }

    winerB() {
        this._winer = this._teamB
        return this._winer
    }

}