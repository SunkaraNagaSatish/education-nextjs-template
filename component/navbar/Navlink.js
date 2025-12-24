"use client";
import React from "react";
import Link from "next/link";
import { useEduorContext } from "@/context/EduorContext";
import { usePathname } from "next/navigation";

const Navlink = ({ href, children }) => {
  const { isMobileNavOpen, setIsMobileNavOpen } = useEduorContext();
  const pathname = usePathname();

  const isActive = pathname === href;

  const handleLinkClick = (e) => {
    if (isMobileNavOpen) {
      setIsMobileNavOpen(false);
    }
  };

  return (
    <Link
      href={href}
      className={`nav-link ${isActive ? "active" : ""}`}
      onClick={handleLinkClick}
      prefetch={true}
    >
      {children}
    </Link>
  );
};

export default Navlink;
