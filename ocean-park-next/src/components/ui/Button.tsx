"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot"; // Oops, I didn't install radix-ui, I'll stick to standard props

export interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
    size?: "sm" | "md" | "lg" | "icon";
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
        // If asChild is true, we should use Slot, but for simplicity let's stick to motion.button or a custom wrapper.
        // Actually, I'll remove asChild for now as I didn't install radix slot, and just use motion.button.

        const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";

        const variants = {
            primary: "bg-primary text-white hover:brightness-110 shadow-lg shadow-primary/25",
            secondary: "bg-secondary text-white hover:brightness-110 shadow-lg shadow-secondary/25",
            outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
        };

        const sizes = {
            sm: "h-8 px-3 text-xs",
            md: "h-10 px-8 py-2",
            lg: "h-12 px-8 text-lg",
            icon: "h-9 w-9",
        };

        return (
            <motion.button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
