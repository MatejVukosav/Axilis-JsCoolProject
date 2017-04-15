import * as loginType from './login.type';

export function login() {
    return {type: loginType.LOGIN};
}

export function logout() {
    return {type: loginType.LOGOUT};
}