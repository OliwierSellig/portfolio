import { useQuery } from "@tanstack/react-query";
import { getTechnologies } from "../services/apiTechnologies";

export function useTechnologies(techList) {
  const list = techList || [];

  const {
    isLoading,
    data: technologies,
    error,
  } = useQuery({
    queryKey: ["technologies", techList],
    queryFn: () => getTechnologies(list),
  });

  return { isLoading, technologies, error };
}
