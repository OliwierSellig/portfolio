import { useQuery } from "@tanstack/react-query";
import { getTechnologies } from "../services/apiTechnologies";

export function useTechnologies() {
  const {
    isLoading,
    data: technologies,
    error,
  } = useQuery({
    queryKey: ["technologies"],
    queryFn: getTechnologies,
  });

  return { isLoading, technologies, error };
}
