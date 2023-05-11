import React from "react";
import { InfoText } from "./InfoText";
import { GeoData } from "../App";

type Props = {
  geoData: GeoData | null;
};

export const InfoCard: React.FC<Props> = ({ geoData }) => {
  return (
    <div className="w-80 bg-white rounded-2xl p-6 z-1000 lg:w-2/3 md:w-11/12 md:py-[37px] lg:py-[32px]">
      {geoData !== null && (
        <div className="flex flex-col items-center gap-[24px] md:flex-row">
          {geoData.ip && <InfoText label="ip address" text={geoData.ip} />}
          {(geoData.location.region || geoData.location.country) && (
            <InfoText
              label="location"
              text={`${geoData.location.region}, ${geoData.location.country} ${geoData.location.postalCode}`}
            />
          )}
          {geoData.timezone && (
            <InfoText label="timezone" text={geoData.timezone} />
          )}
          {geoData.isp && <InfoText label="isp" text={geoData.isp} />}
        </div>
      )}
    </div>
  );
};
