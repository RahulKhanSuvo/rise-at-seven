import React from "react";

export default function FooterBottomBar() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-[#8e8e8e] mt-4 pb-4 w-full">
      <div className="flex flex-wrap justify-center md:justify-start gap-x-3 gap-y-2 mb-4 md:mb-0">
        <span>&copy; 2025 Rise at Seven Ltd. All rights reserved</span>
        <span className="hidden sm:inline">&bull;</span>
        <span>Company Number 11955107</span>
        <span className="hidden sm:inline">&bull;</span>
        <span>VAT Registered GB 322402845</span>
        <span className="hidden sm:inline">&bull;</span>
        <a href="#" className="hover:text-white transition-colors">
          Privacy Policy
        </a>
        <span className="hidden sm:inline">&bull;</span>
        <a href="#" className="hover:text-white transition-colors">
          Terms & conditions
        </a>
      </div>
      <div>
        <a href="#" className="hover:text-white transition-colors">
          Website MadeByShape
        </a>
      </div>
    </div>
  );
}
