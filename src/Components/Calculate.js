import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'reactstrap';
import {
    ADD_OPERATOR,
    SUB_OPERATOR,
    MULTI_OPERATOR,
    DIVISON_OPERATOR
} from '../Actions/Action'

const Calculate = () => {
    const dispatch = useDispatch();
    const myState = useSelector((state) => state);

    const number = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    const [numb, setNumb] = useState("");
    const [currentKey, setCurrentkey] = useState("")


    const handleOnChangeValues = (num) => {
        let v = numb
        setNumb(v + num)
    }
    const showResult = () => {
        let merge = numb;
        const splitStr = merge.split(/[&\/\\#,+()$~%-.'":*?<>{}]/g);

        switch (currentKey) {
            case "plus":
                console.log(("dd"))
                dispatch({type: ADD_OPERATOR , payload:{numA: splitStr[0],numB: splitStr[1]}});
                break;

            case "sub":
                dispatch({type:SUB_OPERATOR, payload:{numA: splitStr[0],numB: splitStr[1]}});
                break;

            case "multiple":
                dispatch({type:MULTI_OPERATOR, payload:{numA: splitStr[0],numB: splitStr[1]}});
                break;

         default:
            dispatch({type:DIVISON_OPERATOR, payload:{numA: splitStr[0],numB: splitStr[1]}});
            break;
        }
    }

    return (
        <div>
            <h3>Calculate</h3>
            <div className="calculateWrapper">
                <div className='Wrapper'>
                    <div className='mt-2 calculateOptions'>
                        <div>
                            <div className='d-flex'>
                                <Input type="text"
                                    value={numb}
                                />
                                <button className="operationBtn"
                                    style={{ margin: '0 5px', width: '45%' }}
                                    onClick={() => setNumb('')}
                                >
                                    AC
                                </button>
                            </div>
                            <div className='numberOption'>
                                {number.map((num) => {
                                    return (
                                        <button className="calculateBtn"
                                            onClick={() => handleOnChangeValues(num)}
                                        >
                                            {num}
                                        </button>
                                    )
                                })}
                                <button className="calculateBtn">.</button>
                                <button className="calculateBtn" onClick={() => showResult()}>=</button>
                            </div>
                        </div>
                        <div className='buttonsGrp'>
                            <button className="operationBtn" onClick={()=> setNumb(numb.slice(0, -1))}>X</button>
                            <button className="operationBtn" onClick={() => {
                                handleOnChangeValues('+')
                                setCurrentkey( "plus" )
                            }}
                            >+</button>
                            <button className="operationBtn" onClick={() => {
                                handleOnChangeValues('/')
                                setCurrentkey( "divison" )
                            }}
                            >/</button>
                            <button className="operationBtn" onClick={() => {
                                handleOnChangeValues('*')
                                setCurrentkey("multiple" )
                            }}
                            >*</button>
                            <button className="operationBtn" onClick={() => {
                                handleOnChangeValues('-')
                                setCurrentkey("sub" )
                            }}
                            >-</button>
                        </div>
                    </div>
                    <h1>{myState}</h1>
                </div>
            </div>
        </div>
    )
}

export default Calculate;