import { useNavigate } from 'react-router-dom';
import type { MouseEvent, ReactNode } from 'react';

interface Props {
  to: string;
  label?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function TransitionLink({
  to,
  children,
  className = '',
  onClick,
}: Props) {
  const navigate = useNavigate();

  function handleClick(e: MouseEvent) {
    e.preventDefault();
    onClick?.();
    navigate(to);
    window.scrollTo(0, 0);
  }

  return (
    <a
      href={to}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
