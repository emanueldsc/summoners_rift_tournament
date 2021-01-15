export class Team {

    private _name: string
    private wonFrom: Team[]

    constructor(name: string = "") {
        this._name = name
    }

    get name(): string {
        return this._name.toString()
    }

}