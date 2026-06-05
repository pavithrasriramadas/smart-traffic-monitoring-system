function Dashboard() {
  return (
    <div className="container my-5">

      <h2 className="text-center mb-4">
        Traffic Dashboard
      </h2>

      <div className="row">

        <div className="col-md-3 mb-3">
          <div className="card dashboard-card">
            <div className="card-body text-center">
              <i className="bi bi-exclamation-triangle fs-1 text-danger"></i>
              <h5>Total Incidents</h5>
              <h2>120</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card dashboard-card">
            <div className="card-body text-center">
              <i className="bi bi-bell-fill fs-1 text-warning"></i>
              <h5>Active Alerts</h5>
              <h2>45</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card dashboard-card">
            <div className="card-body text-center">
              <i className="bi bi-check-circle-fill fs-1 text-success"></i>
              <h5>Resolved</h5>
              <h2>70</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card dashboard-card">
            <div className="card-body text-center">
              <i className="bi bi-speedometer2 fs-1 text-primary"></i>
              <h5>Traffic Density</h5>
              <h2>80%</h2>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;