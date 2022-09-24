import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

const MethodCard = (props) => {
	return (
		<div
			onClick={props.onClick}
			className={classNames(
				"card cursor-pointer rounded-r-none",
				{
					"bg-white/10 border border-white/20 border-r-0": props.active,
					"hover:bg-white/5 border border-white/0 border-r-0": !props.active,
				},
			)}>
			<div className="card-body py-6">
				<h3 className="card-title">{props.title}</h3>
				<p>{props.description}</p>
			</div>
		</div>
	);
};

MethodCard.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	active: PropTypes.bool,
	onClick: PropTypes.func,
};

export default MethodCard;
