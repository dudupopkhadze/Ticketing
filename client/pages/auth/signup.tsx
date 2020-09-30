import { useState } from "react";
import { RefactorActionInfo } from "typescript";

export default () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailChange = e => {
		setEmail(e.targer.value);
	};

	const handlePasswordChange = e => {
		setPassword(e.targer.value);
	};

	const onSubmit = e => {
		e.preventDefault();
		console.log({ email, password });
	};

	return (
		<form onSubmit={onSubmit}>
			<div className="form-group">
				<label>Email Address</label>
				<input
					type="email"
					value={email}
					onChange={handleEmailChange}
					className="form-control"
				/>
			</div>
			<div className="form-group">
				<label>Email Address</label>
				<input
					type="email"
					value={password}
					onChange={handlePasswordChange}
					className="form-control"
				/>
			</div>
			<button className="btn btn-primary">Sign Up</button>
		</form>
	);
};
