import React, { useEffect, useState } from 'react';
import '../index.js';
import { IonIcon } from '@ionic/react';

function truncateText(text, maxSentences) {
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    const truncated = sentences.slice(0, maxSentences).join(' ').trim();
    return sentences.length > maxSentences ? truncated + '...' : truncated;
}

export default function ListKonten() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Function to fetch tasks
  const fetchTasks = () => {
    fetch('/api/task')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setTasks(data);
        } else {
          console.error('Unexpected data format:', data);
          setTasks([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setTasks([]);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTasks(); // Initial fetch

    const interval = setInterval(() => {
      fetchTasks(); // Fetch periodically
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <main>
      {loading ? (
        <div className="loading">
          <p>sabar tod lagi baca database...</p>
        </div>
      ) : (
        tasks.map((task, index) => (
          <section
            onClick={() => window.location.href = `/tugas/${task.Ids}`}
            className="task"
            key={index}
          >
            <h3 className="titekntn"><b>{task.Title}</b></h3>
            <p>{truncateText(task.About, 1)}</p>
            <div className="deadline">
              <IonIcon name="time"></IonIcon>
              <span> Deadline: {new Date(task.Deadline).toLocaleString()}</span>
            </div>
          </section>
        ))
      )}
    </main>
  );
}
