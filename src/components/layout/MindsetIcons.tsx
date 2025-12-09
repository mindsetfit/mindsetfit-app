'use client';

import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

const baseClasses = 'inline-block align-middle';

export function BrainIcon({ size = 16, className = '', ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={baseClasses + ' ' + className}
      aria-hidden="true"
      {...rest}
    >
      <path
        d="M9 3.5C7.62 3.5 6.5 4.62 6.5 6v.25C5.12 6.25 4 7.37 4 8.75c0 1 .5 1.88 1.27 2.4C5.1 11.45 5 11.71 5 12v1c0 1.66 1.34 3 3 3h.5v-.75C8.5 13.9 9.4 13 10.5 13H11V4.5C11 3.67 10.33 3 9.5 3 9.33 3 9.16 3.02 9 3.05V3.5Zm6 0c1.38 0 2.5 1.12 2.5 2.5v.25C18.88 6.25 20 7.37 20 8.75c0 1-.5 1.88-1.27 2.4.17.3.27.56.27.85v1c0 1.66-1.34 3-3 3H15.5v-.75c0-1.35-.9-2.25-2-2.25H13V4.5C13 3.67 13.67 3 14.5 3c.17 0 .34.02.5.05V3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function DashboardIcon({ size = 18, className = '', ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={baseClasses + ' ' + className}
      aria-hidden="true"
      {...rest}
    >
      <path
        d="M4 13h7V4H4v9Zm0 7h7v-5H4v5Zm9 0h7V11h-7v9Zm0-16v4h7V4h-7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function AssessmentIcon({ size = 18, className = '', ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={baseClasses + ' ' + className}
      aria-hidden="true"
      {...rest}
    >
      <path
        d="M7 4a3 3 0 0 0-3 3v10.5A2.5 2.5 0 0 0 6.5 20h11a2.5 2.5 0 0 0 2.5-2.5V9a3 3 0 0 0-3-3h-4.086a2 2 0 0 1-1.414-.586L10.5 3.914A2 2 0 0 0 9.086 3H7Zm1 5h8v2H8V9Zm0 4h5v2H8v-2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function NutritionIcon({ size = 18, className = '', ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={baseClasses + ' ' + className}
      aria-hidden="true"
      {...rest}
    >
      <path
        d="M7 3C5.34 3 4 4.34 4 6v4.5C4 13.43 5.57 15 7.5 15H9v5c0 .55.45 1 1 1h1v-8h1v8h1c.55 0 1-.45 1-1v-5h1.5C18.43 15 20 13.43 20 11.5V6c0-1.66-1.34-3-3-3H7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TrainingIcon({ size = 18, className = '', ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={baseClasses + ' ' + className}
      aria-hidden="true"
      {...rest}
    >
      <path
        d="M7 6.5 5.5 5 2 8.5 3.5 10l1-1 2.75 2.75L5.5 13.5 7 15l2.75-2.75L12.5 15l-1 1 1.5 1.5 3.5-3.5L15 11.5l-2.75-2.75L15 6.5 13.5 5l-1 1L9.75 4.25 11 3l-1.5-1.5L6 5l1 1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ProgressIcon({ size = 18, className = '', ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={baseClasses + ' ' + className}
      aria-hidden="true"
      {...rest}
    >
      <path
        d="M5 19h2V10H5v9Zm6 0h2V5h-2v14Zm6 0h2v-8h-2v8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ProfileIcon({ size = 18, className = '', ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={baseClasses + ' ' + className}
      aria-hidden="true"
      {...rest}
    >
      <path
        d="M12 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 9c-3.33 0-6 2.02-6 4.5V19h12v-1.5C18 15.02 15.33 13 12 13Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SettingsIcon({ size = 18, className = '', ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={baseClasses + ' ' + className}
      aria-hidden="true"
      {...rest}
    >
      <path
        d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.61-.22l-2.39.96a7.18 7.18 0 0 0-1.63-.94L14.5 3h-5l-.3 2.32c-.6.24-1.14.55-1.63.94l-2.39-.96a.5.5 0 0 0-.61.22L2.65 9.16a.5.5 0 0 0 .12.64L4.8 11.38c-.04.31-.06.63-.06.94s.02.63.06.94L2.77 14.84a.5.5 0 0 0-.12.64l1.92 3.32c.13.23.4.32.61.22l2.39-.96c.49.39 1.03.7 1.63.94L9.5 21h5l.3-2.32c.6-.24 1.14-.55 1.63-.94l2.39.96c.21.1.48.01.61-.22l1.92-3.32a.5.5 0 0 0-.12-.64L19.14 12.94ZM12 15a3 3 0 1 1 .001-6.001A3 3 0 0 1 12 15Z"
        fill="currentColor"
      />
    </svg>
  );
}
