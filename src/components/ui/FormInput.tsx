import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-[#111111] ml-2">{label}</label>
        <input 
          ref={ref} 
          className={cn("w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#111111]/10 focus:border-[#111111] transition-all", className)} 
          {...props} 
        />
      </div>
    );
  }
);
FormInput.displayName = "FormInput";

export interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-[#111111] ml-2">{label}</label>
        <textarea 
          ref={ref} 
          className={cn("w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#111111]/10 focus:border-[#111111] transition-all resize-none", className)} 
          {...props} 
        />
      </div>
    );
  }
);
FormTextarea.displayName = "FormTextarea";
