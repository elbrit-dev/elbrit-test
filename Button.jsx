import React from 'react';
import './Button.css';

/**
 * Basic Button Component for Plasmic Studio
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Button text/content
 * @param {string} props.variant - Button style variant (primary, secondary, outline)
 * @param {string} props.size - Button size (small, medium, large)
 * @param {boolean} props.disabled - Whether button is disabled
 * @param {Function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 */
function Button({
  children = 'Button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  className = '',
  ...rest
}) {
  const buttonClass = `btn btn-${variant} btn-${size} ${className}`.trim();

  return (
    <button
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
