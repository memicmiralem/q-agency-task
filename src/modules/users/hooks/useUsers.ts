import useSWR from "swr";
import { fetcher } from "../../../core/api/fetcher";

export interface UseUsersProps {
  userId?: number;
}

export const useUsers = ({ userId }: UseUsersProps) => {
  const query = userId ? `/${userId}` : "";
  const { data, error } = useSWR(`/users${query}`, fetcher);
  return {
    data,
    error,
  };
};
