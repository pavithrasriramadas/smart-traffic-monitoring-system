import { useEffect, useState } from "react";

function MyReports() {
  const [reports, setReports] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedLocation, setEditedLocation] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  useEffect(() => {
    const savedReports =
      JSON.parse(localStorage.getItem("reports")) || [];

    setReports(savedReports);
  }, []);

  const deleteReport = (id) => {
    const updatedReports = reports.filter(
      (report) => report.id !== id
    );

    setReports(updatedReports);

    localStorage.setItem(
      "reports",
      JSON.stringify(updatedReports)
    );
  };

  const startEdit = (report) => {
    setEditingId(report.id);
    setEditedLocation(report.location);
    setEditedDescription(report.description);
  };

  const saveEdit = (id) => {
    const updatedReports = reports.map((report) =>
      report.id === id
        ? {
            ...report,
            location: editedLocation,
            description: editedDescription,
          }
        : report
    );

    setReports(updatedReports);

    localStorage.setItem(
      "reports",
      JSON.stringify(updatedReports)
    );

    setEditingId(null);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">
        My Reports
      </h2>

      {reports.length === 0 ? (
        <h4 className="text-center">
          No Reports Found
        </h4>
      ) : (
        <div className="row">
          {reports.map((report) => (
            <div
              className="col-md-4 mb-4"
              key={report.id}
            >
              <div className="card shadow h-100">
                <div className="card-body">

                  <h4>{report.type}</h4>

                  {editingId === report.id ? (
                    <>
                      <input
                        type="text"
                        className="form-control mb-2"
                        value={editedLocation}
                        onChange={(e) =>
                          setEditedLocation(
                            e.target.value
                          )
                        }
                      />

                      <textarea
                        className="form-control mb-2"
                        rows="3"
                        value={editedDescription}
                        onChange={(e) =>
                          setEditedDescription(
                            e.target.value
                          )
                        }
                      ></textarea>

                      <button
                        className="btn btn-success me-2"
                        onClick={() =>
                          saveEdit(report.id)
                        }
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      <p>
                        <strong>Location:</strong>{" "}
                        {report.location}
                      </p>

                      <p>
                        <strong>Description:</strong>{" "}
                        {report.description}
                      </p>

                      <button
                        className="btn btn-warning me-2"
                        onClick={() =>
                          startEdit(report)
                        }
                      >
                        Edit
                      </button>
                    </>
                  )}

                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      deleteReport(report.id)
                    }
                  >
                    Delete
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyReports;