import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

const MethodCard = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={classNames("card cursor-pointer inline-block m-1", {
        "bg-white/10 border border-white/20": props.active,
        "hover:bg-white/5 border border-white/0": !props.active,
      })}
    >
      <div className="card-body px-4 py-1">
        <h3 className="text-md font-bold">{props.title}</h3>
      </div>
    </div>
  );
};

MethodCard.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default MethodCard;
