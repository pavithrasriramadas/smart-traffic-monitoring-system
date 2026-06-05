import { Link } from "react-router-dom";
import trafficData from "../data/trafficData";

function Events() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">
        Traffic Events
      </h2>

      <div className="row">
        {trafficData.map((event) => (
          <div
            className="col-md-4 mb-4"
            key={event.id}
          >
            <div className="card shadow h-100">
              <div className="card-body">
                <h3>{event.title}</h3>

                <p>
                  <strong>Location:</strong>{" "}
                  {event.location}
                </p>

                <p>
                  <strong>Severity:</strong>{" "}
                  {event.severity}
                </p>

                <p>
                  <strong>Time:</strong>{" "}
                  {event.time}
                </p>

                <Link
                  to="/event-details"
                  className="btn btn-primary"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;