import React from 'react'
import Link from 'next/link'
import { IonIcon } from '@ionic/react';

export default function bottomSection() {
  return (
     <> <footer>
          <Link className="linknavg" href="/"> <div className="nav-icon">
                  <IonIcon icon="home"></IonIcon>
           </div></Link>
           <Link className="linknavg nav-icon" href="/buat">
                    <IonIcon icon="create"></IonIcon>
           </Link>
       </footer>
   <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script></>
  );
}
