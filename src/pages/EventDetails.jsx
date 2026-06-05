function EventDetails() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">
        Traffic Event Details
      </h2>

      <div className="card shadow p-4">
        <h3>Major Accident</h3>

        <p>
          <strong>Location:</strong> Miyapur Junction
        </p>

        <p>
          <strong>Severity:</strong> High
        </p>

        <p>
          <strong>Date & Time:</strong> 06 June 2026, 10:30 AM
        </p>

        <p>
          <strong>Description:</strong> Multi-vehicle collision causing heavy traffic delays.
        </p>

        <p>
          <strong>Recommended Alternate Route:</strong> Use JNTU Road to avoid congestion.
        </p>
      </div>
    </div>
  );
}

export default EventDetails;