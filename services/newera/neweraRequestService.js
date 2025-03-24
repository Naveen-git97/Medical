import appConfig from "configs/app.config";
import { invokeOmsService, queryOmsService } from "services/apiService";

// GET DOCTOR FACILITY LIST API
const getDoctorFacilityList = async (userType='') => {
  let url= appConfig.newera.getDoctorFacilityList;
  if(userType){
    url = appConfig.newera.getUsersByType.replace('{userType}', userType);
  }
  const requestParams = {
    method: "GET",
    url
  };
  return await queryOmsService(requestParams);
};
const getBackOfficeAddress=async(value)=>{
  const requestParams = {
    method: "GET",
    url: appConfig.newera.getBackOfficeAddress.replace('{orgId}',value),
  };
  return await queryOmsService(requestParams);
}
//ADD DOCTOR FACILITY API
const addDoctorFacility = async (bodyData) => {
  const requestParams = {
    method: "POST",
    url: appConfig.newera.addDoctorFacility,
    body: bodyData,
  };
  return await invokeOmsService(requestParams);
};

//UPDATE DOCTOR FACILITY DETAILS API
const updateDoctorFacilityDetails = async (bodyData) => {
  const requestParams = {
    method: "PATCH",
    url: appConfig.newera.updateDoctorFacility,
    body: bodyData,
    };
  return await invokeOmsService(requestParams);
};  

// ADD SERVICES LIST 
const addServiceList = async (bodyData) => {
  const requestParams = {
    method: "POST",
    url: appConfig.api.admin.addServiceFee,
    body: bodyData,
  };
  return await invokeOmsService(requestParams);
};

// ADD RECORD LIST 
const addRecordList = async (bodyData) => {
  const requestParams = {
    method: "POST",
    url: appConfig.api.admin.addRecordList,
    body: bodyData,
  };
  return await invokeOmsService(requestParams);
};

// ADD RECORD LIST 
const addRequestList = async (bodyData) => {
  const requestParams = {
    method: "POST",
    url: appConfig.api.admin.addRequestList,
    body: bodyData,
  };
  return await invokeOmsService(requestParams);
};

// UPDATE RECORD LIST 
const updateRecordList = async (bodyData) => {
  const requestParams = {
    method: "PATCH",
    url: appConfig.api.admin.addRecordList,
    body: bodyData,
  };
  return await invokeOmsService(requestParams);
};

// UPDATE REQUEST LIST 
const updateRequestList = async (bodyData) => {
  const requestParams = {
    method: "PATCH",
    url: appConfig.api.admin.addRequestList,
    body: bodyData,
  };
  return await invokeOmsService(requestParams);
};


// ADD Xraybodyparts LIST 
const addXrayBodyParts = async (bodyData) => {
  const requestParams = {
    method: "POST",
    url: appConfig.newera.addxraybodyparts,
    body: bodyData,
  };
  return await invokeOmsService(requestParams);
};

// Update Xraybodyparts  
const updateXrayBodyParts = async (bodyData) => {
  const requestParams = {
    method: "PATCH",
    url: appConfig.newera.addxraybodyparts,
    body: bodyData,
  };
  return await invokeOmsService(requestParams);
};


// ADD XrayCategories 
const addXrayCategories = async (bodyData) => {
  const requestParams = {
    method: "POST",
    url: appConfig.newera.addXrayCategories,
    body: bodyData,
  };
  return await invokeOmsService(requestParams);
};

// Update XrayCategories  
const updateXrayCategories = async (bodyData) => {
  const requestParams = {
    method: "PATCH",
    url: appConfig.newera.addXrayCategories,
    body: bodyData,
  };
  return await invokeOmsService(requestParams);
};

// Update service 
const updateServiceFee = async (bodyData) => {
  const requestParams = {
    method: "POST",
    url: appConfig.api.admin.updateServiceFee,
    body: bodyData,
  };
  return await invokeOmsService(requestParams);
};

