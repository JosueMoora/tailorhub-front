import { User } from '../interfaces/authInterfaces'

export interface AuthState {
    errorMessage: string
    user: User | null
}

type AuthAction =
        | {type: 'signUp', payload: {user: User}}
        | {type: 'addError', payload: string}
        | {type: 'removeError'}
        | {type: 'notAuthenticated'}
        | {type: 'logout'}



export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'addError':
            return {
                ...state,
                user: null,
                errorMessage: action.payload,
            }

        case 'removeError':
            return {
                ...state,
                errorMessage: '',
            }

        case 'signUp':
            return {
                ...state,
                errorMessage: '',
                user: action.payload.user
            }

        case 'logout':
        case 'notAuthenticated':
            return {
                ...state,
                user: null,
            }

        default:
            return state;
    }

}
