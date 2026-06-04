import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import type { SVGProps } from "react";

type BrandIconProps = SVGProps<SVGSVGElement> & { size?: number };

export function Github({ size = 24, ...props }: BrandIconProps) {
  return (
    <svg
      fill="currentColor"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      {...props}
    >
      <path d="M12 .7a11.3 11.3 0 0 0-3.6 22c.6.1.8-.2.8-.5v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.2c0 .3.2.6.8.5A11.3 11.3 0 0 0 12 .7Z" />
    </svg>
  );
}

export function Linkedin({ size = 24, ...props }: BrandIconProps) {
  return (
    <svg
      fill="currentColor"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      {...props}
    >
      <path d="M5.3 7.4A2.1 2.1 0 1 0 5.3 3a2.1 2.1 0 0 0 0 4.3ZM3.5 21h3.6V9.6H3.5V21Zm5.9 0H13v-6.4c0-1.7.3-3.3 2.4-3.3 2 0 2.1 1.9 2.1 3.4V21H21v-7c0-3.4-.7-6.1-4.8-6.1a4.2 4.2 0 0 0-3.7 2h-.1V9.6h-3.5V21Z" />
    </svg>
  );
}

export {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  Mail,
  MapPin,
  Sparkles,
};
