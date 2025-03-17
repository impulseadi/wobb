import React from 'react';
import clsx from 'clsx';

export const Badge = ({ children, className }) => {
  return (
    <span
      className={clsx(
        "inline-block text-xs font-semibold px-2 py-1 rounded-md",
        className
      )}
    >
      {children}
    </span>
  );
};
