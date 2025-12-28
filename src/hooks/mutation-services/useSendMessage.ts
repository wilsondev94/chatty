"use client";

import { client } from "@/lib/client";
import { useMutation } from "@tanstack/react-query";

export function useSendMessage(
  roomId: string,
  username: string,
  setInput: (_value: string) => void
) {
  const { mutate: sendMessage, isPending } = useMutation({
    mutationFn: async ({ text }: { text: string }) => {
      await client.messages.post(
        { sender: username, text },
        { query: { roomId } }
      );

      setInput("");
    },
  });

  return {
    sendMessage,
    isPending,
  };
}
