import UtmCountByMonth from "@/components/admin-dashboard/admin-dashboar-chats/UtmCountByMonth";
import React, { FC } from "react";


const AdminDashboard: FC = () => {
  return (
      <div className={'admin-dashboard-container'}>

        <div className="charts">
          <UtmCountByMonth />
        </div>

        <div className="tables">

        </div>
      </div>
  );
};

export default AdminDashboard;
