// src/components/CustomerTable.tsx
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from "@mui/material";

import type CustomerTableProps from "../types/types";

const CustomerTable = ({ customers, onEdit }: CustomerTableProps) => {
  return (
    <Paper sx={{ p: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Street</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Age</TableCell>
            {onEdit && <TableCell>Edit</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((c) => (
            <TableRow
              key={c.id}
              sx={{ "&:hover": { backgroundColor: "#f5f5f5" } }}
            >
              <TableCell>{c.name}</TableCell>
              <TableCell>{c.street}</TableCell>
              <TableCell>{c.email}</TableCell>
              <TableCell>{c.phone}</TableCell>
              <TableCell>{c.age}</TableCell>
              {onEdit && (
                <TableCell>
                  <IconButton color="primary" onClick={() => onEdit(c)}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default CustomerTable;
