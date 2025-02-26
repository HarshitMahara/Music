import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
    const testimonials = [
        {
            quote:
                "This school has completely transformed my understanding of music theory. The courses are structured so well, and the faculty is amazing!",
            name: "Sophia Carter",
            designation: "Music Theory Student",
            src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "The instructors here are incredibly talented and patient. My confidence in playing the piano has skyrocketed!",
            name: "Olivia Martinez",
            designation: "Piano Student",
            src: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "I never thought I'd be able to play the guitar this well in just a few months! The personalized lessons made learning so much fun.",
            name: "Liam Johnson",
            designation: "Guitar Student",
            src: "https://images.unsplash.com/photo-1509098681029-b45e9c845022?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "The vocal training sessions here are top-notch. My range and technique have improved dramatically thanks to my instructor’s guidance.",
            name: "Ethan Williams",
            designation: "Vocal Student",
            src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            quote:
                "The best decision I ever made was enrolling my child here! The teachers are nurturing, and the progress in just a few months has been incredible.",
            name: "Emma Wilson",
            designation: "Parent of a Young Learner",
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];
    return (
        <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <h1 className="text-center text-5xl mb-10">Testimonials</h1>

            <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>

    )
}

