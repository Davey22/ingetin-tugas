"use client";

import '../../isi.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';


export default function TugasDetail() {
  const { ids } = useParams(); // Ambil ids dari URL
  const [task, setTask] = useState<any>(null);
  const [loading, setLoading] = useState(true); // State untuk loading

  useEffect(() => {
    if (ids) {
      console.log('Fetching data for ID:', ids); // Debugging
      fetch(`/api/idk/${ids}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Data fetched:', data); // Debugging
          setTask(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching task:', error);
          setLoading(false); // Matikan loading meskipun error
        });
    }
  }, [ids]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!task) {
    return <p>Task not found.</p>; // Pesan jika task tidak ditemukan
  }

  return (
    <div className="container">
      <header>
        <h1>{task.Title}</h1>
      </header>

      <main>
        <section className="info-table">
          <div className="info-row">
            <div className="info-cell">INFORMASI</div>
            <div className="info-cell">PENJELASAN</div>
          </div>
          <div className="info-row">
            <div className="info-cell">KODE GURU</div>
            <div className="info-cell">{task.Guru}</div>
          </div>
          <div className="info-row">
            <div className="info-cell">DEADLINE</div>
            <div className="info-cell">
              {task.Deadline ? new Date(task.Deadline).toLocaleString() : 'No Deadline'}
            </div>
          </div>
          <div className="info-row">
            <div className="info-cell">MAPEL</div>
            <div className="info-cell">{task.Mapel}</div>
          </div>
          <div className="info-row">
            <div className="info-cell">TIPE TUGAS</div>
            <div className="info-cell">{task.Tipe}</div>
          </div>
        </section>

        <section className="status">
          <h3>Status Tugas:</h3>
          <div className="toggle-switch">
            <input type="checkbox" id="status-toggle" />
            <label htmlFor="status-toggle"></label>
          </div>
        </section>

        <section className="notes">
          <h3>Catatan Tambahan:</h3>
          <textarea rows={6} readOnly value={task.Detail}></textarea>
        </section>
      </main>
    </div>
  );
}
