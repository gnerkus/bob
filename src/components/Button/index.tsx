import styles from './Button.module.css'
import clsx from 'clsx'

interface ButtonProps {
  /** a unique identifier for the button */
  id?: string;
  /** the content to display inside the button */
  children?: string | string[];
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  textAlign?: 'left' | 'right' | 'center';
  /** callback when clicked */
  onClick?(): unknown;
}

function variationName(name: string, value: string) {
  return `${name}--${value}`;
}

export function Button({ 
  id,
  children,
  variant = 'primary',
  size = 'medium',
  textAlign = 'left',
  onClick,
 }: ButtonProps) {
  const className = clsx(styles.button, {
    [styles[variationName('variant', variant)]]: true,
    [styles[variationName('size', size)]]: true,
    [styles[variationName('textAlign', textAlign)]]: true,
  })

  const commonProps = {
    id,
    className,
    onClick
  }

  return (
    <button
      type='button'
      {...commonProps}
    >
      <span>
        {children}
      </span>
    </button>
  )
}
