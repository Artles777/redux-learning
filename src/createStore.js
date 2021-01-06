export function createStore(rootReduces, initialState) {
    let state = rootReduces(initialState, { type: '__INIT__' })
    const listeners = []

    return {
        dispatch(action) {
            state = rootReduces(state, action)
            listeners.forEach(listen => listen())
        },

        subscribe(callback) {
            listeners.push(callback)
        },

        getState() {
            return state
        }
    }
}