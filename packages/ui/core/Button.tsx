/** @jsxImportSource theme-ui */

import * as React from "react";
import { Button as UIButton } from "theme-ui";
import type { ButtonProps as UIButtonProps } from "theme-ui";

type ButtonProps = {
  children: React.ReactNode;
} & UIButtonProps;

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <UIButton
      sx={{
        ":hover": {
          backgroundColor: "hsl(0 0% 50% / 90%)",
          cursor: "pointer",
        },
      }}
      {...rest}
    >
      {children}
    </UIButton>
  );
};
