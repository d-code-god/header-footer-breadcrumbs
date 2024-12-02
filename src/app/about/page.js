import Breadcrumbs from "@/component/Breadcrumbs";
import React from "react";
import Home from "../page";

function AboutPage() {
  return (
    <div>
      <Breadcrumbs title="About" />
      <div className="max-w-4xl p-8 mx-auto ">
        <h1 className="mb-8 text-4xl font-bold">About Us</h1>
        <p className="mb-8 text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
        <p className="mb-8 text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <h2 className="mb-4 text-2xl font-bold">Meet the Team</h2>
        <ul className="pl-0 mb-8 list-none">
          <li className="mb-4">
            <h3 className="text-lg font-bold">John Doe</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </li>
          <li className="mb-4">
            <h3 className="text-lg font-bold">Jane Smith</h3>
            <p className="text-gray-600">Co-Founder & CTO</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
