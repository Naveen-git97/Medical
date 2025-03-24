import appConfig from "configs/app.config";
import { invokeOmsService } from "./apiService";

export async function apiGetStripeAccountDetails(accountId) {
  const requestParams = {
    method: "GET",
    url: `${appConfig.stripe.getAccountDetails}?accountId=${accountId}`
  };
  return await invokeOmsService(requestParams);
}

export async function apiSendStripeRefreshAccountLinkEmail(accountId, email, doctorFacilityId, UserId) {
  const requestParams = {
    method: "POST",
    url: appConfig.stripe.sendRefreshAccountLinkEmail,
    body: {accountId, email, doctorFacilityId, UserId},
  };
  return await invokeOmsService(requestParams);
}