// GET ALL SERVICE LIST
const getAllServiceList = async () => {
  var ProcessingOrgId = JSON.parse(localStorage.getItem("userData"))?.userOrgId;
  const requestParams = {
    method: "GET",
    url: appConfig.api.admin.getAllServiceList+`?ProcessingOrgId=${ProcessingOrgId}`,
  };
  return await queryOmsService(requestParams);
};

// GET ALL INVOICES LIST
const getAllinvoices = async () => {
  var ProcessingOrgId = JSON.parse(localStorage.getItem("userData"))?.userOrgId;
  const requestParams = {
    method: "GET",
    url: appConfig.api.admin.getAllinvoices+`?ProcessingOrgId=${ProcessingOrgId}`,
  };
  return await queryOmsService(requestParams);
};

// GET ALL XRAY BODY PARTS LIST
const getAllXrayBodyParts = async () => {
  var ProcessingOrgId = JSON.parse(localStorage.getItem("userData"))?.userOrgId;
  const requestParams = {
    method: "GET",
    url: appConfig.api.getXrayBodyParts+`?ProcessingOrgId=${ProcessingOrgId}`,
  };
  return await queryOmsService(requestParams);
};

// GET ALL XRAY CATEGORIES PARTS LIST
const getAllXrayCategories = async () => {
  const requestParams = {
    method: "GET",
    url: appConfig.api.getXrayCategories,
  };
  return await queryOmsService(requestParams);
};


const updateCompanyUserDetails = async (bodyData) => {
  const requestParams = {
    method: "PATCH",
    url: appConfig.newera.updateCompanyUserDetails.replace("{requestId}", bodyData.id),
    body: bodyData,
    };
  return await invokeOmsService(requestParams);
};  
    
const updateProfessionalDetails = async (bodyData) => {
  const requestParams = {
    method: "PATCH",
    url: appConfig.newera.updateprofessionaldetails.replace("{requestId}", bodyData.id),
    body: bodyData,
    };
  return await invokeOmsService(requestParams);
};  
//ADD COMPANY API
const addCompany = async (bodyData) => {
  const requestParams = {
    method: "POST",
    url: appConfig.newera.addCompanyUser,
    body: bodyData,
  };
  return await invokeOmsService(requestParams);
};

//ADD COMPANY USER API
// const addCompanyUser = async (bodyData) => {
//   const requestParams = {
//     method: "POST",
//     url: appConfig.newera.addCompanyUser,
//     body: bodyData,
//   };
//   return await invokeOmsService(requestParams);
// };



// GET COMPANY LIST API
const getCompanyList = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.newera.getCompanyUserList.replace("{requestId}", requestId),
  };
  return await queryOmsService(requestParams);
};

const getCustomerList = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.newera.getCustomerUserList.replace("{requestId}", requestId),
  };
  return await queryOmsService(requestParams);
};

// // GET COMPANY LIST API
// const getCompanyList = async () => {
//   const requestParams = {
//     method: "GET",
//     url: appConfig.newera.getCompanyList,
//   };
//   return await queryOmsService(requestParams);
// };
// GET Professional List API
const getProfessionalDetails = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.newera.getProfessionalDetails.replace("{requestId}", requestId),
  };
  return await queryOmsService(requestParams);
}

const getProfessionalList = async () => {
  const requestParams = {
    method: "GET",
    url: appConfig.newera.getCompanyList,
  };
  return await queryOmsService(requestParams);

};
// GET COMPANY DETAILS API
const getCompanyDetails = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.newera.getCompanyDetails.replace("{requestId}", requestId),
  };
  return await queryOmsService(requestParams);
};
const getCustomerDetails = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.newera.getCustomerDetails.replace("{requestId}", requestId),
  };
  return await queryOmsService(requestParams);
};

// GET DOCTOR FACILITY DETAILS API
const getDoctorFacilityDetails = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.newera.getDoctorFacilityDetails.replace(
      "{requestId}",
      requestId
    ),
  };
  return await queryOmsService(requestParams);
};

