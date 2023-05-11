import React from "react";
import { Input } from "./Input";
import { InfoCard } from "./InfoCard";
import { GeoData } from "../App";

type Props = {
  geoData: GeoData | null;
  onSearch: (input: string) => void;
};

export const Header: React.FC<Props> = ({geoData, onSearch}) => {
  return (
    <div className="bg-hero-pattern h-[300px] md:h-[280px] bg-cover bg-no-repeat bg-center w-full">
      <h1 className="text-white text-lg md:text-xl font-medium pt-5 md:pt-7 text-center">
        IP Address Tracker
      </h1>
      <div className="flex justify-center mt-6">
        <Input placeholder="Search for any IP address or domain" onClick={onSearch}/>
      </div>
      <div className="flex justify-center mt-6 md:mt-[48px]">
        <InfoCard geoData={geoData} />
      </div>
    </div>
  );
};
