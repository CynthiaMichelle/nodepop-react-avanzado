import {
  authLogin,
  authLogout,
} from "../actions";
import { auth, defaultState} from "../reducers";

describe("auth", () => {
  test('Administrar la acción "AUTH_LOGIN_SUCCESS"', () => {
    const state = true;
    const action = authLogin();
    const result = auth(state, action);
    expect(result).toBe(true);
  });
  test('Administrar la acción "AUTH_LOGOUT', () => {
    const state = false;
    const action = authLogout();
    const result = auth(state, action);
    expect(result).toBe(false);
  });
  test('Gestionar cualquier acción', () => {
    const state = undefined;
    const action = { type: "ANY" };
    const result = auth(state, action);
    expect(result).toBe(defaultState.auth);
  });
});


