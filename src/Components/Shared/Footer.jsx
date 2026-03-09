"use client";
import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#0D4444] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo / Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Eid Salami</h2>
          <p className="text-sm text-white/80">
            Share joy, blessings, and digital salami with your juniors & seniors this Eid.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-[#FBBF24] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/give-salami" className="hover:text-[#FBBF24] transition-colors">
                Give Salami
              </Link>
            </li>
            <li>
              <Link href="/requests" className="hover:text-[#FBBF24] transition-colors">
                Requests
              </Link>
            </li>
            <li>
              <Link href="/leaderboard" className="hover:text-[#FBBF24] transition-colors">
                Leaderboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[#FBBF24] transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-[#FBBF24] transition-colors">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-[#FBBF24] transition-colors">
              <Instagram size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Eid Salami. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;