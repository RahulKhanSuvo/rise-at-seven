"use client";

import React from "react";

export default function FooterBottomBar() {
  return (
    <>
      {/* Left/Middle: Info and Legal */}
      <div className="flex gap-x-2 gap-y-2 flex-wrap items-center md:gap-3">
        <InfoItem text="© 2025 Rise at Seven Ltd. All rights reserved" />
        <Dot />
        <InfoItem text="Company Number 11955187" />
        <Dot />
        <InfoItem text="VAT Registered GB 322402945" />
        <Dot />
        <a
          href="https://riseatseven.com/privacy-policy/"
          className="text-white font-light leading-tight text-[10px] md:text-xs hover:underline decoration-mint underline-offset-4 transition-all"
        >
          Privacy Policy
        </a>
        <Dot />
        <a
          href="https://riseatseven.com/terms-conditions/"
          className="text-white font-light leading-tight text-[10px] md:text-xs hover:underline decoration-mint underline-offset-4 transition-all"
        >
          Terms & conditions
        </a>
      </div>

      {/* Right: Credit */}
      <div className="w-full mt-1 md:ml-auto md:text-right lg:mt-0 lg:w-auto">
        <a
          href="https://madebyshape.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-light leading-tight text-[10px] md:text-xs hover:underline decoration-mint underline-offset-4 transition-all"
        >
          Website MadeByShape
        </a>
      </div>
    </>
  );
}

function InfoItem({ text }: { text: string }) {
  return (
    <div className="text-white font-light leading-tight text-[10px] md:text-xs">
      {text}
    </div>
  );
}

function Dot() {
  return (
    <div className="w-1 h-1 rounded-full bg-white inline-flex md:mt-0.5 last:hidden" />
  );
}
