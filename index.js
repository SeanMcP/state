this.initState = function(value) {
    setAppState(value)
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
