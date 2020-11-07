import { State } from '../modules/abstraction'

export class Counter extends State {
    name: String
    value: any
    listeners!: any
    constructor(name: String, value: Object) {
        super()
        this.name = name
        this.value = value
        this.listeners = []
    }

    getState(): Object {
        return this.value
    }
    setState(nextValue: any): Object {
        this.value = nextValue
        this.listeners.map((listener: Function, _idx: number) => {
            listener()
        })
        return nextValue
    }

    addListener(listener: Function): void {
        this.listeners.push(listener)
    }
}