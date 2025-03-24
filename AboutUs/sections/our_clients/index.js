import React, { useEffect, useState } from "react";
import "./index.css";
import { Dialog } from "components/ui";
// import clientNameList from "./clientNameList";
import { toLower } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import reducer, { getMetadata } from "./store";
import { injectReducer } from "store";

injectReducer("OurClients", reducer);

// const clientList1 = [
//   "Accurate Interpreting",
//   "Advanced Pain Control",
//   "ADVANTGARDE MEDICAL INC.",
//   "South Lake Medical Center",
//   "Adventgarde",
// ];
// const clientList2 = [
//   "Allan Delman MD",
//   "Avalon Family Medical Group",
//   "Bazan Huerta & Associates",
//   "Comprehensive Interpreting",
//   "ORTHO AVR",
// ];
// const clientList3 = [
//   "Cosmopolitan Translators, LLC",
//   "Cosmopolitan Translators, LLC",
//   "Daniel M Zinar MD",
//   "Electrotherapeutics, Inc.",
//   "The Spine Institute",
// ];
// const clientList4 = [
//   "Enhanced Precision Care",
//   "Enterprise Interpreting LLC",
//   "Gabriel Rubanenko MD - Wilshire",
//   "Galaxy Medical Center",
//   "Willow Medical Group",
// ];

