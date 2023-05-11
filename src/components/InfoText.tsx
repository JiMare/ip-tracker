import React from "react";

type Props = {
  label: string;
  text: string;
};

export const InfoText: React.FC<Props> = ({ label, text }) => {
  return (
    <div className="text-center md:text-left md:border-r border-gray-200 last:border-0 lg:pr-[40px] md:pr-[10px]">
      <h2 className="uppercase text-gray-400 font-bold text-[10px] md:text-[12px] tracking-[1.5px] md:tracking-[1.75px]">
        {label}
      </h2>
      <h3 className="text-[20px] font-medium md:text-[26px] md:max-w-[200px] md:leading-7 md:mt-[12px] tracking-[-0.2px] break-words">
        {label === "timezone" && "UTC "}
        {text}
      </h3>
    </div>
  );
};
