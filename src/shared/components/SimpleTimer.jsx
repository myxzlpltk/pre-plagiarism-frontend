import moment from "moment";
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useRef } from "react";

const calculateDuration = (time) =>
  moment.duration(Math.max(moment().unix() - time, 0), "seconds");

const SimpleTimer = (props) => {
  const [duration, setDuration] = React.useState(calculateDuration(props.time));
  const timerRef = useRef(0);
  const timerCallback = useCallback(() => {
    setDuration(calculateDuration(props.time));
  }, [props.time]);

  useEffect(() => {
    timerRef.current = setInterval(timerCallback, props.interval ?? 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [props.interval, timerCallback]);

  const { days, hours, minutes, seconds } = duration._data;

  return (
    <span>
      {[
        days > 0 && `${days} hari`,
        hours > 0 && `${hours} jam`,
        minutes > 0 && `${minutes} menit`,
        seconds > 0 && `${seconds} detik`,
      ]
        .filter(Boolean)
        .join(" ")}
    </span>
  );
};

SimpleTimer.propTypes = {
  time: PropTypes.number.isRequired,
  interval: PropTypes.number,
};

export default SimpleTimer;
