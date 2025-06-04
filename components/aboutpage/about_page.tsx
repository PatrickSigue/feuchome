"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

import '../../css/pat_global.css';
import OurHistory from './OurHistory';
import Agenda from './agenda';
import Exec1 from './about_exec';
import Exec2 from './about_exec2';
import Cen from './about_cen';
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
      <div className="snap-y snap-mandatory overflow-y-auto h-screen scroll-pt-60px">
        <div id="our-history" className="snap-center max-h-screen">
          <OurHistory />
        </div>
        <div id="agenda" className="snap-center max-h-screen">
          <Agenda />
        </div>
        <div id="exec1" className="snap-center max-h-screen">
          <Exec1 />
        </div>
        <div id="exec2" className="snap-center max-h-screen">
          <Exec2 />
        </div>
        <div id="cen" className="snap-center max-h-screen pt-[15vh] pl-[15vh]">
          <Cen />
        </div>
      </div>
    </>
  );
}

export default About;
