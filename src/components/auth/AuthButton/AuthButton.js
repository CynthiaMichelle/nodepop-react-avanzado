import { Link } from "react-router-dom";
import T from "prop-types";
import { ConfirmationButton } from "../../common";
import { useDispatch, useSelector } from "react-redux";
import { getIsLogged } from "../../../store/selectors";
import { authLoginFailure, authLogout } from "../../../store/actions";

const AuthButton = () => {
  const isLogged = useSelector(getIsLogged);
  const dispatch = useDispatch();

  const handleLogoutConfirm = () => {
    try {
      dispatch(authLogout());
    } catch (error) {
      dispatch(authLoginFailure(error));
    }
  };

  return isLogged ? (
    <ConfirmationButton
      confirmation="Are you sure?"
      onConfirm={handleLogoutConfirm}
    >
      Logout
    </ConfirmationButton>
  ) : (
    <Link to="/login">Login</Link>
  );
};

AuthButton.propTypes = {
  handleLogout: T.func,
  isLogged: T.bool,
};

AuthButton.defaultProps = {
  isLogged: false,
};

/* const ConnectedAuthButton = props => (
  auth => <AuthButton {...auth} {...props} />
); */

export default AuthButton;
