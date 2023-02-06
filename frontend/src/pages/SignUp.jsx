import Header from "@components/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleForm = (e) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      email,
      firstname,
      lastname,

      password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };
    e.preventDefault();
    // on créé et on redirige
    fetch("http://localhost:5000/register", requestOptions)
      .then(() => {
        navigate("/login");
      })
      .catch(console.error);
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="mt-[25vh]">
        <form
          onSubmit={handleForm}
          style={{ width: "18rem" }}
          className="m-auto mt-5 border p-3 bg-main rounded-[0.75rem]"
        >
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">
              First Name
            </label>
            <input
              onChange={(e) => setFirstname(e.target.value)}
              type="firstname"
              className="form-control"
              id="firstname"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">
              Lastname
            </label>
            <input
              onChange={(e) => setLastname(e.target.value)}
              type="lastname"
              className="form-control"
              id="lastname"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="password"
            />
          </div>
          <button type="submit" className="btn border bg-white focus:bg-main">
            Inscription
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
