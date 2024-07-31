import React, { useState, useEffect } from "react";

function WorkerCards() {
  const [workers, setWorkers] = useState([]);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3005/workers")
      .then((response) => response.json())
      .then((data) => setWorkers(data))
      .catch((error) => console.error("Error fetching workers:", error));
  }, []);

  const handleCardClick = (worker) => {
    setSelectedWorker(worker);
    setPassword("");
    setError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (password === selectedWorker.password) {
      // Redirect to worker's account page
      // Replace with your own logic
      console.log("Password correct! Redirecting to account page...");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <div>
      {workers.map((worker) => (
        <div key={worker.id} onClick={() => handleCardClick(worker)}>
          <h3>{worker.name}</h3>
          {/* Add other worker details here */}
        </div>
      ))}

      {selectedWorker && (
        <div>
          <h3>Enter password for {selectedWorker.name}</h3>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button onClick={handleLogin}>Login</button>
          {error && <p>{error}</p>}
        </div>
      )}
    </div>
  );
}

export default WorkerCards;
