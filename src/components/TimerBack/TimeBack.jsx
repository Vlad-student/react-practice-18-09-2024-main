import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {parseISO} from 'date-fns';



const TimeBack = (props) => {
    const { title, dateStr} =props;
    const date = parseISO(dateStr);
    const [timeleftover, setTimeLeftover] = useState('');

useEffect(() => {
    const idInterval = setInterval (() => {

    }, 1000)
    return () => {
        clearInterval (idInterval);
    };
}, []);


    return (
        <div>
            <h2>timer back to {title} </h2>
            <h2>{dateStr}</h2>
            <h2> leftover : {timeleftover}</h2>
        </div>
    );
};


TimeBack.propTypes = {
title: PropTypes.string,
dateStr: PropTypes.string,
};


export default TimeBack;
