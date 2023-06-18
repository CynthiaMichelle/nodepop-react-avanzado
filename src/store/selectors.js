export const getIsLogged = (state) => state.auth;

export const whoIsLogged = (state) => state.user.data;

export const getStateAdverts = (state) => state.adverts.data;

export const areAdvertsLoaded = (state) => state.adverts.areLoaded;

export const getAdvert = (advertId) => (state) =>
  getStateAdverts(state).find((advert) => advert.id.toString() === advertId);

export const getUIstate = (state) => state.ui;

export const getStateTags = (state) => state.tags.data;
export const areTagsLoaded = (state) => state.tags.areLoaded;
