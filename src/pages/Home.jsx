import Dashboard from "../components/Dashboard";

function Home() {
  return (
    <>
      <section className="hero">

        <div className="container text-center">

          <h1 className="display-3 fw-bold">
            Smart Traffic Monitoring System
          </h1>

          <p className="lead">
            Monitor Traffic, Report Incidents,
            and Improve Road Safety.
          </p>

          <button className="btn btn-warning btn-lg mt-3">
            View Live Status
          </button>

        </div>

      </section>

      <Dashboard />

    </>
  );
}

export default Home;