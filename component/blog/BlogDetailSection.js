"use client";
import { blogData } from "@/data/Data";
import Link from "next/link";
import React from "react";

const BlogDetailSection = ({ blogDesc }) => {
  return (
    <section className="tf__blog_details_page mt_195 xs_mt_100">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="tf__blog_details_area">
              <div className="tf__blog_details_img wow fadeInUp">
                <img
                  src={`/${blogDesc.imgSrc}`}
                  alt="blog details"
                  className="img-fluid w-100"
                />
              </div>
              <div className="tf__blog_details_text wow fadeInUp">
                <ul className="date d-flex flex-wrap">
                  <li>
                    <i className="far fa-user-edit"></i> {blogDesc.author}
                  </li>
                  <li>
                    <i className="fal fa-calendar-alt"></i> {blogDesc.date}
                  </li>
                </ul>
                <h3>{blogDesc.longTitle}</h3>
                <p style={{ textAlign: 'justify' }}>{blogDesc.longDesc}</p>
              </div>

            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-xl-12 col-lg-12">
            <div className="tf__sidebar">
              <div className="tf__sidebar_blog sidebar_item">
                <h3>Recent Post</h3>
                <ul className="d-flex flex-wrap justify-content-between">
                  {blogData.slice(0, 3).map((item) => (
                    <li key={item.id} style={{ width: '32%', marginBottom: '20px' }}>
                      <div className="img">
                        <img
                          src={`/${item.imgSrc}`}
                          alt="blog"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="text">
                        <p>
                          <i className="far fa-calendar-alt"></i> {item.date}
                        </p>
                        <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailSection;
