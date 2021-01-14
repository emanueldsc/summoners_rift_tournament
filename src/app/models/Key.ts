import { Team } from './Team'

export class Key {

    private _teamA: Team;
    private _teamB: Team;
    private winer: Team = null

    constructor(teamA: Team, teamB: Team) {
        this._teamA = teamA
        this._teamB = teamB
    }

    get teamA(): string { return this._teamA.name }
    get teamB(): string { return this._teamB.name }

    getWiner() {
        const winer = Math.floor(Math.random() * (1 - 0) + 0)
        this.winer = winer ? this._teamA : this._teamB
        return this.winer
    }

    winerA() {
        this.winer = this._teamA;
        return this.winer;
    }

    winerB() {
        this.winer = this._teamB;
        return this.winer;
    }

    toString() {
        return `(${this._teamA.name} vs ${this._teamB.name})`;
    }

}