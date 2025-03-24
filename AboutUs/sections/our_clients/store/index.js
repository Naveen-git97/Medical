import { initialState } from "./state";
import { createSlice } from "@reduxjs/toolkit";
import { getMetadata } from "./thunks/getMetadata";
import { AdminEditRequestConstants } from "../constants";
import { addMetadata, failMetadata } from "./reducers/metadataReducer";

const slice = createSlice({
  name: AdminEditRequestConstants.StoreSliceName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMetadata.fulfilled, addMetadata)
      .addCase(getMetadata.rejected, failMetadata);
  },
});

export { getMetadata };
export default slice.reducer;
