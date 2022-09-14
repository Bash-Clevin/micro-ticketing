export default () => {
  return (
    <form>
      <h1>SignUp</h1>
      <div className="form-group">
        <label>Email</label>
        <input className="form-control" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" className="form-control" />
      </div>
    </form>
  );
};
