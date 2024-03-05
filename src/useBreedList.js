import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery({
    enabled: !!animal,
    queryKey: ["breeds", animal],
    queryFn: () => fetchBreedList(animal),
  });

  return [results?.data?.breeds ?? [], results.status];
}
