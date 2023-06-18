import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { authLogin, uiResetError } from "../../../store/actions";
import { getUIstate } from "../../../store/selectors";

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getUIstate);
  const handleResetError = () => dispatch(uiResetError());

  const handleSubmit = async (credentials) => {
    await dispatch(authLogin(credentials));
    const from = location.state?.from?.pathname || "/";
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h1>Log In</h1>
      <LoginForm onSubmit={handleSubmit} isLoading={isLoading} />
      {isLoading && <p>...login in nodepop </p>}
      {error && (
        <div onClick={handleResetError} style={{ color: "red" }}>
          {error.message}
        </div>
      )}
    </div>
  );
}

export default LoginPage;
