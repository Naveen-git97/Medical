import appConfig from "configs/app.config";
import { queryOmsService } from "services/apiService";

const getFeeTypes = async () => {
  const requestParams = {
    method: "GET",
    url: appConfig.api.invoiceFeeTypes,
  };
  return await queryOmsService(requestParams);
};

const GetFeeTypesService = {
  getFeeTypes,
};

export default GetFeeTypesService;
