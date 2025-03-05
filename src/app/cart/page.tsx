"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { CartComponent } from "@/components/CartComponent";


export default function Cart() {
    return (
        <div className="h-[40rem] rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
            <CartComponent/>
            <ShootingStars />
            <StarsBackground />
        </div>
    );
}


