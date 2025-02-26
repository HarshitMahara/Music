'use client'
import React from 'react'

import { HoverEffect } from "./ui/card-hover-effect";
import Link from 'next/link'

const projects = [
    {
        title: "Melody Masterclass",
        description:
            "An interactive webinar exploring the fundamentals of melody creation and songwriting techniques.",
        link: "/",
    },
    {
        title: "Rhythm Revolution",
        description:
            "A deep dive into rhythm patterns, beat-making, and the evolution of percussion in modern music.",
        link: "/course",
    },
    {
        title: "Music Production 101",
        description:
            "A beginner-friendly session covering DAWs, mixing, and mastering for aspiring producers.",
        link: "/contact",
    },
    {
        title: "The Art of Live Performance",
        description:
            "Learn stage presence, vocal techniques, and live sound setup to captivate audiences.",
        link: "/123",
    },
    {
        title: "Music Business & Marketing",
        description:
            "A guide to building a music brand, understanding streaming royalties, and marketing strategies for independent artists.",
        link: "/456",
    },
    {
        title: "Electronic Music Production",
        description:
            "An advanced session focusing on synthesizers, sound design, and electronic music genres.",
        link: "/789",
    },
];

export default function Webinar() {
    return (

        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
                </div>
            </div>
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={projects} />
            </div>

            <div className="mt-10 text-center">
                <Link href={'./courses'}
                    className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                    View All Webinar
                </Link>
            </div>
        </div>
    )
}

