// import ApiService from './apiService'

import appConfig from "configs/app.config";
import { invokeOmsService } from "./apiService";

export async function apiSignIn(data) {
  const requestParams = {
    method: "POST",
    url: appConfig.auth.login,
    body: data,
  };
  return await invokeOmsService(requestParams);
}

export async function apiSignUp(data) {
  let requestParams = {};
  if (data.userRoleId == 1) {
    requestParams = {
      method: "POST",
      url: appConfig.auth.signup,
      body: data,
    };
  } else {
    requestParams = {
      method: "POST",
      url: appConfig.newera.addCompany,
      body: data,
    };
  }
  return await invokeOmsService(requestParams);
}

export async function apiSendOtp(data) {
  const requestParams = {
    method: "POST",
    url: appConfig.auth.sendOTP,
    body: data,
  };
  return await invokeOmsService(requestParams);
}

export async function apiForgotPassword(data) {
  const requestParams = {
    method: "POST",
    url: appConfig.auth.forgotPassword,
    body: data,
  };
  return await invokeOmsService(requestParams);
}

export async function apiResetPassword(data) {
  const requestParams = {
    method: "POST",
    url: appConfig.auth.resetPassword,
    body: data,
  };
  return await invokeOmsService(requestParams);
}

export async function apiVerifyEmail(data) {
  const requestParams = {
    method: "POST",
    url: appConfig.auth.verifyEmail,
    body: data,
  };
  return await invokeOmsService(requestParams);
}

export async function apiIsEmailExists(data) {
  const requestParams = {
    method: "POST",
    url: appConfig.auth.isEmailExists,
    body: data,
  };
  return await invokeOmsService(requestParams);
}

export async function verifyUniqeTokenForSetPassword(data) {
  const requestParams = {
    method: "POST",
    url: appConfig.auth.verifyToken,
    body: data,
  };
  return await invokeOmsService(requestParams);
}

export async function setDoctorFacilityPassword(data) {
  const requestParams = {
    method: "POST",
    url: appConfig.auth.setPassword,
    body: data,
  };
  return await invokeOmsService(requestParams);
}
