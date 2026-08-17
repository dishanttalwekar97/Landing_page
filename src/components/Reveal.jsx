import { useInView } from '../hooks/useInView';

export default function Reveal({ children, className = '', delay = 0 }) {
  const [ref, isVisible] = useInView();
  return <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`} style={{ '--delay': `${delay}ms` }}>{children}</div>;
}
