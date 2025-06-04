"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

import '../../css/pat_global.css';
import OurHistory from './OurHistory';
import Agenda from './agenda';
import Exec1 from './about_exec';
import Exec2 from './about_exec2';
import Cen from './about_cen';
import { Dir1, Dir2, Dir3, Dir4, Dir5, Dir6, Dir7, Dir8, Dir9, Dir10, Dir11, Dir12 } from './about_dir';
import { Nav } from '../nav/nav';

function About() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, searchParams]);

  return (
    <>
      <Nav />
      <div className="snap-y snap-proximity overflow-y-auto h-screen scroll-pt-60px">
        <div id="our-history" className="snap-start min-h-screen">
          <OurHistory />
        </div>
        <div id="agenda" className="snap-start min-h-screen">
          <Agenda />
        </div>
        <div id="exec1" className="snap-start min-h-screen">
          <Exec1 />
        </div>
        <div id="exec2" className="snap-start min-h-screen">
          <Exec2 />
        </div>
        <div id="cen" className="snap-start min-h-screen pt-[15vh] pl-[15vh]">
          <Cen />
        </div>
        <div id="dir1" className="snap-start min-h-screen">
          <Dir1 />
        </div>
        <div id="dir2" className="snap-start min-h-screen">
          <Dir2 />
        </div>
        <div id="dir3" className="snap-start min-h-screen">
          <Dir3 />
        </div>
        <div id="dir4" className="snap-start min-h-screen">
          <Dir4 />
        </div>
        <div id="dir5" className="snap-start min-h-screen">
          <Dir5 />
        </div>
        <div id="dir6" className="snap-start min-h-screen">
          <Dir6 />
        </div>
        <div id="dir6" className="snap-start min-h-screen">
          <Dir7 />
        </div>
        <div id="dir6" className="snap-start min-h-screen">
          <Dir8 />
        </div>
        <div id="dir6" className="snap-start min-h-screen">
          <Dir9 />
        </div>
        <div id="dir6" className="snap-start min-h-screen">
          <Dir10 />
        </div>
        <div id="dir6" className="snap-start min-h-screen">
          <Dir11 />
        </div>
        <div id="dir6" className="snap-start min-h-screen">
          <Dir12 />
        </div>
      </div>
    </>
  );
}

export default About;