// GET BAISIC USER LIST API
const getBasicUserList = async () => {
  const requestParams = {
    method: "GET",
    url: appConfig.newera.getBasicUserList,
  };
  return await queryOmsService(requestParams);
};

// GET ALL USERS LIST
const getAllUsersList = async () => {
  const requestParams = {
    method: "GET",
    url: appConfig.newera.getAllUsersList,
  };
  return await queryOmsService(requestParams);
};


// GET ALL PATIENTS LIST
const getAllPatientsList = async () => {
  const requestParams = {
    method: "GET",
    url: appConfig.newera.getAllPatientsList,
  };
  return await queryOmsService(requestParams);
};

const getUserDetailsById = async (userId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.newera.getUserDetailsById.replace('{userId}', userId),
  };
  return await queryOmsService(requestParams);
};

// GET REQUESTING PARTY DETAILS API
const getRequestingPartyDetails = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.newera.getRequestingPartyDetails.replace(
      "{requestId}",
      requestId
    ),
  };
  return await queryOmsService(requestParams);
};

// GET RECORD TYPES API
const getRequestTypes = async () => {
  const requestParams = {
    method: "GET",
    url: appConfig.newera.getRequestTypes,
  };
  return await queryOmsService(requestParams);
};

// GET REQUEST TYPES API
const getRecordTypes = async () => {
  const requestParams = {
    method: "GET",
    url: appConfig.newera.getRecordTypes,
  };
  return await queryOmsService(requestParams);
};

// GET DOCTOR FACILITY Metadata API
const getDoctorFacilities = async () => {
  const requestParams = {
    method: "GET",
    url: appConfig.api.doctorFacilities,
  };
  return await queryOmsService(requestParams);
};

// GET REQUEST TYPES API
const getAllServices = async () => {
  var ProcessingOrgId = JSON.parse(localStorage.getItem("userData"))?.userOrgId;
  const requestParams = {
    method: "GET",
    url: appConfig.api.services+`?ProcessingOrgId=${ProcessingOrgId}`,
  };
  return await queryOmsService(requestParams);
};


// GET INTERNAL STATUS DOMAIN API
const getInternalStatusDomain = async () => {
  const requestParams = {
    method: "GET",
    url: appConfig.api.internalStatusDomain,
  };
  return await queryOmsService(requestParams);
};

// GET INTERNAL STATUS DOMAIN API
const getStatusDomain = async () => {
  const requestParams = {
    method: "GET",
    url: appConfig.api.statusDomain,
  };
  return await queryOmsService(requestParams);
};

const checkCompanyEin = async (bodyData) =>{
  const requestParams = {
    method: "POST",
    url: appConfig.newera.checkCompanyofEin,
    body: bodyData,
  };
  return await invokeOmsService(requestParams);
}

const checkCompanyNmaeExist = async (bodyData) =>{
  const requestParams = {
    method: "POST",
    url: appConfig.newera.checkCompanyNmaeExist,
    body: bodyData,
  };
  return await invokeOmsService(requestParams);
}
const checkDuplicateDoctorEmail = async (bodyData) =>{
  const requestParams = {
    method: "POST",
    url: appConfig.newera.checkDuplicateDoctorEmail,
    body: bodyData,
  };
  return await invokeOmsService(requestParams);
}

const checkDuplicateDoctorEin = async (bodyData) =>{
  const requestParams = {
    method: "POST",
    url: appConfig.newera.checkDuplicateDoctorEin,
    body: bodyData,
  };
  return await invokeOmsService(requestParams);
}

const getPendingDoctorFacilityList = async (type)=>{
  const requestParams = {
    method: "GET",
    url: appConfig.api.admin.pendingDoctorFacilityList.replace('{type}', type),
  };
  return await queryOmsService(requestParams);
}

