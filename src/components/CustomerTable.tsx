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

const CustomerTable = ({ customers: initialCustomers }: CustomerTableProps) => {
  const [customers, setCustomers] = useState<UserData[]>(initialCustomers);
  const [editingCustomer, setEditingCustomer] = useState<UserData | null>(null);
  const [open, setOpen] = useState(false);

  // Open modal for editing
  const handleEditClick = (customer: UserData) => {
    setEditingCustomer(customer);
    setOpen(true);
  };

  // Open modal for adding new record
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

  // Delete customer
  const handleDelete = (id: UserData["id"]) => {
    setCustomers((prev) => prev.filter((c) => c.id !== id));
  };

  // Close modal
  const handleClose = () => setOpen(false);

  // Save modal changes
  const handleSave = (updated: UserData) => {
    if (updated.id) {
      // Edit existing
      setCustomers((prev) =>
        prev.map((c) => (c.id === updated.id ? updated : c))
      );
    } else {
      // Add new
      setCustomers((prev) => [...prev, { ...updated, id: Date.now() }]);
    }
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
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
              <TableRow
                key={c.id}
                sx={{ "&:hover": { backgroundColor: "#f5f5f5" } }}
              >
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

      {/* Modal */}
      {editingCustomer && (
        <EditDialog
          open={open}
          data={editingCustomer}
          onClose={handleClose}
          onSave={handleSave}
        />
      )}
    </>
  );
};

export default CustomerTable;
