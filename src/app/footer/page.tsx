'use client'
import React from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/HemanthGirimath', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/hemanth-girimath-3a6501194?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/HGirimath', label: 'Twitter' },

  ];

  return (
    <footer className="w-full bg-black mt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side - Contact info */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-zinc-400 hover:text-green-400 transition-colors">
              <Mail size={18} />
              <a href="mailto:hemanthgirimath888@gmail.com" className="text-sm">
                hemanthgirimath888@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <MapPin size={18} />
              <span className="text-sm">Hubli, Karnataka</span>
            </div>
          </div>

          {/* Right side - Social links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-green-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <Separator className="my-8 bg-zinc-800" />

        {/* Copyright */}
        <div className="text-center text-sm text-zinc-400 w-full">
          © {currentYear} Hemant Girimath. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;