const getDoctorWithOrgId = async (orgId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.newera.doctorWithOrgId.replace('{orgId}', orgId),
  };
  return await queryOmsService(requestParams);
};
const getAttorneyWithOrgId = async (orgId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.newera.attorneyWithOrgId.replace('{orgId}', orgId),
  };
  return await queryOmsService(requestParams);
};
const updateDoctorFacilityStatus = async (id,bodyData) => {
  const url =appConfig.api.admin.updateDoctorFacilityStaus.replace('{id}', id)
  const requestParams = {
    method: "PATCH",
    url: url,
    body: bodyData,
    };
  return await invokeOmsService(requestParams);
};  

const deleteServiceFee = async (serviceFeeId) => {
  const requestParams = {
    method: "STRICT_DELETE",
    url: appConfig.api.admin.deleteServiceFee.replace('{id}',serviceFeeId ),
  };
  return await invokeOmsService(requestParams);
};

//ADD Back Office admin API
const addBackOfficeAdmin = async (bodyData) => {
  const requestParams = {
    method: "POST",
    url: appConfig.newera.backOfficeAdmin,
    body: bodyData,
  };
  return await invokeOmsService(requestParams);
};

// GET BACK OFFICE DETAILS API
const getBackOfficeDetails = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.newera.getBackOfficeDetails.replace(
      "{requestId}",
       requestId
    ),
  };
  return await queryOmsService(requestParams);
};


// GET INSURANCE COMPANY DETAILS API
const getInsuranceCompanyDetails = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.newera.getInsuranceCompanyDetails.replace(
      "{requestId}",
       requestId
    ),
  };
  return await queryOmsService(requestParams);
};

//UPDATE BACK OFFICE DETAILS API
const updateBackOfficeDetails = async (bodyData) => {
  const requestParams = {
    method: "PATCH",
    url: appConfig.newera.updateBackOffice,
    body: bodyData,
    };
  return await invokeOmsService(requestParams);
}; 

const updateUserStatus= async (bodyData) => {
  const requestParams = {
    method: "PATCH",
    url: appConfig.newera.updateUserStatus.replace(
      "{requestId}",
       bodyData.id
    ),
    body: bodyData,
  };
  return await invokeOmsService(requestParams);
}

//UPDATE INSURANCE COMPANY DETAILS API
const updateInsuranceCompanyDetails = async (bodyData) => {
  const requestParams = {
    method: "PATCH",
    url: appConfig.newera.updateInsuranceCompanyDetails.replace(
      "{requestId}",
       bodyData.id
    ),
    body: bodyData,
    };
  return await invokeOmsService(requestParams);
}; 

// Activty List
const getAllActivityList = async () => {
  const requestParams = {
    method: "GET",
    url: appConfig.newera.getActivityList,
  };
  return await queryOmsService(requestParams);
};

// Payment List
const getAllTransactionList = async () => {

  const requestParams = {
    method: "GET",
    url: appConfig.newera.getAllTransactionList,
  };
  return await queryOmsService(requestParams);
};

// Transaction List
const getAllPaymentList = async () => {
  const requestParams = {
    method: "GET",
    url: appConfig.newera.getSuccessTransactionList,
  };
  return await queryOmsService(requestParams);
};

// GET BACK OFFICE LIST API
const getAllBackOfficeList = async () => {
  const requestParams = {
    method: "GET",
    url: appConfig.newera.getBackOfficeList,
  };
  return await queryOmsService(requestParams);
};

const addInsuranceCompany =  async (bodyData) => {
  const requestParams = {
    method: "POST",
    url: appConfig.newera.insuranceCompany,
    body: bodyData,
  };
  return await invokeOmsService(requestParams);
};

const getAllInsuranceCompanyList = async (userType='') => {
  let url= appConfig.newera.getInsuranceCompanyList;
  if(userType){
    url = appConfig.newera.getUsersByType.replace('{userType}', userType);
  }
  const requestParams = {
    method: "GET",
    url
  };
  return await queryOmsService(requestParams);
};

// GET ATTORNEY OFFICE DETAILS API
const getAttorneyOfficeDetails = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.newera.getAttorneyOfficeDetails.replace(
      "{requestId}",
       requestId
    ),
  };
  return await queryOmsService(requestParams);
};

