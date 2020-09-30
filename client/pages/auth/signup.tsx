import { useState } from "react";
import axios from "axios";
const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		axios
			.post("http://localhost:3001/api/users/signup", {
				email,
				password,
			})
			.then(e => console.log(e))
			.catch(e => console.log(e.response.data));
	};

	return (
		<div style={{ padding: "40px" }}>
			<form onSubmit={onSubmit}>
				<h1>Sign Up</h1>
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
					<label>Password</label>
					<input
						type="passwod"
						value={password}
						onChange={handlePasswordChange}
						className="form-control"
					/>
				</div>
				<button className="btn btn-primary">Sign Up</button>
			</form>
		</div>
	);
};
export default SignUp;
