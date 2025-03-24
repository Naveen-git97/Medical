import { useSelector } from "react-redux";
import appConfig from "../configs/app.config";
import { invokeOmsService, invokeOmsServiceForPDF, uploadFile } from "./apiService";

const submitDocumentRequestForm = async (form) => {
  const requestParams = {
    method: "post",
    url: appConfig.api.documentRequest,
    body: form,
  };
  const response = await invokeOmsService(requestParams);
  return response;
};

export const downloadDocument = async (payload) => {
  const requestParams = {
    method: 'GET',
    url: appConfig.api.downloadZipDocument.replace('{requestId}', payload)
  };
  const response = await invokeOmsService(requestParams);
  return response;
};

export const _uploadReferenceDocuments = async (form, submittedBy) => {

  let uploadTasks = [];

  if (submittedBy === "attorney") {
    // For attorney flow the documents are uploaded in the order for record types
    // The service processes them in the same order.
    uploadTasks = [
      ...uploadTasks,
      ...(await _uploadAdditionalMedicalRecords(form)),
    ];
  } else {
    uploadTasks = [
      ...uploadTasks,
      ...(await _uploadIdentityDocuments(form)),
      ...(await _uploadHippaDocument(form)),
    ];
  }
  const results = await Promise.all(uploadTasks);

  return [...results];
};

//// BKP ////
// export const _uploadReferenceDocuments = async (form) => {
//   let uploadTasks = [];

//   uploadTasks = [
//     ...uploadTasks,
//     ..._uploadIdentityDocuments(form),
//     _uploadHippaDocument(form),
//     ..._uploadAdditionalMedicalRecords(form),
//   ];
//   const results = await Promise.all(uploadTasks);
//   return [
//     {
//       recordTypeId: 1,
//       refernceDocIds: results,
//     },
//   ];
// };

const _uploadIdentityDocuments = async (form) => {
  if (form.govtIdDocumentType === "passport") {
    const recordTypeId = 1;
    const refernceDocIds = []
    refernceDocIds.push(await _uploadReferenceDocument(recordTypeId, form.passportCover));
    refernceDocIds.push(await _uploadReferenceDocument(recordTypeId, form.passportDataPage));
    return refernceDocIds;
  }
  if (form.govtIdDocumentType === "nationalId") {
    const recordTypeId = 21;
    const refernceDocIds = [];
    refernceDocIds.push(await _uploadReferenceDocument(recordTypeId, form.nationalIdFront));
    refernceDocIds.push(await _uploadReferenceDocument(recordTypeId, form.nationalIdBack));
    return refernceDocIds;
  } else {
    const recordTypeId = 20;
    const refernceDocIds = [];
    refernceDocIds.push(await _uploadReferenceDocument(recordTypeId, form.driversLicenseFront));
    refernceDocIds.push(await _uploadReferenceDocument(recordTypeId, form.driversLicenseBack));
    return refernceDocIds;
  }
};

const _uploadHippaDocument = async (form) => {
  const recordTypeId = 30;
  const refernceDocId = await _uploadReferenceDocument(recordTypeId, form.hippaDeclarationScan);

  return [refernceDocId];
};

const _uploadAdditionalMedicalRecords = async (form) => {
  const referenceDocIds = [];
  const {recordIndex, recordType} = form;
  for (const index of recordIndex) {
    let recordId = 0;
    recordType === 1 ? recordId = 41 : recordType === 2 ? recordId = 42 : recordType === 3 ? recordId = 43 : recordId = 4;

    const uploadFieldName = `additional_record_document_${index+1}`;
    console.debug("Checking ", uploadFieldName, form[uploadFieldName]);
    if (form[uploadFieldName] != null) {
      referenceDocIds.push(
        await _uploadReferenceDocument(
          recordId,
          form[uploadFieldName]
        ),
      );
    }
  }
  return referenceDocIds;
};

const _uploadReferenceDocument = async (
  referenceDocumentType,
  referenceDocumentBlobUrl
) => {
  const url = appConfig.api.uploadReferenceDocument.replace(
    "{docTypeId}",
    referenceDocumentType
  );
  const response = await uploadFile(referenceDocumentBlobUrl, url);
  return response.data.docRefId;
};

const DocumentRequestService = {
  submitDocumentRequestForm,
};

export default DocumentRequestService;
