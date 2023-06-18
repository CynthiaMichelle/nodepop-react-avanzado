import { getAdvert, getIsLogged, getStateTags } from "../selectors";

describe("getAdvert", () => {
  test("Devolver anuncio por su id", () => {
    const advertId = "1";
    const adverts = [{ id: advertId }];
    const state = { adverts: { data: adverts } };
    expect(getAdvert(advertId)(state)).toBe(adverts[0]);
  });
});

test("Devolver tags", () => {
  const tags = ["lifestyle", "mobile", "motor", "work"];
  const state = { tags: { data: tags } };
  expect(getStateTags(state)).toEqual(["lifestyle", "mobile", "motor", "work"]);
});

describe("Estar registrado", () => {
  test('Should return "false"', () => {
    const state = { auth: false };
    const result = getIsLogged(state);
    expect(result).toBe(state.auth);
  });
});
