"use client";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="bg-background px-6 md:px-12 py-10 md:py-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">

                {/* Left Content */}
                <div>
                    <h1 className="text-2xl md:text-4xl font-semibold text-foreground">
                        Explore, <span className="text-primary">Experiment</span> & Discover
                    </h1>
                    <p className="mt-2 text-muted-foreground">
                        Bringing 700+ interactive experiments to your screen—free, online, and accessible anytime!
                        An initiative by IIT Delhi & 12 Institutes under the Ministry of Education.
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex space-x-4">
                        <button className="bg-button text-button-foreground px-6 py-2 rounded-lg shadow-md hover:opacity-90">
                            Learn
                        </button>
                        <button className="bg-accent text-accent-foreground px-6 py-2 rounded-lg shadow-md hover:opacity-90">
                            Create
                        </button>
                    </div>
                </div>

                {/* Right Content */}
                <div className="relative">
                    {/* Floating Text Bubble */}
                    <div className="absolute top-10 left-10 md:top-16 md:left-24 bg-white rounded-lg shadow-md px-4 py-2 text-sm text-foreground">
                        Your online lab, where curiosity meets discovery! 😊
                    </div>

                    {/* Stats */}
                    <div className="mt-12 grid grid-cols-2 gap-4">
                        <div className="border border-border bg-card px-4 py-2 rounded-lg text-center">
                            <p className="text-muted-foreground text-xs">USERS:</p>
                            <p className="text-xl font-semibold text-foreground">17.1 Million</p>
                        </div>
                        <div className="border border-border bg-card px-4 py-2 rounded-lg text-center">
                            <p className="text-muted-foreground text-xs">VIEWS:</p>
                            <p className="text-xl font-semibold text-foreground">123.1 Million</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;