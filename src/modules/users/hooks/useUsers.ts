import useSWR from "swr";
import { fetcher } from "../../../core/api/fetcher";

export interface UseUsersProps {
  userId?: number;
}

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

export const useUsers = ({ userId }: UseUsersProps) => {
  const query = userId ? `/${userId}` : "";
  const { data, error } = useSWR(`/users${query}`, fetcher);
  return {
    data: data as UserProps | null,
    error,
  };
};
