"use client";
import Image from "next/image";
import Logo from "/public/logo.svg";
import { Facebook, Linkedin } from "lucide-react"; // Using Lucide Icons

export default function Footer() {
    return (
        <footer className="bg-primary text-foreground py-10 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                {/* Address Section */}
                <div>
                    <Image src={Logo} alt="Virtual Labs Logo" width={150} height={50} priority />
                    <p className="mt-4 text-secondary">
                        <strong>Address:</strong>
                        <br />
                        Engineering and Architecture Division, ROOM NBDS-203, VIndhya C4, IIIT-H, Gachibowli, Hyderabad - 500032
                    </p>
                    <p className="mt-2 text-secondary">
                        <strong>Contact:</strong>
                        <br />
                        +91-9177793456 <br />
                        support@vlabs.ac.in
                    </p>
                </div>

                {/* Services Section */}
                <div>
                    <h2 className="font-heading text-lg text-accent">Services</h2>
                    <ul className="mt-3 space-y-2 text-secondary">
                        <li>Research</li>
                        <li>Create an Experiment</li>
                        <li>Learn an Experiment</li>
                        <li>Conduct Workshops</li>
                    </ul>
                </div>

                {/* Get in Touch Section */}
                <div>
                    <h2 className="font-heading text-lg text-accent">Get In Touch</h2>
                    <ul className="mt-3 space-y-2 text-secondary">
                        <li>Email: support@vlab.co.in</li>
                        <li>Phone: 011-28562050</li>
                        <li>Wireless Research Lab: Room No - 206/1A</li>
                        <li>Bharti School of Telecom, IIT Delhi, Hauz Khas, <strong>New Delhi-110016</strong></li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 bg-[var(--blue-text)] text-[var(--background)] border border-border-light dark:border-border-dark pt-4 flex flex-col md:flex-row items-center justify-between">
                <p className="text-sm text-muted">&copy; 2025, VirtualLabs</p>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a href="#" className="text-xl text-blue-light hover:text-blue-dark">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-xl text-green-light hover:text-green-dark">
                        <Facebook className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
