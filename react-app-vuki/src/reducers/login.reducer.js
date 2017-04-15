'use strict'
import * as loginType from '.actions/login.type'

const initialState = {
    loggedIn: false
}

export default function loggedIn(state = initialState, action = {}) {
    switch (action.type) {
        case loginType.LOGIN:
            return {
                ...state,
                loggedIn: true
            };
        case loginType.LOGOUT:
            return {
                ...state,
                loggedIn: false
            };
        default:
            return state;
    }
}