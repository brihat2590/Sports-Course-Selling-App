"use client"
import Link from "next/link";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";


function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        
        <Menu setActive={setActive}>
            ,<Link href='/'><MenuItem setActive={setActive} active={active} item="Home"></MenuItem></Link>
            
            <MenuItem setActive={setActive} active={active} item="Courses">
            <div className="flex flex-col text-sm space-y-4">
              <HoveredLink href="/courses">Football Fundamentals</HoveredLink>
              <HoveredLink href="/courses">Basketball Masterclass</HoveredLink>
              <HoveredLink href="/courses">Swim Sesh</HoveredLink>
              <HoveredLink href="/courses">Badminton Practice</HoveredLink>
              <HoveredLink href="/courses">Basic Sports Nutrition</HoveredLink>

            </div>
            
            
            
            </MenuItem>
            <Link href='/contact'>
              <MenuItem setActive={setActive} active={active} item="Contact us">

              </MenuItem>
            </Link>
            

            
        </Menu>

    </div>
  
  )
}
export default Navbar