import appConfig from "configs/app.config";
import { invokeOmsService } from "./apiService";

export async function apiContactUs(data) {
    const requestParams = {
      method: "POST",
      url: appConfig.websiteOpenServices.contactUs,
      body: data,
    };
    return await invokeOmsService(requestParams); 
}