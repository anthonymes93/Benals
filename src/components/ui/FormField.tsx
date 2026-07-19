import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { useId } from 'react';
import { cn } from '@/lib/cn';

interface FieldWrapperProps {
  label: string;
  id?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: (fieldProps: {
    id: string;
    'aria-invalid': boolean;
    'aria-describedby': string | undefined;
  }) => ReactNode;
}

const fieldStyles =
  'w-full rounded-md border border-ink-300 bg-white px-3.5 py-2.5 text-[15px] text-ink-900 placeholder:text-ink-400 transition-colors focus:border-primary-500 disabled:bg-ink-100';

function FieldWrapper({ label, id, error, hint, required, children }: FieldWrapperProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const errorId = error ? `${fieldId}-error` : undefined;
  const hintId = hint ? `${fieldId}-hint` : undefined;
  const describedBy = [errorId, hintId].filter(Boolean).join(' ') || undefined;

  return (
    <div>
      <label htmlFor={fieldId} className="mb-1.5 block text-sm font-medium text-ink-800">
        {label}
        {required ? <span className="text-primary-600"> *</span> : null}
      </label>
      {children({ id: fieldId, 'aria-invalid': Boolean(error), 'aria-describedby': describedBy })}
      {hint ? (
        <p id={hintId} className="mt-1.5 text-sm text-ink-500">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} role="alert" className="mt-1.5 text-sm text-primary-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type InputFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> &
  Pick<FieldWrapperProps, 'label' | 'id' | 'error' | 'hint' | 'required'>;

export function InputField({ label, id, error, hint, required, className, ...rest }: InputFieldProps) {
  return (
    <FieldWrapper label={label} id={id} error={error} hint={hint} required={required}>
      {(fieldProps) => (
        <input
          {...fieldProps}
          {...rest}
          required={required}
          className={cn(fieldStyles, error && 'border-primary-500', className)}
        />
      )}
    </FieldWrapper>
  );
}

type TextareaFieldProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> &
  Pick<FieldWrapperProps, 'label' | 'id' | 'error' | 'hint' | 'required'>;

export function TextareaField({ label, id, error, hint, required, className, ...rest }: TextareaFieldProps) {
  return (
    <FieldWrapper label={label} id={id} error={error} hint={hint} required={required}>
      {(fieldProps) => (
        <textarea
          {...fieldProps}
          {...rest}
          required={required}
          className={cn(fieldStyles, 'min-h-32 resize-y', error && 'border-primary-500', className)}
        />
      )}
    </FieldWrapper>
  );
}

type SelectFieldProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'id'> &
  Pick<FieldWrapperProps, 'label' | 'id' | 'error' | 'hint' | 'required'> & {
    children: ReactNode;
  };

export function SelectField({
  label,
  id,
  error,
  hint,
  required,
  className,
  children,
  ...rest
}: SelectFieldProps) {
  return (
    <FieldWrapper label={label} id={id} error={error} hint={hint} required={required}>
      {(fieldProps) => (
        <select
          {...fieldProps}
          {...rest}
          required={required}
          className={cn(fieldStyles, 'bg-white', error && 'border-primary-500', className)}
        >
          {children}
        </select>
      )}
    </FieldWrapper>
  );
}
