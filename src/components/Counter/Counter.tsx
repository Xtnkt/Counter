import React, {ChangeEvent, useState} from 'react';
import {Button} from "../Buttons/UniversalButton";
import b from '../Buttons/Buttons.module.css';
import s from './Counter.module.css'
import {InputData} from "../InputData/InputData";
import {ScoreBoard} from "../SroreBoard/ScoreBoard";

export const Counter = () => {

    const [typedStartValue, setTypedStartValue] = useState<number>(0)
    const [typedMaxValue, setTypedMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(typedStartValue)
    const [maxValue, setMaxValue] = useState<number>(typedMaxValue)
    const [counterValue, setCounterValue] = useState<number>(startValue)
    const [errorState, setErrorState] = useState(false)

    const inputOnChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newTypedStartValue = Math.round(Number(e.currentTarget.value))
        setTypedStartValue(newTypedStartValue)
    }
    const inputOnChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newTypedMaxValue = Math.round(Number(e.currentTarget.value))
        setTypedMaxValue(newTypedMaxValue)
    }
    const onClickIncrementHandler = () => {
        let newCounterValue = counterValue + 1
        setCounterValue(newCounterValue)
    }
    const onClickLocalStorageValuesHandler = () => {
        let startValueAsString = localStorage.getItem('startValue')
        let maxValueAsString = localStorage.getItem('maxValue')
        if (startValueAsString && maxValueAsString){
            let startValue = JSON.parse(startValueAsString)
            let maxValue = JSON.parse(maxValueAsString)
           if  (startValue>=maxValue || startValue<0 || maxValue <0){
              setErrorState(true)
               setTypedMaxValue(maxValue)
               setStartValue(startValue)
               setTypedStartValue(startValue)
               setMaxValue(maxValue)
           }  else {
               setErrorState(false)
               setTypedMaxValue(maxValue)
               setStartValue(startValue)
               setTypedStartValue(startValue)
               setMaxValue(maxValue)
               setCounterValue(startValue)
           }
        }
    }
    const onClickSetHandler = () => {
        ((typedStartValue >= typedMaxValue) || typedStartValue < 0 || typedMaxValue < 0) ?
            setErrorState(true) :
            setErrorState(false)
        setStartValue(typedStartValue)
        setMaxValue(typedMaxValue)
        setCounterValue(typedStartValue)
        localStorage.setItem('startValue', JSON.stringify(typedStartValue))
        localStorage.setItem('maxValue', JSON.stringify(typedMaxValue))
    }
    const onClickResetHandler = () => {
        setCounterValue(startValue)
    }

    return (
        <div className={s.mainDiv}>
            <div className={s.inputDataAndSetButton}>
                <InputData inputOnChangeStartValue={inputOnChangeStartValue}
                           inputOnChangeMaxValue={inputOnChangeMaxValue}
                           errorState={errorState}
                           typedStartValue={typedStartValue}
                           typedMaxValue={typedMaxValue}
                           startValue={startValue}
                           maxValue={maxValue}

                />
                <div className={b.setButton}>
                    <Button className={b.button}
                            disabled={(startValue === typedStartValue) && (maxValue === typedMaxValue)}
                            name={'set'} callBack={onClickSetHandler}/>
                    <Button className={b.button + ' ' + b.storeButton}
                            name={'SavedValues'} callBack={onClickLocalStorageValuesHandler}/>
                </div>
            </div>
            <div className={s.buttonsAndScoreBoard}>
                <ScoreBoard counterValue={counterValue}
                            maxValue={maxValue}
                            errorState={errorState}
                />
                <div className={b.resetIncrementButtons}>
                    <Button className={b.button} disabled={(counterValue === maxValue) || (errorState)}
                            name={'increment'}
                            callBack={onClickIncrementHandler}/>
                    <Button className={b.button} disabled={(counterValue === typedStartValue) || (errorState)}
                            name={'reset'}
                            callBack={onClickResetHandler}/>
                </div>
            </div>
        </div>
    );
};

