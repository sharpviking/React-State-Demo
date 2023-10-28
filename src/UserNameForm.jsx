import { useState } from "react";
function UsernameForm() {
  const [username, setUsername] = useState("Anand");
  const updateUsername = (evt) => {
    setUsername(evt.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={updateUsername}
      ></input>
      <button>Submit</button>
    </div>
  );
}

export default UsernameForm;
