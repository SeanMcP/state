this.initState = function(value) {
    setAppState(value)

    this.initState = function() {
        console.warn(
            '@seanmcp/state: You cannot call `this.initState()` more than once. To update the current state, use `this.setState()`.'
        )
    }
}

function getAppState() {
    return JSON.parse(window.localStorage.getItem('state'))
}

function setAppState(state) {
    window.localStorage.setItem('state', JSON.stringify(state))
    delete this.state
    this.state = state
    Object.freeze(this.state)
}

this.setState = function(update, callback) {
    const prevState = getAppState()
    const nextState = {
        ...state,
        ...(typeof update === 'function' ? update(prevState) : update)
    }
    setAppState(nextState)
    if (callback) callback()
}
