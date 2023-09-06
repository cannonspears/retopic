import React, { useState, useEffect } from "react";
import RealEstate from "./topics/RealEstate";

function App() {
  const [topic, setTopic] = useState("");

  const fetchTopic = async () => {
    try {
      const response = await fetch("http://localhost:5000/real-estate");
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      const { data } = await response.json();
      return data.topic;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTopic();
      setTopic(data);
    };

    fetchData();
  }, []);

  const generate = async () => {
    const fetchData = async () => {
      const data = await fetchTopic();
      setTopic(data);
    };

    fetchData();
  };

  return (
    <div className="App">
      <RealEstate topic={topic} />
      <button onClick={generate}>Generate New Topic</button>
    </div>
  );
}

export default App;