import type { Key } from "react";

export interface UserData {
    id: Key | null | undefined;
    name: string;
    street:string;
    email: string;
    phone: string;
    age: number;
}

export default interface CustomerTableProps {
  customers: UserData[];
  onEdit?: (customer: UserData) => void;
}

