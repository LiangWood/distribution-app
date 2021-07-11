import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Input from '../input/Input';
import './Room.css';

export default function Room({ room, order, setDistribution, distribution, disabled }) {
    const [input, setInput] = useState({
        adult: 0,
        child: 0,
    });

    useEffect(() => {
        const handleDistribution = () => {
            const arr = [...distribution];
            arr.splice(order, 1, input)
            setDistribution(arr);
        };
        handleDistribution();
    }, [input])

    return (
        <>
        <div className={(order !== 0) ? 'divider' : ''}></div>
            <div className="people">
                <div className="people__title">房間: { input.adult + input.child }人</div>
                <div className="people__wrapper">
                    <div className="people__adult">
                        <div className="people__adult--title">
                            大人
                            <span>年齡20+</span>
                        </div>
                    </div>
                    <div className="people__input">
                        <Input
                            roomPeople={room}
                            name={'adult'}
                            setInput={setInput}
                            disabled={disabled}
                        />
                    </div>
                </div>
                <div className="people__wrapper">
                    <div className="people__child">
                        <div className="people__child--title">
                            小孩
                            <span>年齡0+</span>
                        </div>
                    </div>
                    <div className="people__input">
                        <Input
                            roomPeople={room}
                            name={'child'}
                            setInput={setInput}
                            disabled={disabled}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

Room.propTypes = {
    handleDistribution: PropTypes.func,
};
