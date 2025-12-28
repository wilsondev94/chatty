import { client } from "@/lib/client";
import { useQuery } from "@tanstack/react-query";

export function useGetMessages(roomId: string) {
  const { data: messages, refetch } = useQuery({
    queryKey: ["messages", roomId],
    queryFn: async () => {
      const res = await client.messages.get({ query: { roomId } });
      return res.data;
    },
  });

  return { messages, refetch };
}
