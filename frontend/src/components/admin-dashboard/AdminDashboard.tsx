import UtmCountByMonth from "@/components/admin-dashboard/admin-dashboar-chats/UtmCountByMonth";
import UtmTable from "@/components/admin-dashboard/admin-dashboard-tables/UtmTable";

import React, { FC } from "react";


const AdminDashboard: FC = () => {
  return (
      <div className={ "admin-dashboard-container" }>

        <div className="charts">
          <UtmCountByMonth />
        </div>

        <hr />

        <div className="tables">
          <UtmTable />
        </div>
      </div>
  );
};

export default AdminDashboard;
