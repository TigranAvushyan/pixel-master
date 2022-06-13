import UtmCountByMonth from "@/components/admin-dashboard/admin-dashboar-chats/UtmCountByMonth";
import AdminDashboard from "@/components/admin-dashboard/AdminDashboard";
import type { NextPage } from "next";


const Admin: NextPage = () => {

  return (
      <div className={"container text-center"}>
        <h1>Статистика</h1>
        <AdminDashboard />
      </div>
  );
};

export default Admin;
