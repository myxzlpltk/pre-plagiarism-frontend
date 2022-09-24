import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
	return (
		<header className="bg-white sticky top-0 z-50">
			<div className="container mx-auto navbar py-4">
				<div className="navbar-start">
					<Link to="/" className="btn btn-ghost normal-case text-xl">
						<img src="/svg/logo.svg" alt="Logo" className="mr-2" />
						<span>Validasi</span>
					</Link>
				</div>
				<div className="navbar-end">
					<Link to="/login" className="btn btn-sm btn-primary">Masuk</Link>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
