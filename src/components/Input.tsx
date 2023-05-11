import React, { useState } from "react";

type Props = {
  placeholder: string;
  onClick: (input: string) => void;
};

export const Input: React.FC<Props> = ({ placeholder, onClick }) => {
  const [value, setValue] = useState<string>("");
  return (
    <div className="flex">
      <input
        type="text"
        className="rounded-2xl h-14 w-80 md:w-[550px] pl-[24px] placeholder:text-[14px] md:placeholder:text-[18px]"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="bg-black w-[56px] h-[56px] rounded-r-2xl -ml-[56px]"
        onClick={() => onClick(value)}
      >
        <img src="icon-arrow.svg" className="block mx-auto" />
      </button>
    </div>
  );
};
