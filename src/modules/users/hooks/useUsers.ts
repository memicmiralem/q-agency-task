import useSWR from "swr";
import { fetcher } from "../../../core/api/fetcher";

export interface UseUsersProps {
  userId?: number;
}

export const useUsers = ({ userId }: UseUsersProps) => {
  const query = userId ? `/${userId}` : "";
  console.log("query je ", query);
  const { data, error } = useSWR(`/users${query}`, fetcher);
  console.log("data je ", data);
  return {
    data,
    error,
  };
};
