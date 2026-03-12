import React from "react";
import clsx from "clsx";

const types = {
  base: "rounded-md shadow-border",
  small: "rounded-md shadow-border-small",
  medium: "rounded-xl shadow-border-medium",
  large: "rounded-xl shadow-border-large",
  tooltip: "rounded-md shadow-tooltip",
  menu: "rounded-xl shadow-menu",
  modal: "rounded-xl shadow-modal",
  fullscreen: "rounded-2xl shadow-fullscreen"
};

interface SurfaceProps {
  type: keyof typeof types;
  children: React.ReactNode;
  className?: string;
  ref?: React.RefObject<HTMLDivElement | null> | React.RefCallback<HTMLDivElement | null> | null;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Surface = ({ type, children, className, ref, style, onClick }: SurfaceProps) => {
  return (
    <div
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick(e as unknown as React.MouseEvent<HTMLDivElement>);
        }
      }}
      className={clsx(
        "bg-background-100",
        types[type],
        className
      )}
      ref={ref}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
