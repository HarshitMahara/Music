"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "Learn from Experts",
        description:
            "Get trained by professional musicians with years of experience. Our expert instructors provide personalized guidance to help you master your favorite instrument and develop your musical skills.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="https://plus.unsplash.com/premium_photo-1674057858059-a2069f91232b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Learn from Experts"
                    priority
                />
            </div>
        ),
    },
    {
        title: "Real-Time Practice Sessions",
        description:
            "Join live practice sessions with fellow students and instructors. Get instant feedback, improve your technique, and enhance your confidence by playing in a collaborative environment.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="https://plus.unsplash.com/premium_photo-1661377339902-4aae67410d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Real-Time Practice Sessions"
                />
            </div>
        ),
    },
    {
        title: "Music Theory & Composition",
        description:
            "Understand the fundamentals of music theory and learn how to compose your own melodies. Our structured courses will help you build a strong foundation and unleash your creativity.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="https://images.unsplash.com/photo-1648461513491-c8dc79739211?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Music Theory & Composition"
                />
            </div>
        ),
    },
    {
        title: "Student Performances",
        description:
            "Showcase your talent through regular performances and recitals. Gain stage confidence, receive constructive feedback, and celebrate your musical journey with fellow students and mentors.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="https://plus.unsplash.com/premium_photo-1664301870516-32bc4c6edd42?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Student Performances"
                />
            </div>
        ),
    },
    {
        title: "",
        description:
            "",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
            </div>
        ),
    },
];


export default function WhyChooseUs() {
  return (
      <div>
        <StickyScroll content={content}/>
    </div>
  )
}
