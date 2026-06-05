import { useState } from "react";

function ReportTraffic() {
  const [formData, setFormData] = useState({
    type: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.type ||
      !formData.location ||
      !formData.description
    ) {
      alert("Please fill all fields");
      return;
    }

    const existingReports =
      JSON.parse(localStorage.getItem("reports")) || [];

    const newReport = {
      id: Date.now(),
      ...formData,
    };

    existingReports.push(newReport);

    localStorage.setItem(
      "reports",
      JSON.stringify(existingReports)
    );

    alert("Report Submitted Successfully");

    setFormData({
      type: "",
      location: "",
      description: "",
    });
  };

  return (
    <div className="container my-5">

      <h2 className="text-center mb-4">
        Report Traffic Issue
      </h2>

      <div className="card shadow p-4">

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">
              Incident Type
            </label>

            <select
              className="form-control"
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="">
                Select Incident
              </option>

              <option>
                Accident
              </option>

              <option>
                Congestion
              </option>

              <option>
                Road Damage
              </option>

              <option>
                Signal Malfunction
              </option>

            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">
              Location
            </label>

            <input
              type="text"
              className="form-control"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Description
            </label>

            <textarea
              className="form-control"
              rows="4"
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            className="btn btn-success"
            type="submit"
          >
            Submit Report
          </button>

        </form>

      </div>

    </div>
  );
}

export default ReportTraffic;