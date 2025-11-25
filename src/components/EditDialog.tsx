import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
} from "@mui/material";
import type { EditDialogProps, UserData } from "../types/types";

const EditDialog = ({
  open,
  data,
  onClose,
  onSave,
  sxBox,
}: EditDialogProps) => {
  const [formData, setFormData] = useState<UserData>(data);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleChange = (field: keyof UserData, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{data.id ? "Edit Customer" : "Add Customer"}</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 1,
            minWidth: 300,
            ...sxBox,
          }}
        >
          <TextField
            label="Name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <TextField
            label="Street"
            value={formData.street}
            onChange={(e) => handleChange("street", e.target.value)}
          />
          <TextField
            label="Email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <TextField
            label="Phone"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
          <TextField
            label="Age"
            type="number"
            value={formData.age}
            onChange={(e) => handleChange("age", +e.target.value)}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;
