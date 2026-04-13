/* eslint-disable react-refresh/only-export-components */
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3.5 py-1 text-xs font-medium font-body transition-colors",
  {
    variants: {
      variant: {
        glass: "liquid-glass text-foreground",
        solid: "bg-primary text-primary-foreground",
      },
    },
    defaultVariants: {
      variant: "glass",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
