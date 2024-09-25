"use client";

import BottomSection from "./partials/bottomSection";
import HeaderSection from "./partials/headerSection";
import TopNav from "./partials/topNav";
import ListKonten from "./partials/listKonten";

import './style.css'
import './index.js'


export default function Home() {

  return (
      <body>
        <div className="container">
        <HeaderSection />
        <TopNav />
        <ListKonten />
        <BottomSection />
        </div>
        
    </body>
  );
}
