export const addMetadata = (state, action) => {
  const { doctorFacilities,AttorneyOffices } = action.payload;
  state.metadata = {
    ...state.metadata,
    doctorFacilities: doctorFacilities.map((doctorFacility) => {
      return {
        value: doctorFacility.id,
        label: doctorFacility.facilityName,
        phone: doctorFacility.phoneNumber,
        address:
          doctorFacility.addresses && doctorFacility.addresses.length > 0
            ? doctorFacility.addresses[0]
            : null,
        fax: doctorFacility.faxNumber,
      };
    }),
    AttorneyOffices: AttorneyOffices.map((AttorneyOffice) => {
      return {
        value: AttorneyOffice.id,
        label: AttorneyOffice.attorneyName,
        phone: AttorneyOffice.phoneNumber,
        address:
        AttorneyOffice.addresses && AttorneyOffice.addresses.length > 0
            ? AttorneyOffice.addresses[0]
            : null,
        fax: AttorneyOffice.faxNumber,
      };
    }),

    isMetadataLoading: false,
    isMetadataAvailable: true,
  };
};

export const failMetadata = (state, action) => {
  state.metadata.isMetadataLoading = false;
  state.metadata.isMetadataAvailable = false;
  state.metadata.error = action.payload;
};
