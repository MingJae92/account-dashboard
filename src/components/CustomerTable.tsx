import { useState } from "react";
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import type { CustomerTableProps, UserData } from "../types/types";
import EditDialog from "./EditDialog";

import {
  addButtonBox,
  tableRowHover,
  modalBox,
} from "../styles/customerTableStyles";

const CustomerTable = ({ customers: initialCustomers }: CustomerTableProps) => {
  const [customers, setCustomers] = useState<UserData[]>(initialCustomers);
  const [editingCustomer, setEditingCustomer] = useState<UserData | null>(null);
  const [open, setOpen] = useState(false);

  const handleEditClick = (customer: UserData) => {
    setEditingCustomer(customer);
    setOpen(true);
  };

  const handleAddClick = () => {
    setEditingCustomer({
      id: null,
      name: "",
      street: "",
      email: "",
      phone: "",
      age: 0,
    });
    setOpen(true);
  };

  const handleDelete = (id: UserData["id"]) => {
    setCustomers((prev) => prev.filter((c) => c.id !== id));
  };

  const handleClose = () => setOpen(false);

  const handleSave = (updated: UserData) => {
    if (updated.id) {
      setCustomers((prev) =>
        prev.map((c) => (c.id === updated.id ? updated : c))
      );
    } else {
      setCustomers((prev) => [...prev, { ...updated, id: Date.now() }]);
    }
    setOpen(false);
  };

  return (
    <>
      <Box sx={addButtonBox}>
        <Button variant="contained" color="primary" onClick={handleAddClick}>
          Add Customer
        </Button>
      </Box>

      <Paper sx={{ p: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Street</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((c) => (
              <TableRow key={c.id} sx={tableRowHover}>
                <TableCell>{c.name}</TableCell>
                <TableCell>{c.street}</TableCell>
                <TableCell>{c.email}</TableCell>
                <TableCell>{c.phone}</TableCell>
                <TableCell>{c.age}</TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => handleEditClick(c)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(c.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {editingCustomer && (
        <EditDialog
          open={open}
          data={editingCustomer}
          onClose={handleClose}
          onSave={handleSave}
          sxBox={modalBox}
        />
      )}
    </>
  );
};

export default CustomerTable;
