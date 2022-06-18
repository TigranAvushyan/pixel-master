import http from "@/lib/server/http";
import { urls } from "@/lib/server/urls";
import { useRouter } from "next/router";
import React, { useState } from "react";


const Login = () => {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const router = useRouter();

  const submit = async () => {
    try {
      await http.post(urls.login(), { login, password });
      router.back();
    } catch (e) {
      setError("Логин или пароль неверный");
    }
  };


  return (
      <div className="container login d-flex justify-content-center align-items-center flex-column">
        <div className="form-outline mb-4">
          <input
              onChange={ (e) => setLogin(e.target.value) }
              value={ login }
              type="email"
              id="loginName"
              className="form-control"
          />
          <label className="form-label" htmlFor="loginName">Логин</label>
        </div>
        <div className="form-outline mb-4">
          <input
              onChange={ (e) => setPassword(e.target.value) }
              value={ password }
              type="password"
              id="password"
              className="form-control"
          />
          <label className="form-label" htmlFor="password">Пароль</label>
        </div>

        <button
            disabled={ !(login && password) }
            type="button"
            onClick={ submit }
            className="btn btn-primary btn-block w-25 mb-4">
          Войти
        </button>
        { error && <div className="alert alert-danger" role="alert">{ error }</div> }
      </div>
  );
};

export default Login;
