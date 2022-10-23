import React, {ChangeEvent} from 'react';
import s from './InputData.module.css'

type InputDataPropsType = {
    inputOnChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void,
    inputOnChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void,
    errorState: boolean,
    typedStartValue: number,
    typedMaxValue: number,
    startValue: number,
    maxValue: number
}

export const InputData = (props: InputDataPropsType) => {
    const StartValueInputClassName = s.input
        + (((props.errorState) || (props.startValue < 0)) ? ' ' + s.errorInput : ' ' + s.superInput)
    const MaxValueInputClassName = s.input
        + (((props.errorState) || (props.maxValue < 0)) ? ' ' + s.errorMaxInput : ' ' + s.superMaxInput)
    return (
        <div className={s.motherDiv}>
            <div className={s.startValueInput}>
                <div>
                    StartValue:
                </div>
                <input type={"number"}
                       value={props.typedStartValue}
                       onChange={props.inputOnChangeStartValue}
                       className={StartValueInputClassName}/>
            </div>
            <div className={s.maxValueInput}>
                <div>
                    MaxValue:
                </div>
                <input type={"number"}
                       value={props.typedMaxValue}
                       onChange={props.inputOnChangeMaxValue}
                       className={MaxValueInputClassName}/>
            </div>
        </div>
    );
};

