import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import Room from './room/Room';

const Rooms = ({ people, rooms }) => {
    const [distribution, setDistribution] = useState([]);

    useEffect(() => {
        // console.log(distribution);
    }, [distribution]);

    const countReducer = (array, key) => array.reduce((r, a) => r + a[key], 0);

    const ifPeopleFilled = () => {
        const adultSum = countReducer(distribution, 'adult');
        const childSum = countReducer(distribution, 'child');
        if (adultSum + childSum >= people) {
            return true;
        }
        return false;
    }
    return (
        rooms.map((room, index) => <Room
            key={index}
            room={room}
            order={index}
            people={people}
            distribution={distribution}
            setDistribution={setDistribution}
            disabled={ifPeopleFilled()}
        />)
    )
}

Rooms.propTypes = {
    people: PropTypes.number,
    rooms: PropTypes.arrayOf(PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
    })),
};

export default Rooms;

