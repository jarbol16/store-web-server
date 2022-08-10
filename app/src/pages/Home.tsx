import React from "react";
import PageLayout from "../components/Layout/PageLayout";

const Home = () => {
  return (
    <PageLayout breadcrumb={"Home"}>
      <div className="home">
        <div className="home__center">
          <h2>Bienvenido a Mercado Libre</h2>
        </div>
      </div>
    </PageLayout>
  )
}

export default Home;