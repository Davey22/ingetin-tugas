"use client";

import { useState, useEffect } from 'react';
import '../style.css';
import BottomSection from '../partials/bottomSection';

export default function Semua() {
  const [mapel, setMapel] = useState('');
  const [guru, setGuru] = useState('');
  const [deadline, setDeadline] = useState('');
  const [tipe, setTipe] = useState('');
  const [detail, setDetail] = useState('');

  const mapelGuruMapping = {
    'Sejarah': 'SELVI FARIDA',
    'Jepang': 'SITI AISYAH',
    'Mjt': 'TARYANTO',
    'Dt': 'BAYHAQY',
    'Ipas': 'HENISAH PASARIBU',
    'Pjok': 'DONNY ZUSTITIAWAN',
    'Pb': 'SEPTIANDARI',
    'Bahasa Sunda': 'Dra. SUDIARTI',
    'Matematika': 'NURUL HIKMAH',
    'K3lh': 'NUR SULAIMAN',
    'Bahasa Indonesia': 'SONNIA SEPTIANI',
    'Pau': 'IHYA ULUMUDDIN',
    'Seni Budaya': 'RURI RAKASIWI',
    'Pk': 'SEPTIANDARI',
    'Bahasa Inggris': 'BATARI RAHMA SYAFINA',
    'Agama': 'NUR INAYAH',
    'Informatika': 'ADAM MALIK MUIS'
  };

  useEffect(() => {
    if (mapelGuruMapping[mapel]) {
      setGuru(mapelGuruMapping[mapel]);
    } else {
      setGuru('');
    }
  }, [mapel]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = {
      Title: `Tugas ${mapel}`,
      About: detail.split('\n')[0],  // Take the first line of detail as about
      Deadline: deadline,
      Ids: new Date().getTime().toString().slice(-5),
      Guru: guru,
      Mapel: mapel,
      Tipe: tipe,
      Detail: detail
    };

    const res = await fetch('/api/task-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    });

    if (res.ok) {
      alert('Task submitted successfully!');
    } else {
      alert('Failed to submit task');
    }
  };

  return (
    <div className="container">
      <header className='buatH'>
          <h1>Buat Tugas</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
        <div className="b-form-group">
          <label htmlFor="mapel">MAPEL:</label>
          <select
            id="mapel"
            name="mapel"
            value={mapel}
            onChange={(e) => setMapel(e.target.value)}
          >
            <option value="" disabled>pilih satu ngab</option>
            <optgroup label="SENIN">
              <option value="Sejarah">Sejarah</option>
              <option value="Jepang">Jepang</option>
              <option value="Mjt">MJT</option>
              <option value="Dt">DT</option>
              <option value="Ipas">Ipas</option>
            </optgroup>
            <optgroup label="SELASA">
              <option value="Pjok">PJOK</option>
              <option value="Pb">PB</option>
              <option value="Bahasa Sunda">Bahasa Sunda</option>
              <option value="Matematika">Matematika</option>
              <option value="K3lh">K3LH</option>
              <option value="Bahasa Indonesia">Bahasa Indonesia</option>
            </optgroup>
            <optgroup label="RABU">
              <option value="Pau">PAU</option>
              <option value="Ipas">Ipas</option>
              <option value="Seni Budaya">Seni Budaya</option>
              <option value="Matematika">Matematika</option>
              <option value="Pk">PK</option>
              <option value="Bahasa Inggris">Bahasa Inggris</option>
            </optgroup>
            <optgroup label="KAMIS">
              <option value="Agama">Agama</option>
              <option value="Bahasa Indonesia">Bahasa Indonesia</option>
              <option value="Informatika">Informatika</option>
              <option value="Ipas">Ipas</option>
            </optgroup>
          </select>
        </div>

        <div className="b-form-group">
          <label htmlFor="guru">GURU:</label>
          <input 
            type="text" 
            id="guru" 
            name="guru" 
            list="guru-list" 
            autoComplete="off" 
            value={guru}
            onChange={(e) => setGuru(e.target.value)}
          />
          <datalist id="guru-list">
            <option value="SELVI FARIDA"></option>
            <option value="SITI AISYAH"></option>
            <option value="TARYANTO"></option>
            <option value="BAYHAQY"></option>
            <option value="HENISAH PASARIBU"></option>
            <option value="DONNY ZUSTITIAWAN"></option>
            <option value="SEPTIANDARI"></option>
            <option value="Dra. SUDIARTI"></option>
            <option value="NURUL HIKMAH"></option>
            <option value="NUR SULAIMAN"></option>
            <option value="SONNIA SEPTIANI"></option>
            <option value="IHYA ULUMUDDIN"></option>
            <option value="RURI RAKASIWI"></option>
            <option value="BATARI RAHMA SYAFINA"></option>
            <option value="NUR INAYAH"></option>
            <option value="ADAM MALIK MUIS"></option>
          </datalist>
        </div>

        <div className="b-form-group">
          <label htmlFor="deadline">DEADLINE:</label>
          <div className="input-with-icon">
            <input 
              type="date"  
              id="deadline" 
              name="deadline" 
              placeholder="yyyy-mm-dd" 
              value={deadline || ''}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>

        </div>

        <div className="b-form-group">
            <label htmlFor="tipe-tugas">TIPE TUGAS:</label>
            <select 
              id="tipe-tugas" 
              name="tipe-tugas" 
              value={tipe}
              onChange={(e) => setTipe(e.target.value)}
            >
                <option value="" disabled>pilih satu aja jangan suka mendua :(</option>
                <option value="essay">Essay</option>
                <option value="multiple-choice">Pilihan Ganda</option>
                <option value="Hafalan">Hafalan</option>
                <option value="Kelompok">Kelompok</option>
                <option value="Informasi">Informasi</option>
              <option value="Praktek">Praktek</option>
            </select>
        </div>

        <div className="b-form-group">
            <label htmlFor="detail-tugas">DETAIL TUGAS:</label>
            <textarea 
              id="detail-tugas" 
              className="bdetail" 
              name="detail-tugas" 
              rows={4} 
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            ></textarea>
        </div>

        <div className="b-form-group">
          <button className="submit">Kirim Sekarang</button>
          </div>
          </form>
      </main>
      <BottomSection />
    </div>
  );
}
