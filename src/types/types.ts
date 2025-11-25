import type { Key } from "react";
import type { SxProps, Theme } from "@mui/material";

export interface UserData {
  id: Key | null | undefined;
  name: string;
  street: string;
  email: string;
  phone: string;
  age: number;
}

export interface CustomerTableProps {
  customers: UserData[];
  onEdit?: (customer: UserData) => void;
}

export interface EditDialogProps {
  open: boolean;
  data: UserData;
  onClose: () => void;
  onSave: (updated: UserData) => void;
  sxBox?: SxProps<Theme>;
}
