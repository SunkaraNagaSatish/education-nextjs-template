"use client";
import React from "react";
import MPCStreamContent from "./content/MPCStreamContent";
import BiPCStreamContent from "./content/BiPCStreamContent";
import InfrastructureContent from "./content/InfrastructureContent";
import FacultyContent from "./content/FacultyContent";
import HolisticDevelopmentContent from "./content/HolisticDevelopmentContent";
import ParentalPartnershipContent from "./content/ParentalPartnershipContent";

const ServiceDetailSection = ({ slug }) => {
    const renderContent = () => {
        switch (slug) {
            case "mpc-stream":
                return <MPCStreamContent />;
            case "bipc-stream":
                return <BiPCStreamContent />;
            case "infrastructure":
                return <InfrastructureContent />;
            case "our-faculty":
                return <FacultyContent />;
            case "holistic-development":
                return <HolisticDevelopmentContent />;
            case "parental-partnership":
                return <ParentalPartnershipContent />;
            default:
                return <div>Content not found</div>;
        }
    };

    return (
        <section className="service-detail-section">
            <div className="background-overlay"></div>
            {renderContent()}

            <style jsx>{`
        .service-detail-section {
          position: relative;
          padding: 130px 0 80px 0;
          min-height: 100vh;
          background-image: url('/images/what-we-offer-bg.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          background-repeat: no-repeat;
        }

        .background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.95);
          z-index: 1;
        }

        @media (max-width: 768px) {
          .service-detail-section {
            padding: 60px 0;
            background-attachment: scroll;
          }
        }
      `}</style>
        </section>
    );
};

export default ServiceDetailSection;
