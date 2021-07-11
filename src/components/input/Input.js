import React, { useState, useEffect } from 'react';
import Button from '../button/Button';
import './Input.css';

export default function Input({ roomPeople, name, setInput, disabled }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setInput((preState) => ({
            ...preState,
            [name]: count,
        }));
    }, [count]);

    const inputHandler = (event) => {
        setCount(Number(event.target.value));
    }

    const incrementCounter = () => {
        if (disabled || count >= roomPeople.max) return;
        setCount(preState => preState + 1);
    };
    
    const decrementCounter = () => {
        if (count <= 0) return;
        setCount(preState => preState - 1);
    };

    const handleClick = (e) => {
        switch (e.target.className) {
            case 'increase':
                incrementCounter();
                break;
            case 'decrease':
                decrementCounter();
                break;
            default:
                return;
        };
    };

    return (
        <>
            <Button
                name={'decrease'}
                symbol={'-'}
                handleClick={handleClick}
            />
            <input
                className="input"
                type="number"
                name={name}
                step={1}
                value={count}
                min={0}
                max={roomPeople.max || disabled}
                onChange={inputHandler}
            />
            <Button
                name={'increase'}
                symbol={'+'}
                handleClick={handleClick}
            />
        </>
    )
}
