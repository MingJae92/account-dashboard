import type { Key } from "react";

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
}