const OurClients = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMetadata());
  }, []);

  //doctor faclity list
  const doctorFacilities = useSelector(
    (state) => state.OurClients?.metadata?.doctorFacilities
  );
  const attorneyOffices = useSelector(
    (state) => state.OurClients?.metadata?.AttorneyOffices
  );

  const clientsData = [...doctorFacilities?.map(item => item?.label),...attorneyOffices.map(item=>item?.label)]
  const clientList1 = clientsData.slice(0,clientsData.length/2)
  const clientList2 = clientsData.slice(clientsData.length/2,clientsData.length)
  const clientsDataReversed = attorneyOffices?.map(item => item?.label).reverse()
  const clientList3 = clientsDataReversed?.slice(clientsDataReversed.length/2,clientsDataReversed.length)
  const clientList4 = clientsDataReversed?.slice(0,clientsDataReversed.length/2)

  const [dialogIsOpen, setIsOpen] = useState(false);

  const [searchClient, setSearchClient] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const [searched, setSearched] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
    setFilteredList([]);
  };

  const onDialogClose = (e) => {
    setSearched(false);
    setFilteredList([]);
    setSearchClient("");
    setIsOpen(false);
  };

  const onSearch = () => {
    if(searchClient){
      if (searchClient.toString() === "" || searchClient === " ") return;
      setSearched(true);
      let tempList = [];
      for (let i = 0; i < clientsData.length; i++) {
        if (toLower(clientsData[i]).includes(searchClient.toString())) {
          tempList.push(clientsData[i]);
        }
      }
      tempList = tempList.slice(0, 10);
      // tempList = clientsData.filter(item => item.toString().toLowerCase().indexOf(searchClient.toString().toLowerCase()!=-1))
      setFilteredList(tempList);
    }
    
  };

  return (
    <div className="bg-white text-black" id="clients">
      <div className="container mx-auto px-5 flex items-center gap-20 py-32">
        <div className="flex flex-col gap-6 w-2/5">
          <p className="text-6xl font-semibold leading-[84px]">Our Clients</p>
          <p className="text-2xl font-normal w-[500px]">
            Our network of 100+ clients allows us to provide comprehensive and
            efficient solutions to our users.
          </p>

          <button
            className="bg-[#D70015] w-fit rounded-lg px-16 py-5 text-xl font-semibold text-white"
            onClick={() => {
              openDialog();
            }}
          >
            View More
          </button>
          <Dialog
            isOpen={dialogIsOpen}
            onClose={onDialogClose}
            onRequestClose={onDialogClose}
            contentClassName="!bg-white"
            width={"1366px"}
            bodyOpenClassName="overflow-hidden"
          >
            <div className="p-10 min-h-[500px]">
              <p className="mb-14 text-2xl font-semibold text-black text-center">
                Search for Clients
              </p>
              <div className="flex gap-6 w-full px-10">
                <input
                  onChange={(e) => {
                    setSearchClient(toLower(e.target.value));
                  }}
                  placeholder="Type Something"
                  className="h-16 w-full rounded-lg border outline-none px-5 text-xl font-medium"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      onSearch();
                    }
                  }}
                  
                />
                <button
                  className="bg-[#D70015] w-fit rounded-lg px-16 py-5 text-xl font-semibold text-white"
                  onClick={onSearch}
                >
                  Search
                </button>
              </div>

              <div className="flex px-10 flex-wrap gap-4 mt-10">
                {filteredList &&
                  filteredList.map((current, index) => {
                    return (
                      <div
                        className="bg-[#F0F0F0] rounded-md px-10 py-5"
                        key={index}
                      >
                        <p className="whitespace-nowrap font-semibold">
                          {current}
                        </p>
                      </div>
                    );
                  })}

                {filteredList.length || !searched ? (
                  ""
                ) : (
                  <p className="text-red-500 text-lg font-semibold">
                    No record found matching the search term
                  </p>
                )}
              </div>
            </div>
          </Dialog>
        </div>
        <div className="flex w-3/5 h-80 overflow-hidden relative">
          <div className="z-20 absolute h-full w-20 bg-gradient-to-r from-white to-transparent"></div>
          <div className="flex flex-col gap-20 w-full relative">
            {/* line1 */}
            <div>
              <div className="flex gap-5 marquee"  >
                {clientList1.map((current, index) => (
                  <div
                    className="bg-[#F0F0F0] rounded-md px-10 py-5" 
                    key={index}
                  >
                    {current}
                  </div>
                ))}
              </div>
              {/* <div className="flex gap-5 marquee marquee2">
                {clientList1.map((current, index) => (
                  <div
                    className="bg-[#F0F0F0] rounded-md px-10 py-5"
                    key={index}
                  >
                    {current}
                  </div>
                ))}
              </div> */}
            </div>
            {/* line2 */}
            <div>
              <div className="flex gap-5 marquee" >
                {clientList3.map((current, index) => (
                  <div
                    className="bg-[#F0F0F0] rounded-md px-10 py-5"
                    key={index}
                  >
                    {current}
                  </div>
                ))}
              </div>
              {/* <div className="flex gap-5 marquee-rev marquee2-rev">
                {clientList2.map((current, index) => (
                  <div
                    className="bg-[#F0F0F0] rounded-md px-10 py-5"
                    key={index}
                  >
                    {current}
                  </div>
                ))}
              </div> */}
            </div>
            {/* line3 */}
            <div>
              <div className="flex gap-5 marquee-rev" >
                {clientList2?.map((current, index) => (
                  <div
                    className="bg-[#F0F0F0] rounded-md px-10 py-5"
                    key={index}
                  >
                    {current}
                  </div>
                ))}
              </div>
              {/* <div className="flex gap-5 marquee marquee2">
                {clientList3?.map((current, index) => (
                  <div
                    className="bg-[#F0F0F0] rounded-md px-10 py-5"
                    key={index}
                  >
                    {current}
                  </div>
                ))}
              </div> */}
            </div>
            {/* line4 */}
            <div>
              <div className="flex gap-5 marquee-rev" >
                {clientList4?.map((current, index) => (
                  <div
                    className="bg-[#F0F0F0] rounded-md px-10 py-5"
                    key={index}
                  >
                    {current}
                  </div>
                ))}
              </div>
              {/* <div className="flex gap-5 marquee-rev marquee2-rev">
                {clientList4?.map((current, index) => (
                  <div
                    className="bg-[#F0F0F0] rounded-md px-10 py-5"
                    key={index}
                  >
                    {current}
                  </div>
                ))}
              </div> */}
            </div>
            <div className="z-20 absolute h-full w-20 bg-gradient-to-l from-white to-transparent right-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
