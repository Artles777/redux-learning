import { combineReducers } from "redux"
import { types } from "./types"

const initialThemeState = {
    value: 'light'
}

const initialButtonsState = {
    value: false
}

function counterReducer(state = 0, action) {
    switch (action.type) {
        case types.INCREMENT:
            return state + action.payload
        case types.DECREMENT:
            return state - action.payload
        default:
            return state
    }
}

function themeReducer(state = initialThemeState, action) {
    switch (action.type) {
        case types.TOGLE_THEME:
            return { ...state, value: action.payload }
        default:
            return state
    }
}

function btnsReducer(state = initialButtonsState, action) {
    switch (action.type) {
        case types.ENABLE_BTN:
            return { ...state, value: false }
        case types.DISABLE_BTN:
            return { ...state, value: true }
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
    disabled: btnsReducer
})