import { createContext, useContext, useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../api/fetcher";

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

export interface UserProviderProps {
  children?: React.ReactNode;
}

const UserContext = createContext([] as UserProps[]);

export const UserProvider = ({ children }: UserProviderProps) => {
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
