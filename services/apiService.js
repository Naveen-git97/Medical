import axios from "axios";
import axiosRetry from "axios-retry";
import appConfig from "configs/app.config";

let omsServiceAxiosInstance = null;

let cancelTokenSource = {};

let SESSION_ERROR_STATUS = [419, 498];

const createOmsServiceClient = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  // if (omsServiceAxiosInstance) {
  //   return omsServiceAxiosInstance;
  // }

  omsServiceAxiosInstance = axios.create({
    baseURL: appConfig.api.domain,
    timeout: appConfig.api.timeout,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  // Add response interceptor for 401 handling
  omsServiceAxiosInstance.interceptors.response.use(
    (response) => {
      onSnipResponse(response);
      return Promise.resolve(response); // Resolve the promise with the response;
    },
    (error) => {
      onSnipError(error);
      return Promise.reject(error);
    }
  );

  axiosRetry(omsServiceAxiosInstance, { retries: appConfig.api.retry });
  return omsServiceAxiosInstance;
};

const createOmsServiceClientForPDF = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  omsServiceAxiosInstance = axios.create({
    baseURL: appConfig.api.domain,
    timeout: appConfig.api.timeout,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/pdf",
      Authorization: token,
    },
    responseType: "arraybuffer", // Set the response type to "arraybuffer"
  });

  // Add response interceptor for 401 handling
  omsServiceAxiosInstance.interceptors.response.use(
    (response) => {
      onSnipResponse(response);
      return Promise.resolve(response); // Resolve the promise with the response;
    },
    (error) => {
      onSnipError(error);
      return Promise.reject(error);
    }
  );

  axiosRetry(omsServiceAxiosInstance, { retries: appConfig.api.retry });
  return omsServiceAxiosInstance;
};

const onSnipResponse = (response) => {
  if (response?.headers?.refreshtoken) {
    localStorage.setItem(
      "token",
      JSON.stringify(response?.headers?.refreshtoken)
    );
  }
};

const onSnipError = (error) => {
  if (error.response && SESSION_ERROR_STATUS.includes(error.response.status)) {
    // Import and use the global signout function
    import("../store/auth/authStore").then(({ signOutGlobally }) => {
      signOutGlobally();
    });
  }
};

export const invokeOmsService = async (requestParams) => {
  const client = createOmsServiceClient();
  // TODO - Add authentication token

  console.debug("Request Params for axios", requestParams);
  try {
    const response = await _invokeAxios(client, requestParams);
    return response;
  } catch (error) {
    throw error;
  }
};

export const invokeOmsServiceForPDF = async (requestParams) => {
  const client = createOmsServiceClientForPDF();
  // TODO - Add authentication token

  console.debug("Request Params for axios", requestParams);
  try {
    const response = await _invokeAxios(client, requestParams);
    return response;
  } catch (error) {
    throw error;
  }
};

export const queryOmsService = async (requestParams) => {
  const response = await invokeOmsService(requestParams);

  if (response.status === 200) {
    return response.data;
  }
  if (response.status === 404) {
    return [];
  }
  throw new Error("Error in querying OMS service");
};

export const uploadFile = async (fileBlobUrl, omsUrl) => {
  const client = createOmsServiceClient();
  const fileUploadFormData = new FormData();
  if (fileBlobUrl instanceof File) {
    fileUploadFormData.append("file", fileBlobUrl);
  } else {
    const blob = await fetch(fileBlobUrl).then((response) => response.blob());
    fileUploadFormData.append("file", blob);
  }
  return await client.post(omsUrl, fileUploadFormData, {});
};

const _invokeAxios = async (client, requestParams) => {
  requestParams.method = requestParams.method || "GET";
  if (requestParams.method.toLowerCase() === "post") {
    return await client.post(requestParams.url, requestParams.body);
  }
  if (requestParams.method.toLowerCase() === "put") {
    return await client.put(requestParams.url, requestParams.body);
  }
  if (requestParams.method.toLowerCase() === "patch") {
    return await client.patch(requestParams.url, requestParams.body);
  }
  if (requestParams.method.toLowerCase() === "delete") {
    return await client.put(requestParams.url, requestParams.body);
  }
  if (requestParams.method.toLowerCase() === "strict_delete") {
    return await client.delete(requestParams.url, requestParams.body);
  }
  return await client.get(requestParams.url);
};

// const _invokeAxios = async (client, requestParams) => {
//   // Cancel the previous request if it exists
//   if (cancelTokenSource[requestParams.url]) {
//     cancelTokenSource[requestParams.url].cancel('Operation canceled due to new request.');
//   }

//   // Create a new CancelToken source
//   cancelTokenSource[requestParams.url] = axios.CancelToken.source();

//   // Attach the CancelToken to the request parameters
//   requestParams.cancelToken = cancelTokenSource[requestParams.url].token;

//   // Set default method to GET if not provided
//   requestParams.method = requestParams.method || "GET";

//   try {
//     if (requestParams.method.toLowerCase() === "post") {
//       return await client.post(requestParams.url, requestParams.body, { cancelToken: cancelTokenSource[requestParams.url].token });
//     }
//     if (requestParams.method.toLowerCase() === "put") {
//       return await client.put(requestParams.url, requestParams.body, { cancelToken: cancelTokenSource[requestParams.url].token });
//     }
//     if (requestParams.method.toLowerCase() === "patch") {
//       return await client.patch(requestParams.url, requestParams.body, { cancelToken: cancelTokenSource[requestParams.url].token });
//     }
//     if (requestParams.method.toLowerCase() === "delete") {
//       return await client.put(requestParams.url, requestParams.body, { cancelToken: cancelTokenSource[requestParams.url].token });
//     }
//     if (requestParams.method.toLowerCase() === "strict_delete") {
//       return await client.delete(requestParams.url, { cancelToken: cancelTokenSource[requestParams.url].token, data: requestParams.body });
//     }
//     return await client.get(requestParams.url, { cancelToken: cancelTokenSource[requestParams.url].token });
//   } catch (error) {
//     if (axios.isCancel(error)) {
//       return Promise.reject({ message: 'Operation canceled due to new request.' });
//     }
//     else {
//       return Promise.reject(error);
//     }
//   }
// };
