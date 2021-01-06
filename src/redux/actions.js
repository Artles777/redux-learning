import { types } from "./types";

export function updateCounter(type, count) {
    switch (type) {
        case types.INCREMENT:
            return {
                type: types.INCREMENT,
                payload: count
            }
        case types.DECREMENT:
            return {
                type: types.DECREMENT,
                payload: count
            }
    }
}

export function togleTheme(theme) {
    const newTheme = document.body.classList.contains('light')
                ? 'dark'
                : 'light'
    return { type: types.TOGLE_THEME, payload: newTheme || theme }
}

export function acyncIncrement(count) {
    return function(dispatch) {
        dispatch(disableBtn())
        setTimeout(() => {
            dispatch(updateCounter(types.INCREMENT, count))
            dispatch(enableBtn())
        }, 2000)
    }
}

export function enableBtn() {
    return { type: types.ENABLE_BTN }
}

export function disableBtn() {
    return { type: types.DISABLE_BTN }
}