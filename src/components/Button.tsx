
import React from 'react';
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = "font-montserrat font-semibold rounded-md transition-all duration-200 inline-flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-postes-red text-white hover:bg-red-800 active:bg-red-900",
    secondary: "bg-white text-postes-red border-2 border-postes-red hover:bg-postes-red hover:text-white active:bg-red-900",
    outline: "bg-transparent border-2 border-postes-red text-postes-red hover:bg-postes-red/10 active:bg-postes-red/20",
  };
  
  const sizeStyles = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-6 text-base",
    lg: "py-3 px-8 text-lg",
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
