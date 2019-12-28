export const state = () => ({
  authenticated: false
});

export const mutations = {
  signIn(state) {
    state.authenticated = true;
  },

  signOut(state) {
    state.authenticated = false;
  }
};
