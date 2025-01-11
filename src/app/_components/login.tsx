export function Login() {
  return (
    <>
      <form action="" method="post">
        <div>
          <label>
            ID:
            <input type="text" name="id" />
          </label>
        </div>
        <div>
          <label>
            PW:
            <input type="password" name="password" />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
