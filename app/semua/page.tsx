"use client";

import '../style.css'
import BottomSection from "../partials/bottomSection";
import HeaderSection from "../partials/headerSection";
import TagModule from "../partials/tagModule";
import ListKonten from "../partials/listKonten";

export default function semua() {

  return (
    <body>
      <div className="container"> 
        <HeaderSection/> 
        <TagModule/>
        <ListKonten />
        <BottomSection/>
      </div>
    </body>
  );
}
