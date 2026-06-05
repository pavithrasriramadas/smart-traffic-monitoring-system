import { useState } from "react";
import trafficData from "../data/trafficData";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = trafficData.filter(
    (event) =>
      event.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      event.location
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">
        Search Traffic Events
      </h2>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by location or event type..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
      />

      <div className="row">
        {filteredEvents.map((event) => (
          <div
            className="col-md-4 mb-4"
            key={event.id}
          >
            <div className="card shadow h-100">
              <div className="card-body">
                <h4>{event.title}</h4>

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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;