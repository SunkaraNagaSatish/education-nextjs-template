'use client'
import Link from 'next/link'
import React from 'react'

const BreadcrumbSection = ({ header, title, className, bgImage }) => {
    // Create a custom class name based on bgImage prop
    const customClass = bgImage ? `breadcrumb-${bgImage.replace(/\.(png|jpg|jpeg)$/, '')}` : '';

    return (
        <section className={`tf__breadcrumb ${className || ''} ${customClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tf__breadcrumb_text">
                            <h2>{header}</h2>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><a href="#">{title}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BreadcrumbSection