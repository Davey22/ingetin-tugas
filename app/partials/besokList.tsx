import React from 'react';
import { IonIcon } from '@ionic/react'; // Import the specific icon you want to use

export default function BesokList() {
  return (
    <>
      <div id="besok" className="tabcontent">
        <main>
          <div className="task">
            <h3>TUGAS BAHASA</h3>
            <p>harus menjelaskan materi tentang ..</p>
            <div className="deadline">
              <IonIcon icon="timeOutline" />
              <span> Deadline: Besok pukul 8:15</span>
            </div>
          </div>
        </main>
      </div>
      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </>
  );
}
