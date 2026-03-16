/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { ReactionChip, MessageWithReactions } from "@nebutra/ui/primitives";
import { useState } from "react";

export default function MessageWithReactionsDemo() {
  const [selected, setSelected] = useState<string>();

  return (
    <div className="flex flex-col gap-6 items-start">
      {/* Pre-composed message with reactions */}
      <MessageWithReactions text="Great work on this feature! 🚀" />

      {/* Standalone chip */}
      <ReactionChip onSelect={setSelected} selected={selected} />
    </div>
  )
}