//UPDATE ATTORNEY OFFICE DETAILS API
const updateAttorneyOfficeDetails = async (bodyData) => {
  const requestParams = {
    method: "PATCH",
    url: appConfig.newera.updateAttorneyOfficeDetails,
    body: bodyData,
    };
  return await invokeOmsService(requestParams);
}; 


const addAttorneyOffice =  async (bodyData) => {
  const requestParams = {
    method: "POST",
    url: appConfig.newera.attorneyOffice,
    body: bodyData,
  };
  return await invokeOmsService(requestParams);
};

const getAllAttorneyList = async (userType='') => {
  let url= appConfig.api.attorneyOffices;
  if(userType){
    // url = appConfig.newera.getUsersByType.replace('{userType}', userType);
    url = appConfig.newera.getAttorneyList;
  }
  const requestParams = {
    method: "GET",
    url
  };
  return await queryOmsService(requestParams);
};

const updateFacilityStatus = async (id,bodyData) => {
  const url =appConfig.api.admin.updateFacilityStatus.replace('{id}', id)
  const requestParams = {
    method: "PATCH",
    url: url,
    body: bodyData,
    };
  return await invokeOmsService(requestParams);
};

// GET REQUEST TYPES BY ORG ID
const getRequestTypesByOrgId = async (orgId, type,customerType) => {
  let url = appConfig.api.admin.getDFRequestTypes.replace('{orgId}', orgId)
  if(type){
    url = `${url}?type=${type}&customerType=${customerType}`
  }
  const requestParams = {
    method: "GET",
    url
  };
  return await queryOmsService(requestParams);
};


// GET Record TYPES BY ORG ID
const getRecordTypesByOrgId = async (orgId, type = 'doctorFacility') => {
  const requestParams = {
    method: "GET",
    url: `${appConfig.api.admin.getDFRecordTypes.replace('{orgId}', orgId)}?type=${type}`,
  };
  return await queryOmsService(requestParams);
};

const fetchRecordTypes = async (type ='') => {
  const requestParams = {
    method: "GET",
    url: `${appConfig.newera.getRecordTypes}?type=${type}`,
  };
  return await queryOmsService(requestParams);
};

const fetchRequestTypes = async () => {
  const requestParams = {
    method: "GET",
    url: appConfig.newera.getRequestTypes,
  };
  return await queryOmsService(requestParams);
};

const getPublicRecordTypes = async (type)=>{
  const requestParams = {
    method: "GET",
    url: `${appConfig.api.admin.publicRecordTypes}?type=${type}`,
  };
  return await queryOmsService(requestParams);
}

const getStripeIdByOrg = async(orgId)=>{
  const requestParams = {
    method: "GET",
    url: appConfig.api.admin.getStripeIdByOrgId.replace('{id}', orgId),
  };
  return await queryOmsService(requestParams);
}

const getMyCustomers = async(type)=>{
  const requestParams = {
    method: "GET",
    url: `${appConfig.newera.getMyCustomerList}?type=${type}`
  };
  return await queryOmsService(requestParams);
}

const getFacilityDetails = async(type,id)=>{
  const requestParams = {
    method: "GET",
    url: appConfig.newera.getFacilityDetails.replace('{type}',type).replace('{id}', id)
  };
  return await queryOmsService(requestParams);
}

const getOwnerLogoBase64 = async(type,id)=>{
  if(!id){
    return false
  }
  const requestParams = {
    method: "GET",
    url: appConfig.newera.ownerLogo.replace('{type}',type).replace('{id}', id)
  };
  return await queryOmsService(requestParams);
}

const addSupportRequest = async(bodyData)=>{
  const requestParams = {
    method: "POST",
    url: appConfig.api.admin.support,
    body: bodyData,
  };
  return await invokeOmsService(requestParams);
}

const getAllFeeDueItemsByIds = async (ids) => {

  const requestParams = {
    method: "GET",
    url: `${appConfig.newera.getAllFeeDueItems}?ids=${ids}`,
  };
  return await queryOmsService(requestParams);
}

