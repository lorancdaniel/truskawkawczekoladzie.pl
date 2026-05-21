import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { ArrowRight } from 'lucide-react';

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary' | 'ghost';
    icon?: boolean;
  }
>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', icon = true, className = '', ...props }, ref) => {
  return (
    <button className={`button button--${variant} ${className}`.trim()} ref={ref} {...props}>
      <span>{children}</span>
      {icon ? <ArrowRight aria-hidden="true" size={18} /> : null}
    </button>
  );
  },
);

Button.displayName = 'Button';
