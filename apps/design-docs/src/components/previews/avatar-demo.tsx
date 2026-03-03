"use client";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@nebutra/custom-ui/primitives";
export function AvatarDemo() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Avatar size="sm">
        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    </div>
  );
}
