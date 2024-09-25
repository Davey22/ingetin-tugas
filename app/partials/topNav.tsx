import React from 'react'
import Link from 'next/link'


export default function topNav() {
  return (
    <><nav className="top-nav">
        <h2><b>Jadwal Pelajaran</b></h2>
          <Link href="/semua">lihat semua</Link>
    </nav></>
  );
}
