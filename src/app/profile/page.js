import React from "react";
import Breadcrumbs from "@/component/Breadcrumbs";

function StudentProfile() {
  return (
    <div>
      <Breadcrumbs title="Profile" />
      <div className="py-8 ">
        <div className="container p-4 mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">Student Profile</h1>
            {/* <nav className="flex text-gray-600 breadcrumb">
              <Link href="#" className="breadcrumb-item">
                Dashboard
              </Link>
              <span className="breadcrumb-separator">/</span>
              <Link href="#" className="breadcrumb-item">
                Students
              </Link>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-item">John Doe</span>
            </nav> */}
          </div>
          <div className="p-4 rounded shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">John Doe</h2>
              <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                Edit Profile
              </button>
            </div>
            <div className="flex flex-wrap mb-4 -mx-4">
              <div className="w-full px-4 mb-4 md:w-1/2 xl:w-1/3">
                <label className="block mb-2 ">Name:</label>
                <p className="">John Doe</p>
              </div>
              <div className="w-full px-4 mb-4 md:w-1/2 xl:w-1/3">
                <label className="block mb-2 ">Email:</label>
                <p className="">john.doe@example.com</p>
              </div>
              <div className="w-full px-4 mb-4 md:w-1/2 xl:w-1/3">
                <label className="block mb-2 ">Phone:</label>
                <p className="">123-456-7890</p>
              </div>
            </div>
            <div className="flex flex-wrap mb-4 -mx-4">
              <div className="w-full px-4 mb-4 md:w-1/2 xl:w-1/3">
                <label className="block mb-2 ">Address:</label>
                <p className="">123 Main St, Anytown, USA</p>
              </div>
              <div className="w-full px-4 mb-4 md:w-1/2 xl:w-1/3">
                <label className="block mb-2 ">City:</label>
                <p className="">Anytown</p>
              </div>
              <div className="w-full px-4 mb-4 md:w-1/2 xl:w-1/3">
                <label className="block mb-2 ">State:</label>
                <p className="">USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
