import { useState } from "react";
export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();

    console.log(email, password);
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>SignUp</h1>
      <div className="form-group">
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div>
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Sign Up</button>
    </form>
  );
};
