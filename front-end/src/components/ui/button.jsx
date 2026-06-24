import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";

const Button = forwardRef(({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-bg font-bold hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-[1.02] active:scale-95":
            variant === "primary",
          "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-neon-purple/50 hover:shadow-[0_0_20px_rgba(176,38,255,0.2)] active:scale-95":
            variant === "secondary",
          "bg-transparent text-white/60 hover:text-white hover:bg-white/5":
            variant === "ghost",
          "bg-gradient-to-r from-neon-purple to-neon-pink text-white font-bold hover:shadow-[0_0_20px_rgba(176,38,255,0.4)] hover:scale-[1.02] active:scale-95":
            variant === "accent",
          "h-10 px-6 py-2": size === "default",
          "h-12 px-8 py-3 text-base": size === "lg",
          "h-9 rounded-md px-3": size === "sm",
          "h-14 px-10 py-4 text-lg": size === "xl",
        },
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button };