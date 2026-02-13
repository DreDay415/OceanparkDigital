"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

const Card = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
    ({ className, ...props }, ref) => (
        <motion.div
            ref={ref}
            className={cn(
                "rounded-xl border bg-card text-card-foreground shadow glass p-6",
                className
            )}
            {...props}
        />
    )
);
Card.displayName = "Card";

export { Card };
