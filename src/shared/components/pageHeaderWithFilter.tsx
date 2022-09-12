import { useState } from "react";
import { HelloMessageProps } from "../../core/constants/messages";
import { useFilter } from "../../core/contexts/FilterContext";
import { useHelloEffect } from "../../core/hooks/useHelloEffect";

export const PageHeaderWithFilter = ({ propsMessage }: HelloMessageProps) => {
  useHelloEffect({ propsMessage, fun: PageHeaderWithFilter });
  const [input, setInput] = useState("");
  const filter = useFilter();
  return (
    <div className="w-full h-20 bg-header top-0 left-0 fixed flex items-center justify-around">
      <div className="text-white text-3xl font-semibold">
        {"Posts&Comments"}
      </div>
      <input
        className="pr-10 py-1 pl-3 rounded"
        placeholder="Search by user info"
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          filter.setFilter(e.target.value);
        }}
      />
    </div>
  );
};
