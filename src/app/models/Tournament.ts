import { Round } from './Round'
import { Team } from './Team'
import { Key } from './Key'

export class Tournament {


    private _rounds: Round[] = []

    constructor(teams: Team[]) {
        const keys = this.generateKeys(teams, true)
        const round = new Round(keys)
        this._rounds.push(round)
    }

    private shuffleTeams(teams: Team[]): Team[] {
        let seed = Math.floor(Math.random() * 10 + 1)
        let shuffleTeams = teams.concat([])
        while (seed) {
            shuffleTeams.sort(() => Math.random() - 0.5)
            --seed
        }
        return shuffleTeams
    }

    private generateKeys(teams: Team[], shuffle?: boolean): Key[] {
        if (teams.length % 2 != 0) {
            throw new Error("O numero de Times não é par")
        } else {
            const shuffleTeams = shuffle ?  this.shuffleTeams(teams) : teams;
            const keys = []
            for (let i = 0; i < shuffleTeams.length; i += 2) {
                keys.push(new Key(shuffleTeams[i], shuffleTeams[i + 1]))
            }
            return keys
        }
    }

    public generateNewRound() {
        const lastRound = this._rounds[this._rounds.length - 1]
        const teamsWiners = lastRound.getWiners()
        const newKeys = this.generateKeys(teamsWiners)
        const round = new Round(newKeys)
        this._rounds.push(round)
    }

    get round(): Round[] {
        return this._rounds
    }

}