import React from 'react';
import s from './ScoreBoard.module.css'
import {useSelector} from "react-redux";
import {CounterRootStateType} from "../../store/store";
import {ReducerStateType} from "../../store/counter-reducer";
import {counterSelector} from "../../store/selector/counterSelector";


export const ScoreBoard = (props: any) => {
    const counterStore = useSelector<CounterRootStateType, ReducerStateType>(counterSelector)
    const ScoreBoardValue = () => {
        return (
            counterStore.error ?
                <div className={s.scoreBoardRed}>
                    Incorrect Values!
                </div>
                : (counterStore.counterValue < counterStore.maxValue) ?
                    <div className={s.scoreBoard}>{counterStore.counterValue}</div> :
                    <div className={s.scoreBoardRed}>{counterStore.counterValue}</div>
        )
    }
    return (
        <div>
            {ScoreBoardValue()}
        </div>
    );
};
// type ScoreBoardPropsType = {
//     counterValue: number,
//     maxValue: number,
//     errorState: boolean
// }
//
// export const ScoreBoard = (props: ScoreBoardPropsType) => {
//     const ScoreBoardValue = () => {
//         return (
//             props.errorState ?
//                 <div className={s.scoreBoardRed}>
//                     Incorrect Values!
//                 </div>
//                 : (props.counterValue < props.maxValue) ?
//                     <div className={s.scoreBoard}>{props.counterValue}</div> :
//                     <div className={s.scoreBoardRed}>{props.counterValue}</div>
//         )
//     }
//     return (
//         <div>
//             {ScoreBoardValue()}
//         </div>
//     );
// };

