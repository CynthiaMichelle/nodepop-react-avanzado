import {
  advertsLoadedSuccess,
  authLogin,
  authLoginRequest,
  authLoginSuccess,
} from "../actions";
import { ADVERTS_LOADED_SUCCESS } from "../types";

// test accion sincrona
test('Devolver acción "ADVERTS_LOADED_SUCCESS"', () => {
  const adverts = "adverts";
  const expectedAction = {
    type: ADVERTS_LOADED_SUCCESS,
    payload: adverts,
  };
  const action = advertsLoadedSuccess(adverts);
  expect(action).toEqual(expectedAction);
});


// Test acción asincrona
describe("authLogin", () => {
  const credentials = "credentials";
  const action = authLogin(credentials);
  const dispatch = jest.fn();
  const api = {
    auth: {},
  };
  describe("Se resuelve login api", () => {
    test("Sigue el flujo de inicio de sesión", async () => {
      api.auth.login = jest.fn().mockResolvedValue();
      await action(dispatch, undefined, { api });
      expect(dispatch).toHaveBeenNthCalledWith(1, authLoginRequest());
      expect(api.auth.login).toHaveBeenCalledWith(credentials);
      expect(dispatch).toHaveBeenNthCalledWith(2, authLoginSuccess());
    });
  });
});
