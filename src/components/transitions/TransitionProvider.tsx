import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react';
import { useNavigate } from 'react-router-dom';

interface TransitionContextType {
  isTransitioning: boolean;
  transitionLabel: string;
  triggerTransition: (to: string, label?: string) => void;
}

const TransitionContext = createContext<TransitionContextType>({
  isTransitioning: false,
  transitionLabel: '',
  triggerTransition: () => {},
});

export function usePageTransition() {
  return useContext(TransitionContext);
}

interface Props {
  children: ReactNode;
}

export function TransitionProvider({ children }: Props) {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionLabel, setTransitionLabel] = useState('');

  const triggerTransition = useCallback(
    (to: string, label?: string) => {
      if (isTransitioning) return; // prevent double-triggers

      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        navigate(to);
        window.scrollTo(0, 0);
        return;
      }

      // Derive label from path if not provided
      const derivedLabel =
        label ||
        to
          .replace('/work/', '')
          .replace('/', '')
          .toUpperCase() ||
        'HOME';

      setTransitionLabel(derivedLabel);
      setIsTransitioning(true);

      // Navigate at the midpoint (when diagonal curtain covers screen)
      setTimeout(() => {
        navigate(to);
        window.scrollTo(0, 0);
      }, 300);

      // Clear transition state after swift animation
      setTimeout(() => {
        setIsTransitioning(false);
        setTransitionLabel('');
      }, 600);
    },
    [navigate, isTransitioning]
  );

  return (
    <TransitionContext.Provider
      value={{ isTransitioning, transitionLabel, triggerTransition }}
    >
      {children}
    </TransitionContext.Provider>
  );
}
