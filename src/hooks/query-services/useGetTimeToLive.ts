import { client } from "@/lib/client";
import { useQuery } from "@tanstack/react-query";

export function useGetTimeToLive(roomId: string) {
  const { data: ttlData } = useQuery({
    queryKey: ["ttl", roomId],
    queryFn: async () => {
      const res = await client.room.ttl.get({ query: { roomId } });
      return res.data;
    },
  });

  return {
    ttlData,
  };
}
