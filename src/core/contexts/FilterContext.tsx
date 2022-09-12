import { createContext, useContext, useState } from "react";

export interface FilterProviderProps {
  children?: React.ReactNode;
}

const FilterContext = createContext({
  currentFilter: "",
  setFilter: (keyword: string) => {},
});

export const useFilter = () => {
  return useContext(FilterContext);
};

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [filter, setFilter] = useState("");
  return (
    <FilterContext.Provider value={{ currentFilter: filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
