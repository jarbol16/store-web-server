import React from "react";
import PageLayout from "../components/Layout/PageLayout";

const Home = () => {
  return (
    <PageLayout breadcrumb={"Home"}>
      <div className="home">
        <div className="home__center">
          <h1 className="home__h1">Bienvenido a Mercado Libre</h1>
        </div>
      </div>
    </PageLayout>
  )
}

export default Home;