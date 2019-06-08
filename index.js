window.initState = function(value) {
    setAppState(value)

    window.initState = function() {
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
    delete window.state
    window.state = state
    Object.freeze(window.state)
}

window.setState = function(update, callback) {
    const prevState = getAppState()
    const nextState = {
        ...prevState,
        ...(typeof update === 'function' ? update(prevState) : update)
    }
    setAppState(nextState)
    if (callback) callback()
}
