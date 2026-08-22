function Login() {
  return (
    <div>
      <h1>Dayflow</h1>
      <h2>Employee Login</h2>

      <form>
        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;