export abstract class State {
    name?: String
    value: Object | undefined
    listeners?: Array<() => void>
    abstract getState(): Object
    abstract setState(Object: any): Object
    abstract addListener(listener: Function): void
}

export abstract class GlobalState {
    states?: State[]
    abstract addState(state: State): void
    abstract getState(name: String): State
}