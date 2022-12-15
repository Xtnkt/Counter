import React, {ChangeEvent} from 'react';
import s from './InputData.module.css'
import {useSelector} from "react-redux";
import {CounterRootStateType} from "../../store/store";
import {ReducerStateType} from "../../store/counter-reducer";
import {counterSelector} from "../../store/selector/counterSelector";

type InputDataPropsType = {
    inputOnChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void,
    inputOnChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const InputData = (props: InputDataPropsType) => {
    const counterStore = useSelector<CounterRootStateType, ReducerStateType>(counterSelector)
    const StartValueInputClassName = s.input
        + (((counterStore.error) || (counterStore.startValue < 0)) ? ' ' + s.errorInput : ' ' + s.superInput)
    const MaxValueInputClassName = s.input
        + (((counterStore.error) || (counterStore.maxValue < 0)) ? ' ' + s.errorMaxInput : ' ' + s.superMaxInput)
    return (
        <div className={s.motherDiv}>
            <div className={s.startValueInput}>
                <div>
                    StartValue:
                </div>
                <input type={"number"}
                       value={counterStore.typedStartValue}
                       onChange={props.inputOnChangeStartValue}
                       className={StartValueInputClassName}/>
            </div>
            <div className={s.maxValueInput}>
                <div>
                    MaxValue:
                </div>
                <input type={"number"}
                       value={counterStore.typedMaxValue}
                       onChange={props.inputOnChangeMaxValue}
                       className={MaxValueInputClassName}/>
            </div>
        </div>
    );
};
//
// type InputDataPropsType = {
//     inputOnChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void,
//     inputOnChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void,
//     errorState: boolean,
//     typedStartValue: number,
//     typedMaxValue: number,
//     startValue: number,
//     maxValue: number
// }
//
// export const InputData = (props: InputDataPropsType) => {
//     const counterStore = useSelector<CounterRootStateType, ReducerStateType>(counterSelector)
//     const StartValueInputClassName = s.input
//         + (((props.errorState) || (props.startValue < 0)) ? ' ' + s.errorInput : ' ' + s.superInput)
//     const MaxValueInputClassName = s.input
//         + (((props.errorState) || (props.maxValue < 0)) ? ' ' + s.errorMaxInput : ' ' + s.superMaxInput)
//     return (
//         <div className={s.motherDiv}>
//             <div className={s.startValueInput}>
//                 <div>
//                     StartValue:
//                 </div>
//                 <input type={"number"}
//                        value={counterStore. props.typedStartValue}
//                        onChange={props.inputOnChangeStartValue}
//                        className={StartValueInputClassName}/>
//             </div>
//             <div className={s.maxValueInput}>
//                 <div>
//                     MaxValue:
//                 </div>
//                 <input type={"number"}
//                        value={props.typedMaxValue}
//                        onChange={props.inputOnChangeMaxValue}
//                        className={MaxValueInputClassName}/>
//             </div>
//         </div>
//     );
// };


