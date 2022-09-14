
// export const getUserId = () => () =>
// axios
//   .get(`/api/users/getID`)
//   .then(({ data }) => {
//     if (data) localStorage.setItem("userId", data);
//   })
//   .catch((error) => {
//     console.log("get user id error", error);
//     if (error.response && error.response.data) {
//       const errorMsg = error.response.data.error;
//       triggerNotifier({ type: "error", message: errorMsg });
//       setTimeout(() => {
//         signOut();
//       }, 10000);
//     }
//   });

// export const getCompanies = (id, history) => (dispatch) => {
// dispatch({ type: GET_COMPANIES_BEGIN });
// return axios
//   .get(`/api/users/createWorkOrderCompanies`)
//   .then(({ data }) => {
//     if (data.length === 0) {
//       history.push("/workorders");
//     }
//     dispatch(actions.setCompanyData(data));
//   })
//   .catch((error) => {
//     console.log("get work orders error", error);
//     dispatch(actions.setCompanyError(error));
//   });
// };

// export const getAccessVisibilty = () => (dispatch) => {
// dispatch({ type: SET_USER_TYPE_LOADING });
// return axios
//   .get(`/api/visibility`)
//   .then(({ data }) => {
//     if (data) dispatch(actions.setUserType(data));
//   })
//   .catch((error) => {
//     console.log("error", error);
//     dispatch({ type: SET_USER_TYPE_LOADING });
//   });
// };

// export const getProfileDetails = () => (dispatch) => {
// dispatch({ type: SET_USER_PROFILE_LOADING });
// return axios
//   .get(`api/user`)
//   .then(({ data }) => {
//     if (data) {
//       dispatch(actions.setUserProfile(data));
//       return { success: true, data: data };
//     }
//   })
//   .catch((error) => {
//     dispatch({ type: SET_USER_PROFILE_LOADING });
//     console.log("get profile error", error);
//   });
// };