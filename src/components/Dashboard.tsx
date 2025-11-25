// src/components/Dashboard.tsx
import { useState } from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";

import type { UserData } from "../types/types";
import contactsData from "../data/contacts.json";
import CustomerTable from "./CustomerTable";

// Import TS style objects
import {
  container,
  cardGrid,
  totalCustomersCard,
  averageAgeCard,
} from "../styles/dashboardStyles";

const Dashboard = () => {
  const [customerData, setCustomerData] = useState<UserData[]>(contactsData);

  return (
    <Box sx={container}>
      <Typography variant="h4" gutterBottom>
        Customer Management Dashboard
      </Typography>

      {/* KPI Cards */}
      <Grid container spacing={2} sx={cardGrid}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={totalCustomersCard}>
            <CardContent>
              <Typography variant="subtitle1">Total Customers</Typography>
              <Typography variant="h5">{customerData.length}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={averageAgeCard}>
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
