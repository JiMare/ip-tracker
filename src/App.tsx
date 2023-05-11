import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Map } from "./components/Map";
import { axiosInstance } from "./axios/axios";

export type GeoData = {
  ip: string;
  isp: string;
  timezone: string;
  location: {
    region: string;
    country: string;
    lat: number;
    lng: number;
    postalCode: string;
  };
};

const App: React.FC = () => {
  const [geoData, setGeoData] = useState<GeoData | null>(null);
  const [param, setParam] = useState("");

  const isIpAddress = (str: string) => {
    const regexFour =
      /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const regexSix = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    return regexFour.test(str) || regexSix.test(str);
  };

  useEffect(() => {
    const getParams = (param: string) => {
      if (isIpAddress(param)) {
        return { ipAddress: param };
      } else {
        return { domain: param };
      }
    };
    const getGeoData = async () => {
      const response = await axiosInstance.get("", {
        params: getParams(param),
      });
      const data = response.data;
      setGeoData({
        ip: data.ip,
        isp: data.isp,
        timezone: data.location.timezone,
        location: {
          region: data.location.region,
          country: data.location.country,
          lat: data.location.lat,
          lng: data.location.lng,
          postalCode: data.location.postalCode,
        },
      });
    };
    getGeoData();
  }, [param]);

  return (
    <>
      <Header geoData={geoData} onSearch={(input: string) => setParam(input)} />
      {geoData && <Map coords={[geoData.location.lat, geoData.location.lng]} />}
    </>
  );
};

export default App;
