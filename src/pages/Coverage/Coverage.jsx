import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.8103, 90.4125];

  const warehouses = useLoaderData();
  //   console.log(warehouses);

  const mapRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();

    const location = e.target.location.value;

    const district = warehouses.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase()),
    );
    if (district) {
      const coordinate = [district.latitude, district.longitude];
      //   console.log(district, coordinate);
      mapRef.current.flyTo(coordinate, 14);
    }
  };

  return (
    <div className="p-5 sm:p-10 md:p-20 shadow-sm rounded-2xl bg-white ">
      <h2 className="text-3xl text-secondary font-bold mb-5">
        We are available in 64 districts
      </h2>

      {/* search bar */}
      <div className="join relative w-sm">
        <div className="">
          <form onSubmit={handleSearch} action="">
            <label className="input validator join-item rounded-l-full border-0 bg-base-200 outline-none shadow-none focus:outline-none focus-within:outline-none focus-within:shadow-none focus-within:border-0">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                name="location"
                type="search"
                required
                placeholder="Search here"
                className="outline-none focus:outline-none"
              />
            </label>
            <button className="absolute btn btn-neutral join-item bg-accent border-0 shadow-none text-secondary rounded-full right-28 z-50">
              Search
            </button>
          </form>
        </div>
      </div>

      {/* divider */}
      <div className="border border-primary-content my-8"></div>

      <h3 className="text-xl text-secondary font-bold mb-8">
        We deliver almost all over Bangladesh
      </h3>

      <MapContainer
        center={position}
        zoom={7}
        scrollWheelZoom={false}
        ref={mapRef}
        className="h-96"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {warehouses.map((warehouse, index) => (
          <Marker
            key={index}
            position={[warehouse.latitude, warehouse.longitude]}
          >
            <Popup>
              <strong>{warehouse.district}</strong> <br /> Service area:{" "}
              {warehouse.covered_area.join(", ")}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Coverage;
