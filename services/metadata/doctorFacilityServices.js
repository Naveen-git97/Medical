import { queryOmsService } from "../apiService";
import appConfig from "../../configs/app.config";

const getDoctorFacilities = async () => {
    const requestParams = {
        method: 'GET',
        url: appConfig.newera.publicDoctorFacilites
    };
    const response = await queryOmsService(requestParams);
    return response;
}

const getAttorneyOffices = async () => {
    const requestParams = {
        method: 'GET',
        url: appConfig.newera.publicAttorneyOffice
    };
    const response = await queryOmsService(requestParams);
    return response;
}


const DoctorFacilityService = {
    getDoctorFacilities,
    getAttorneyOffices
};

export default DoctorFacilityService;