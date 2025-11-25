// src/styles/customerTableStyles.ts
import type { SxProps, Theme } from "@mui/material";

export const addButtonBox: SxProps<Theme> = {
  display: "flex",
  justifyContent: "flex-end",
  mb: 2,
};

export const tableRowHover: SxProps<Theme> = {
  "&:hover": { backgroundColor: "#f5f5f5" },
};

export const modalBox: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  mt: 1,
  minWidth: 300,
};
