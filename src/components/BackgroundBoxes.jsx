"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const BackgroundBoxes = React.memo(({ className, ...rest }) => {
    const rows = new Array(150).fill(1);
    const cols = new Array(100).fill(1);
    let colors = [
        "--violet-400",
        "--violet-600",
        "--violet-800",
        "--indigo-800",
        "--indigo-500",
        "--fuschia-900",
        "--purple-900",
        "--purple-800",
        "--purple-500",
    ];
    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div
            style={{
                transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
            }}
            className={cn(
                "absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4 z-2",
                className,
            )}
            {...rest}
        >
            {rows.map((_, i) => (
                <motion.div
                    key={`row` + i}
                    className="relative h-8 w-16 border-l border-purple-900"
                >
                    {cols.map((_, j) => (
                        <motion.div
                            whileHover={{
                                backgroundColor: `var(${getRandomColor()})`,
                                transition: { duration: 0 },
                            }}
                            animate={{
                                transition: { duration: 5 },
                            }}
                            key={`col` + j}
                            className="relative h-8 w-16 border-r border-t border-purple-900"
                        >
                            {j % 2 === 0 && i % 2 === 0 ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="pointer-events-none absolute -left-[22px] -top-[14px] h-6 w-10 stroke-[1px] text-purple-900"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6v12m6-6H6"
                                    />
                                </svg>
                            ) : null}
                        </motion.div>
                    ))}
                </motion.div>
            ))}
        </div>
    );
});

export default BackgroundBoxes;
