import { createContext, useContext, useState } from "react";
import { HelloMessageProps } from "../constants/messages";
import { useDebounce } from "../hooks/useDebounce";
import { useHelloEffect } from "../hooks/useHelloEffect";

export interface FilterProviderProps {
  children?: React.ReactNode;
}

const FilterContext = createContext({
  currentFilter: "",
  setFilter: (keyword: string) => {},
});

export const useFilter = () => {
  return useDebounce(useContext(FilterContext));
};

export const FilterProvider = ({
  children,
  propsMessage,
}: FilterProviderProps & HelloMessageProps) => {
  useHelloEffect({ propsMessage, fun: FilterProvider });

  const [filter, setFilter] = useState("");
  return (
    <FilterContext.Provider value={{ currentFilter: filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
