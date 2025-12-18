"use client";
import { useEduorContext } from "@/context/EduorContext";
import Link from "next/link";
import React from "react";

const BannerSection = () => {
  const { handleVideoShow } = useEduorContext();
  return (
    <section className="tf__banner">
      <div className="container">
        <div className="row">
          {/* <img src></img> */}
          <div className="col-xl-7 col-lg-8 ">
            <div className="tf__banner_text wow fadeInUp">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
