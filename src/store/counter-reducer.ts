
export type ReducerStateType = {
    typedStartValue: number,
    typedMaxValue: number,
    startValue: number,
    maxValue: number,
    counterValue: number,
    error: boolean
}
type ActionType = ChangeTypedStartValueAT
    | ChangeTypedMaxValueAT
    | ChangeCounterValueAT
    | ChangeErrorValueAT
    | ChangeStartValueAT
    | ChangeMaxValueAT
type  ChangeTypedStartValueAT = ReturnType<typeof ChangeTypedStartValueAC>
type  ChangeTypedMaxValueAT = ReturnType<typeof ChangeTypedMaxValueAC>
type  ChangeCounterValueAT = ReturnType<typeof ChangeCounterValueAC>
type  ChangeErrorValueAT = ReturnType<typeof ChangeErrorValueAC>
type  ChangeStartValueAT = ReturnType<typeof ChangeStartValueAC>
type  ChangeMaxValueAT = ReturnType<typeof ChangeMaxValueAC>

export const ChangeTypedStartValueAC = (newTypedStartValue: number) =>
    ({type: 'CHANGE-TYPED-START-VALUE', newTypedStartValue}) as const

export const ChangeTypedMaxValueAC = (newTypedMaxValue: number) =>
    ({type: 'CHANGE-TYPED-MAX-VALUE', newTypedMaxValue}) as const

export const ChangeCounterValueAC = (newCounterValue: number) =>
    ({type: 'CHANGE-COUNTER-VALUE', newCounterValue}) as const

export const ChangeErrorValueAC = (newError: boolean) =>
    ({type: 'CHANGE-ERROR-VALUE', newError}) as const

export const ChangeStartValueAC = (startValue: number) =>
    ({type: 'CHANGE-START-VALUE', startValue}) as const

export const ChangeMaxValueAC = (maxValue: number) =>
    ({type: 'CHANGE-MAX-VALUE', maxValue}) as const

const initialState: ReducerStateType = {
    typedStartValue: 0,
    typedMaxValue: 5,
    startValue: 0,
    maxValue: 5,
    counterValue: 0,
    error: false
}

export const counterReducer = (state = initialState, action: ActionType): ReducerStateType => {
    switch (action.type) {
        case 'CHANGE-TYPED-START-VALUE': {
            return {...state, typedStartValue:action.newTypedStartValue}
        }
        case 'CHANGE-TYPED-MAX-VALUE': {
            return {...state, typedMaxValue:action.newTypedMaxValue}
        }
        case 'CHANGE-COUNTER-VALUE': {
            return {...state,counterValue:action.newCounterValue}
        }
        case 'CHANGE-ERROR-VALUE': {
            return {...state,error:action.newError}
        }
        case 'CHANGE-START-VALUE': {
            return {...state,startValue:action.startValue}
        }
        case 'CHANGE-MAX-VALUE': {
            return {...state,maxValue:action.maxValue}
        }
        default:
            return state

    }
}