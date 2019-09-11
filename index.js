window.stateEvent = new Event('state')

window.initState = function(value) {
    setAppState(value)

    window.initState = function() {
        console.warn(
            '@seanmcp/state: You cannot call `this.initState()` more than once. To update the current state, use `this.setState()`.'
        )
    }
}

function setAppState(state) {
    window.sessionStorage.setItem('state', JSON.stringify(state))
    delete window.state
    window.state = state
    Object.freeze(window.state)
}

window.setState = function(update, callback) {
    const prevState = JSON.parse(window.sessionStorage.getItem('state'))
    const nextState = {
        ...prevState,
        ...(typeof update === 'function' ? update(prevState) : update)
    }

    if (JSON.stringify(prevState) !== JSON.stringify(nextState)) {
        setAppState(nextState)
        if (callback) callback()
        window.dispatchEvent(window.stateEvent)
    }
}
