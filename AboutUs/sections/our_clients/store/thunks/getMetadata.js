import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  DoctorFacilityService,
} from "services/metadata";
import { AdminEditRequestConstants} from '../../constants';

export const getMetadata = createAsyncThunk(`${AdminEditRequestConstants.StoreSliceName}/getMetadata`, async (_, { rejectWithValue }) => {
    try {
      const metadataResults = await Promise.allSettled([
        DoctorFacilityService.getDoctorFacilities(),
        DoctorFacilityService.getAttorneyOffices()
      ]);
      if (metadataResults.every((result) => result.status === "fulfilled")) {
        const metadata = {
          doctorFacilities: metadataResults[0].value,
          AttorneyOffices:metadataResults[1].value
        };
        return metadata;
      }
      // TODO - Log the failed metadata api calls
      return rejectWithValue(
        "Failed to get metadata for document request form"
      );
    } catch (error) {
      // TODO - Log the error;
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);