const getAllFeeDueItems = async (payload) => {
  let url = `${appConfig.newera.getAllFeeDueItems}`
  if (payload) {
    url += `?status=${payload}`;
  }
  const requestParams = {
    method: "GET",
    url: url,
  };
  return await queryOmsService(requestParams);
}

const getAllFeeRequests = async (payload) => {
  let url = `${appConfig.newera.getAllFeeRequests}`;
  if (payload) {
    url += `?status=${payload}`;
  }
  const requestParams = {
    method: "GET",
    url: url,
  };
  return await queryOmsService(requestParams);
};

const getRequestDetails = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.newera.getRequestIdDetails.replace(
      "{requestId}",
       requestId
    ),
  };
  return await queryOmsService(requestParams);
};

const getRequestItems = async (requestId) => {
  const requestParams = {
    method: "GET",
    url: appConfig.newera.getRequestIditems.replace(
      "{requestId}",
       requestId
    ),
  };
  return await queryOmsService(requestParams);
};

const platformFeeStatus = async(bodyData)=>{
  const requestParams = {
    method: "PUT",
    url: appConfig.api.admin.platformFeeStatus,
    body: bodyData,
  };
  return await invokeOmsService(requestParams);
}

const updateFeeDueItems = async(bodyData)=>{
  const requestParams = {
    method: "PUT",
    url: appConfig.api.admin.updateFeeDueItems,
    body: bodyData,
  };
  return await invokeOmsService(requestParams);
}

const NeweraRequestService = {
  addDoctorFacility,
  updateDoctorFacilityDetails,
  getDoctorFacilityList,
  getBackOfficeAddress,
  addServiceList,
  addRecordList,
  addRequestList,
  getAllServiceList,
  getDoctorFacilityDetails,
  getDoctorWithOrgId,
  getAttorneyWithOrgId,
  getBasicUserList,
  getAllUsersList,
  getAllPatientsList,
  getUserDetailsById,
  getRequestingPartyDetails,
  getRecordTypes,
  getRequestTypes,
  getAllServices,
  getDoctorFacilities,
  getInternalStatusDomain,
  getProfessionalDetails,
  getProfessionalList,
  updateProfessionalDetails,
  getStatusDomain,
  getCompanyList,
  getCompanyDetails,
  getCustomerList,
  getCustomerDetails,
  addCompany,
  checkCompanyEin,
  checkCompanyNmaeExist,
  updateServiceFee,
  checkDuplicateDoctorEmail,
  checkDuplicateDoctorEin,
  updateCompanyUserDetails,
  getAllXrayBodyParts,
  getAllXrayCategories,
  addXrayBodyParts,
  updateXrayBodyParts,
  addXrayCategories,
  updateXrayCategories,
  updateRecordList,
  updateRequestList,
  getPendingDoctorFacilityList,
  updateDoctorFacilityStatus,
  getAllinvoices,
  deleteServiceFee,
  addBackOfficeAdmin,
  updateUserStatus,
  addInsuranceCompany,
  addAttorneyOffice,
  updateFacilityStatus,
  getAllBackOfficeList,
  getAllActivityList,
  getAllAttorneyList,
  getAllInsuranceCompanyList,
  getBackOfficeDetails,
  updateBackOfficeDetails,
  updateInsuranceCompanyDetails,
  getInsuranceCompanyDetails,
  getAttorneyOfficeDetails,
  updateAttorneyOfficeDetails,
  getRequestTypesByOrgId,
  getRecordTypesByOrgId,
  fetchRecordTypes,
  fetchRequestTypes,
  getPublicRecordTypes,
  getStripeIdByOrg,
  getMyCustomers,
  getFacilityDetails,
  getOwnerLogoBase64,
  getAllTransactionList,
  getAllPaymentList,
  addSupportRequest,
  getAllFeeDueItems,
  getAllFeeRequests,
  getAllFeeDueItemsByIds,
  platformFeeStatus,
  updateFeeDueItems,
  getRequestDetails,
  getRequestItems
};

export default NeweraRequestService;
