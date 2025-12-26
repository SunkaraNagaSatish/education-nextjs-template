"use client";
import { useEduorContext } from "@/context/EduorContext";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const { isValidEmail } = useEduorContext();
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    email: "",
    currentClass: "",
    interestedStream: "",
    hostelFacility: false,
    transportation: false,
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.studentName || !formData.parentName || !formData.phone ||
      !formData.email || !formData.currentClass || !formData.interestedStream) {
      toast.error("Please fill out all required fields.", { position: "top-right" });
      return;
    }

    if (!isValidEmail(formData.email)) {
      toast.warning("Please provide a valid email address.", {
        position: "top-right",
      });
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      toast.warning("Please provide a valid 10-digit phone number.", {
        position: "top-right",
      });
      return;
    }

    // Success
    toast.success("Form submitted successfully! We will contact you soon.", {
      position: "top-right",
    });

    // Reset form
    setFormData({
      studentName: "",
      parentName: "",
      phone: "",
      email: "",
      currentClass: "",
      interestedStream: "",
      hostelFacility: false,
      transportation: false,
      message: ""
    });
  };

  return (
    <form onSubmit={handleFormSubmit} className="contact-form-vidisha">
      <div className="row">
        {/* Student Name */}
        <div className="col-xl-6 col-lg-4 col-md-6">
          <div className="form-group">
            <label htmlFor="studentName">Your Name <span className="required">*</span></label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              placeholder="Enter student's name"
              value={formData.studentName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Parent/Guardian Name */}
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="form-group">
            <label htmlFor="parentName">Parent/Guardian Name <span className="required">*</span></label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              placeholder="Enter parent/guardian name"
              value={formData.parentName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="form-group">
            <label htmlFor="phone">Phone Number <span className="required">*</span></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter 10-digit phone number"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="form-group">
            <label htmlFor="email">Email Address <span className="required">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Student's Current Class */}
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="form-group">
            <label htmlFor="currentClass">Student's Current Class <span className="required">*</span></label>
            <select
              id="currentClass"
              name="currentClass"
              value={formData.currentClass}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Class</option>
              <option value="completed-10th">Completed 10th Standard (Joining 1st Year)</option>
              <option value="completed-1st-year">Completed Intermediate 1st Year (Joining 2nd Year)</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Interested Stream */}
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="form-group">
            <label htmlFor="interestedStream">Interested Stream <span className="required">*</span></label>
            <select
              id="interestedStream"
              name="interestedStream"
              value={formData.interestedStream}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Stream</option>
              <option value="mpc-jee-mains">MPC with JEE Mains</option>
              <option value="mpc-jee-advanced">MPC with JEE Mains & Advanced</option>
              <option value="bipc-neet">BiPC with NEET</option>
              <option value="need-counseling">Need Counseling</option>
            </select>
          </div>
        </div>

        {/* Hostel Facility */}
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="form-group checkbox-group">
            <label className="checkbox-label">Interested in Hostel Facility?</label>
            <div className="checkbox-options">
              <label className="checkbox-option">
                <input
                  type="checkbox"
                  name="hostelFacility"
                  checked={formData.hostelFacility}
                  onChange={handleInputChange}
                />
                <span>Yes</span>
              </label>
            </div>
          </div>
        </div>

        {/* Transportation */}
        <div className="col-xl-6 col-lg-6 col-md-6">
          <div className="form-group checkbox-group">
            <label className="checkbox-label">Need Transportation?</label>
            <div className="checkbox-options">
              <label className="checkbox-option">
                <input
                  type="checkbox"
                  name="transportation"
                  checked={formData.transportation}
                  onChange={handleInputChange}
                />
                <span>Yes</span>
              </label>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="col-xl-12">
          <div className="form-group">
            <label htmlFor="message">Your Message/Questions</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Enter your message or questions here..."
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-xl-12">
          <button type="submit" className="common_btn_2">
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
