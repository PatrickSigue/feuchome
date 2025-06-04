"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../css/nav.css";

type Menu = "about" | "directory" | "initiatives" | "downloadables";

export function Nav() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<Menu | null>(null);
  const [isGoldHeader, setIsGoldHeader] = useState(false);

  const handleMenuClick = (menu: Menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".about-feucso")) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("click", handleOutsideClick);

    let observer: IntersectionObserver | undefined;

    if (pathname === "/") {
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsGoldHeader(!entry.isIntersecting);
        },
        { root: null, threshold: 0.1 }
      );

      const firstSection = document.querySelector(".snap-center:first-child");
      if (firstSection) {
        observer.observe(firstSection);
      }

      return () => {
        document.removeEventListener("click", handleOutsideClick);
        if (observer && firstSection) {
          observer.unobserve(firstSection);
        }
      };
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      setIsGoldHeader(false);
    };
  }, [pathname]);

  return (
    <header className={isGoldHeader ? "gold-header" : ""}>
      <div className="branding">
        <strong>FEUCSO</strong>
        <span>CENTRAL STUDENT ORGANIZATION</span>
      </div>
      <nav className="nav-links">
        <Link href="/">HOME</Link>

        <div
          className={`about-feucso ${activeMenu === "about" ? "active" : ""}`}
          onClick={() => handleMenuClick("about")}
        >
          {/* For dropdown triggers, <a> without href to avoid page reload */}
          <a href="#" onClick={(e) => e.preventDefault()}>
            ABOUT FEUCSO
          </a>
          <div className="dropdown-content">
            <Link href="/about#our-history">OUR HISTORY</Link>
            <Link href="/about#agenda">UNSTOPPABLE 4-POINT AGENDA</Link>
            <Link href="/about#exec1">EXECUTIVE BOARD</Link>
            <Link href="/about#exec2">BOARD OF DIRECTORS</Link>
          </div>
        </div>

        <div
          className={`about-feucso ${activeMenu === "directory" ? "active" : ""}`}
          onClick={() => handleMenuClick("directory")}
        >
          <a href="#" onClick={(e) => e.preventDefault()}>
            DIRECTORY
          </a>
          <div className="dropdown-content">
            <a href="#">FEU DIRECTORY</a>
            <a href="#">ACADEMIC ORGANIZATIONS</a>
            <a href="#">UNI-WIDE ORGANIZATION</a>
            <a href="#">INSTITUTE STUDENT COUNCILS</a>
          </div>
        </div>

        <div
          className={`about-feucso ${activeMenu === "initiatives" ? "active" : ""}`}
          onClick={() => handleMenuClick("initiatives")}
        >
          <a href="#" onClick={(e) => e.preventDefault()}>
            INITIATIVES
          </a>
          <div className="dropdown-content">
            <a href="#">STATEMENTS</a>
            <a href="#">INITIATIVES AND PARTICIPATION</a>
            <a href="#">ROUTINARY EVENTS</a>
            <a href="#">CAMPAIGNS</a>
          </div>
        </div>

        <div
          className={`about-feucso ${activeMenu === "downloadables" ? "active" : ""}`}
          onClick={() => handleMenuClick("downloadables")}
        >
          <a href="#" onClick={(e) => e.preventDefault()}>
            DOWNLOADABLES
          </a>
          <div className="dropdown-content">
            <a href="#">FEUCSO CBL</a>
            <a href="#">FEU STUDENT HANDBOOK</a>
            <a href="#">FEU CONGRESS RESOLUTIONS</a>
            <a href="#">PROGRESS REPORTS</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <>
      <div className="nav-pad"></div>
      <div className="nav">Placeholder</div>
    </>
  );
}
