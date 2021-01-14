import { Team } from './Team'

export class Key {

    private teamA: Team
    private teamB: Team
    private winer: Team = null

    constructor(teamA: Team, teamB: Team) {
        this.teamA = teamA
        this.teamB = teamB
    }

    getWiner() {
        const winer = Math.floor(Math.random() * (1 - 0) + 0)
        this.winer = winer ? this.teamA : this.teamB
        return this.winer
    }

    toString() {
        return `(${this.teamA.name} vs ${this.teamB.name})`;
    }

}