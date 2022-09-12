import { createContext, useContext } from "react";
import useSWR from "swr";
import { fetcher } from "../api/fetcher";
import { HelloMessageProps } from "../constants/messages";
import { useHelloEffect } from "../hooks/useHelloEffect";
import { useFilter } from "./FilterContext";

export interface GeoProps {
  lat: string;
  lng: string;
}

export interface AddressProps {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoProps;
}

export interface CompanyProps {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressProps;
  phone: string;
  website: string;
  company: CompanyProps;
}

export interface UseUserProps {
  userId: number;
}

export const useUser = ({ userId }: UseUserProps) => {
  const users = useContext(UserContext);
  return users.find((item) => item.id === userId);
};

export const useFilteredUser = () => {
  const filter = useFilter().currentFilter.toLowerCase();
  const users = useContext(UserContext);
  return filter.length > 0
    ? users.find((item) => item.name.toLowerCase().includes(filter))
    : null;
};

export interface UserProviderProps {
  children?: React.ReactNode;
}

const UserContext = createContext([] as UserProps[]);

export const UserProvider = ({
  children,
  propsMessage,
}: UserProviderProps & HelloMessageProps) => {
  useHelloEffect({ propsMessage, fun: UserProvider });

  const shouldFetch = localStorage.getItem("users") === null;
  const { data } = useSWR(shouldFetch ? `/users` : null, fetcher);

  if (shouldFetch && data) {
    localStorage.setItem("users", JSON.stringify(data));
  } else if (!shouldFetch) {
    const users = JSON.parse(localStorage.getItem("users") ?? "");
    return (
      <UserContext.Provider value={users}>{children}</UserContext.Provider>
    );
  }

  return (
    <UserContext.Provider value={[] as UserProps[]}>
      {children}
    </UserContext.Provider>
  );
};
