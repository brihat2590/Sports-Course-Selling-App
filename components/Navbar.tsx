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
            <Link href='/'><MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
            </Link>
            <MenuItem setActive={setActive} active={active} item="Courses"></MenuItem>
            <MenuItem setActive={setActive} active={active} item="Services"></MenuItem>
        </Menu>

    </div>
  
  )
}
export default Navbar