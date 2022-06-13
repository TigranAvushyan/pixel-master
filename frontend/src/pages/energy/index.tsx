import MainLayout from "@/layout/MainLayout";
import EnergyPortfolio from "@/pages/energy/EnergyPortfolio";
import { NextPage } from "next";
import React, { FC } from "react";



const Energy: NextPage  = () => {
  return (
      <MainLayout>
        <EnergyPortfolio />
      </MainLayout>
  );
};

export default Energy;
