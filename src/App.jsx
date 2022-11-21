import React from "react";
import Review from "./components/Review";

const App = () => {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>What Our Clients Say About Us?</h2>
        </div>
        <Review />
      </section>
    </main>
  );
};

export default App;
