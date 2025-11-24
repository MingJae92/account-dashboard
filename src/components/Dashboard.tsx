import React, { useEffect, useState } from "react";
import axios from "axios";

import type { UserData } from "../types/types";

function Dashboard() {
  const [contactData, setContactData] = useState<UserData[]>([]);

  useEffect(() => {
    axios
      .get("/data/contacts.json")
      .then((res) => {
        setContactData(res.data);
      })
      .catch((err) => console.error("Failed to load JSON:", err));
  }, []);

  return (
    <div>
      Dashboard

      {/* Example display */}
      {contactData.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default Dashboard;
