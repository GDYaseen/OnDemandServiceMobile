import React from "react";

const Contexter = React.createContext({
  nav: null,
  bottomPopup: null,
  setLoadingActive: null,
  token: null,
  currentUser: null,
  categories:null,
  userType:null
});

export default Contexter;
