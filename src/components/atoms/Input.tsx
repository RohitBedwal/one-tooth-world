import type { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = "", id, ...rest }: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="mb-1.5 block text-xs font-medium text-foreground">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`w-full rounded-block border border-line bg-surface px-4 py-3 text-sm text-foreground placeholder:text-subtext focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${className}`}
        {...rest}
      />
      {error && <p className="mt-1 text-xs text-sale">{error}</p>}
    </div>
  );
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function Textarea({ label, className = "", id, ...rest }: TextareaProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="mb-1.5 block text-xs font-medium text-foreground">
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        className={`w-full rounded-block border border-line bg-surface px-4 py-3 text-sm text-foreground placeholder:text-subtext focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${className}`}
        rows={4}
        {...rest}
      />
    </div>
  );
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { label: string; value: string }[];
}

export function Select({ label, options, className = "", id, ...rest }: SelectProps) {
  const selectId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={selectId} className="mb-1.5 block text-xs font-medium text-foreground">
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={`w-full rounded-block border border-line bg-surface px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${className}`}
        {...rest}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
