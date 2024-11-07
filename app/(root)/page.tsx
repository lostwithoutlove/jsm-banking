import HeaderBox from "@/components/headerbox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Abi" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">Welcome Adrian</header>
      </div>
    </section>
  );
};

export default Home;
