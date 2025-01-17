import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div`
  min-height: 100%;
  width: 100%;
`;

const StyledToastContainer = styled(ToastContainer)`
  padding: 16px;
  padding-top: 70px;
`;

const Layout: React.FC = () => (
  <Container>
    <Header />
    <StyledToastContainer />
    <Outlet />
    <Footer />
  </Container>
);

export default Layout;
