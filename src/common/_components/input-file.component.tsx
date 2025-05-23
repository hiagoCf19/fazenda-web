"use client";

import type React from "react";

import { useState } from "react";
import { UploadIcon, TrashIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import { Input } from "../../shadcn/ui/input";

interface FileInputProps {
  label: string;
  placeholder?: string;
  name: string;
  error?: any;
  value?: File | null;
  onChange?: (file: File | null) => void;
  className?: string;
}

export function FileInput({
  label,
  placeholder = `Anexar ${label}`,
  name,
  error,
  value,
  onChange,
  className,
}: FileInputProps) {
  const [file, setFile] = useState<File | null>(value || null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    onChange?.(selectedFile);
  };

  const handleRemoveFile = () => {
    setFile(null);
    onChange?.(null);
    // Reset the input value
    const input = document.getElementById(name) as HTMLInputElement;
    if (input) input.value = "";
  };

  return (
    <div className={cn("space-y-2", className)}>
      <div className="relative">
        <Input
          id={name}
          type="file"
          className="sr-only md:h-[59px] md:w-[460px]   h-[49px] w-[326px] border-secondary-foreground rounded-full pl-8 "
          name={name}
          onChange={handleFileChange}
          required
        />
        <span className="text-xs text-secondary-foreground bg-background absolute -top-2 left-5 px-2">
          {label}:
        </span>
        <div
          className={cn(
            "flex items-center justify-between px-6 py-4 border rounded-full bg-white",
            error ? "border-red-500" : "border-gray-300",
            "hover:border-gray-400 transition-colors"
          )}
        >
          <label htmlFor={name} className="flex-1 cursor-pointer truncate">
            {file ? file.name : placeholder}
          </label>
          {file ? (
            <button
              type="button"
              onClick={handleRemoveFile}
              className="ml-2 text-red-500 hover:text-red-700 transition-colors"
            >
              <TrashIcon className="h-5 w-5" />
              <span className="sr-only">Remove file</span>
            </button>
          ) : (
            <label
              htmlFor={name}
              className="ml-2 text-gray-500 hover:text-gray-700 cursor-pointer transition-colors"
            >
              <UploadIcon className="h-5 w-5" />
              <span className="sr-only">Upload file</span>
            </label>
          )}
        </div>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    </div>
  );
}
