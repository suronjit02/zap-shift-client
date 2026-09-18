import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const serviceCenters = useLoaderData();

  const regionsDuplicate = serviceCenters.map((center) => center.region);
  const regions = [...new Set(regionsDuplicate)]; // Remove duplicates
  // console.log(regions);
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });
  const parcelType = useWatch({ control, name: "parcelType" });
  const isDocument = parcelType === "document";

  const districtByRegion = (region) => {
    const regionDistricts = serviceCenters.filter(
      (center) => center.region === region,
    );

    const districts = regionDistricts.map((d) => d.district);

    return districts;
  };

  const handleSendParcel = (data) => {
    console.log(data);

    // const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;

    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight <= 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        cost = isSameDistrict
          ? 110 + (parcelWeight - 3) * 40
          : 150 + ((parcelWeight - 3) * 40 + 40);
      }
    }
    console.log("Final Cost : ", cost);

    // alert for confirmation
    Swal.fire({
      title: "Agree with the cost?",
      text: `You will be charged ${cost} taka.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I Agree!",
    }).then((result) => {
      if (result.isConfirmed)
        Swal.fire({
          title: "Success!",
          text: "Your parcel has been sent.",
          icon: "success",
        });
    });
  };

  return (
    <div className="">
      <div className="min-h-screen max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10">
        {/* Title Section */}
        <h1 className="text-3xl font-bold text-secondary mb-2">
          Send A Parcel
        </h1>
        <p className="text-gray-600 mb-8">Enter your parcel details</p>

        <form onSubmit={handleSubmit(handleSendParcel)} className="space-y-6">
          {/* Document / Not-Document Radio Selection */}
          <div className="flex items-center space-x-8 mb-6">
            <label className="cursor-pointer flex items-center space-x-2">
              <input
                type="radio"
                className="radio radio-success"
                value={"document"}
                {...register("parcelType")}
              />
              <span className="text-sm font-medium text-gray-700">
                Document
              </span>
            </label>
            <label className="cursor-pointer flex items-center space-x-2">
              <input
                type="radio"
                className="radio radio-success"
                value={"non-document"}
                {...register("parcelType")}
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
                Parcel Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Parcel Name"
                {...register("parcelName", { required: true })}
                className="input input-bordered w-full bg-white text-sm focus:outline-none focus:border-[#004d40]"
              />
              {errors.parcelName?.type === "required" && (
                <p className="text-red-500 text-xs mt-1">
                  Parcel name is required
                </p>
              )}
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Parcel Weight (KG) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                disabled={isDocument}
                placeholder="Parcel Weight (KG)"
                {...register("parcelWeight", { required: true })}
                className="input ${isDocument ? disabled : } input-bordered w-full bg-white text-sm focus:outline-none focus:border-[#004d40]"
              />
              {errors.parcelWeight?.type === "required" && (
                <p className="text-red-500 text-xs mt-1">
                  Parcel weight is required
                </p>
              )}
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
                  {...register("senderName")}
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
                  {...register("senderAddress")}
                  placeholder="Address"
                  className="input input-bordered w-full bg-white text-sm focus:outline-none focus:border-[#004d40]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Sender Contact No <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...register("senderPhone")}
                  placeholder="Sender Contact No"
                  className="input input-bordered w-full bg-white text-sm focus:outline-none focus:border-[#004d40]"
                />
              </div>
              {/* sender region */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Your Region <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("senderRegion")}
                  className="select select-bordered w-full bg-white text-sm text-gray-500 focus:outline-none focus:border-[#004d40]"
                >
                  <option disabled selected>
                    Select your Region
                  </option>
                  {regions.map((r, idx) => (
                    <option key={idx} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              {/* sender district */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Your District <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("senderDistrict")}
                  className="select select-bordered w-full bg-white text-sm text-gray-500 focus:outline-none focus:border-[#004d40]"
                >
                  <option disabled selected>
                    Select your District
                  </option>
                  {districtByRegion(senderRegion).map((r, idx) => (
                    <option key={idx} value={r}>
                      {r}
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
                  {...register("pickupInstruction")}
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
                  {...register("receiverName")}
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
                  {...register("receiverAddress")}
                  className="input input-bordered w-full bg-white text-sm focus:outline-none focus:border-[#004d40]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Receiver Contact No <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Receiver Contact No"
                  {...register("receiverContact")}
                  className="input input-bordered w-full bg-white text-sm focus:outline-none focus:border-[#004d40]"
                />
              </div>

              {/* receiver Region */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Receiver Region <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("receiverRegion")}
                  className="select select-bordered w-full bg-white text-sm text-gray-500 focus:outline-none focus:border-[#004d40]"
                >
                  <option disabled selected>
                    Select Receiver Region
                  </option>
                  {regions.map((r, idx) => (
                    <option key={idx} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              {/* receiver district */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Receiver District <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("receiverDistrict")}
                  className="select select-bordered w-full bg-white text-sm text-gray-500 focus:outline-none focus:border-[#004d40]"
                >
                  <option disabled selected>
                    Select receiver District
                  </option>
                  {districtByRegion(receiverRegion).map((r, idx) => (
                    <option key={idx} value={r}>
                      {r}
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
                  {...register("deliveryInstruction")}
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
