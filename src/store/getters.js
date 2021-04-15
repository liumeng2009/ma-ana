const getters = {
  token: state => state.user.token,
  roles: state => state.user.roles,
  userInfo: state => state.user.info,
  addRoutes: state => state.user.addRoutes
};

export default getters;
