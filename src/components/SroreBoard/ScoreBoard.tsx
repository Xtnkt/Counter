import React from 'react';
import s from './ScoreBoard.module.css'

type ScoreBoardPropsType = {
    counterValue: number,
    maxValue: number,
    errorState: boolean
}

export const ScoreBoard = (props: ScoreBoardPropsType) => {
    const ScoreBoardValue = () => {
        return (
            props.errorState ?
                <div className={s.scoreBoardRed}>
                    Incorrect Values!
                </div>
                : (props.counterValue < props.maxValue) ?
                    <div className={s.scoreBoard}>{props.counterValue}</div> :
                    <div className={s.scoreBoardRed}>{props.counterValue}</div>

        )
    }
    return (
        <div>
            {ScoreBoardValue()}
        </div>
    );
};

