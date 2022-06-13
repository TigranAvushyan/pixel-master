import HomeSlides from "@/components/home/HomeSlides";
import MainLayout from "@/layout/MainLayout";
import type { NextPage } from "next";

const Home: NextPage = () => {

  return (
      <MainLayout>
        <HomeSlides />
      </MainLayout>
  );
};

export default Home;
