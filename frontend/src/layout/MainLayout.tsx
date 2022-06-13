import AppHeader from "@/components/header/AppHeader";
import AppFooter from "@/footer/AppFooter";
import Head from "next/head";
import React, { FC, ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
}

const MainLayout: FC<MainLayoutProps> = ({ children, title = "IKSLine" }) => (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>{ title }</title>
      </Head>

      <AppHeader />

      { children }

      <AppFooter />

      <script type="text/javascript" src="../../styles/js/jquery/jquery-2.2.4.min.js" />
      <script type="text/javascript" src="../../styles/js/bootstrap/popper.min.js" />
      <script type="text/javascript" src="../../styles/js/bootstrap/bootstrap.min.js" />
      <script type="text/javascript" src="../../styles/js/plugins/plugins.js" />
      <script type="text/javascript" src="../../styles/js/active.js" />
    </>
);

export default MainLayout;
