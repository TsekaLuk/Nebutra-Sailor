import { useState } from "react";
import { Slider } from "@nebutra/ui/primitives";

export default function SliderOnValueChangeDemo() {
  const [value, setValue] = useState<number>(50);

  return <Slider onValueChange={setValue} value={value} />;
}
