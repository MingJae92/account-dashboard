// src/components/Dashboard.tsx
import { useState } from "react";
import {
  Grid,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Card,
  CardContent,
  Box,
  IconButton,
} from "@mui/material";

import type { UserData } from "../types/types";
import contactsData from "../data/contacts.json";
import CustomerTable from "./CustomerTable";

const Dashboard = () => {
  const [customerData, setCustomerData] = useState<UserData[]>(contactsData);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Customer Management Dashboard
      </Typography>

      {/* KPI Cards */}
      <Grid container spacing={2} mb={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: "#1976d2", color: "white" }}>
            <CardContent>
              <Typography variant="subtitle1">Total Customers</Typography>
              <Typography variant="h5">{customerData.length}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: "#388e3c", color: "white" }}>
            <CardContent>
              <Typography variant="subtitle1">Average Age</Typography>
              <Typography variant="h5">
                {(
                  customerData.reduce((a, c) => a + c.age, 0) /
                  customerData.length
                ).toFixed(1)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Customer Table */}
      <CustomerTable customers={customerData} />
    </Box>
  );
};

export default Dashboard;
