import React, { useState } from "react";

const SendParcel = () => {
  const [parcelType, setParcelType] = useState("Document");

  const districts = [
    "Dhaka",
    "Chittagong",
    "Sylhet",
    "Rajshahi",
    "Khulna",
    "Barishal",
    "Rangpur",
    "Mymensingh",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="">
      <div className="min-h-screen max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10">
        {/* Title Section */}
        <h1 className="text-3xl font-bold text-secondary mb-2">
          Send A Parcel
        </h1>
        <p className="text-gray-600 mb-8">Enter your parcel details</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Document / Not-Document Radio Selection */}
          <div className="flex items-center space-x-8 mb-6">
            <label className="cursor-pointer flex items-center space-x-2">
              <input
                type="radio"
                name="parcelType"
                className="radio radio-success"
                checked={parcelType === "Document"}
                onChange={() => setParcelType("Document")}
              />
              <span className="text-sm font-medium text-gray-700">
                Document
              </span>
            </label>
            <label className="cursor-pointer flex items-center space-x-2">
              <input
                type="radio"
                name="parcelType"
                className="radio radio-success"
                checked={parcelType === "Not-Document"}
                onChange={() => setParcelType("Not-Document")}
              />
              <span className="text-sm font-medium text-gray-700">
                Not-Document
              </span>
            </label>
          </div>

          {/* Parcel Name and Weight */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Parcel Name
              </label>
              <input
                type="text"
                placeholder="Parcel Name"
                className="input input-bordered w-full bg-white text-sm focus:outline-none focus:border-[#004d40]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Parcel Weight (KG)
              </label>
              <input
                type="text"
                placeholder="Parcel Weight (KG)"
                className="input input-bordered w-full bg-white text-sm focus:outline-none focus:border-[#004d40]"
              />
            </div>
          </div>

          {/* Section Headings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <h3 className="font-bold text-[#004d40] text-sm">Sender Details</h3>
            <h3 className="font-bold text-[#004d40] text-sm hidden md:block">
              Receiver Details
            </h3>
          </div>

          {/* Sender & Receiver Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sender Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Sender Name
                </label>
                <input
                  type="text"
                  placeholder="Sender Name"
                  className="input input-bordered w-full bg-white text-sm focus:outline-none focus:border-[#004d40]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="input input-bordered w-full bg-white text-sm focus:outline-none focus:border-[#004d40]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Sender Phone No
                </label>
                <input
                  type="text"
                  placeholder="Sender Phone No"
                  className="input input-bordered w-full bg-white text-sm focus:outline-none focus:border-[#004d40]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Your District
                </label>
                <select className="select select-bordered w-full bg-white text-sm text-gray-500 focus:outline-none focus:border-[#004d40]">
                  <option disabled selected>
                    Select your District
                  </option>
                  {districts.map((d, idx) => (
                    <option key={idx} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Pickup Instruction
                </label>
                <textarea
                  placeholder="Pickup Instruction"
                  className="textarea textarea-bordered w-full bg-white text-sm h-24 focus:outline-none focus:border-[#004d40]"
                ></textarea>
              </div>
            </div>

            {/* Receiver Column */}
            <div className="space-y-4">
              <h3 className="font-bold text-[#004d40] text-sm block md:hidden">
                Receiver Details
              </h3>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Receiver Name
                </label>
                <input
                  type="text"
                  placeholder="Receiver Name"
                  className="input input-bordered w-full bg-white text-sm focus:outline-none focus:border-[#004d40]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Receiver Address
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="input input-bordered w-full bg-white text-sm focus:outline-none focus:border-[#004d40]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Receiver Contact No
                </label>
                <input
                  type="text"
                  placeholder="Sender Contact No"
                  className="input input-bordered w-full bg-white text-sm focus:outline-none focus:border-[#004d40]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Receiver District
                </label>
                <select className="select select-bordered w-full bg-white text-sm text-gray-500 focus:outline-none focus:border-[#004d40]">
                  <option disabled selected>
                    Select your District
                  </option>
                  {districts.map((d, idx) => (
                    <option key={idx} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Delivery Instruction
                </label>
                <textarea
                  placeholder="Delivery Instruction"
                  className="textarea textarea-bordered w-full bg-white text-sm h-24 focus:outline-none focus:border-[#004d40]"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Pickup Time Notification */}
          <div className="flex items-center space-x-2 pt-2">
            <span className="text-blue-500 text-sm">🕒</span>
            <span className="text-xs font-medium text-gray-700 bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
              PickUp Time 4pm-7pm Approx.
            </span>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="btn bg-accent hover:bg-accent/80 text-black font-semibold border-none px-8"
            >
              Proceed to Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendParcel;
