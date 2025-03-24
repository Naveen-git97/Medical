import store from "..";
import { onSignOutSuccess } from "./sessionSlice";
import { userLoggedOut } from "./userSlice";

export const signOutGlobally = () => {
  try {
    // Clear local storage
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    localStorage.removeItem("isPasswordExpiryIn2Days");
    // localStorage.removeItem("remainDays");
    localStorage.removeItem("isLogin");

    store.dispatch(onSignOutSuccess());
    store.dispatch({ type: "reset" });

    return {
      status: "success",
      message: "Successfully logged out",
    };
  } catch (errors) {
    return {
      status: "failed",
      message: errors?.response?.data || errors.toString(),
    };
  }
};
