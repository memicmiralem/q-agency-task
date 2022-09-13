import { useState } from "react";
import { HelloMessageProps } from "../../core/constants/messages";
import { useFilter } from "../../core/contexts/FilterContext";
import { useHelloEffect } from "../../core/hooks/useHelloEffect";

export const PageHeaderWithFilter = ({ propsMessage }: HelloMessageProps) => {
  useHelloEffect({ propsMessage, fun: PageHeaderWithFilter });
  const [input, setInput] = useState("");
  const filter = useFilter();
  return (
    <div className="w-full h-20 bg-header dark:bg-header-dark top-0 left-0 fixed flex items-center justify-around">
      <div className="text-white text-3xl font-semibold">
        {"Posts&Comments"}
      </div>
      <input
        className="pr-10 py-1 pl-3 rounded bg-card dark:bg-card-dark border border:border-light dark:border-border-dark text-font-primary dark:text-font-primary-dark"
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
