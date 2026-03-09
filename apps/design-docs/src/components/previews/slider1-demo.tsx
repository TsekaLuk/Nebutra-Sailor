import { useState } from "react";
import { Slider } from "@/components/ui/slider-1";

export default function DemoOne() {
  const [value, setValue] = useState<number>(50);

  return <Slider onValueChange={setValue} value={value} />;
}
