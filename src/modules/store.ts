
import { GlobalState, State } from './abstraction'

export class Store extends GlobalState {

    states: State[] = []

    addState(state: State) {
        this.states.push(state)
    }

    getState(name: String): State {
        return this.states.filter(state => state.name === name)[0]
    }
}