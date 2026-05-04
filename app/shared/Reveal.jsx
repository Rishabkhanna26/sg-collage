export function Reveal({ children, delay, y, className, ...rest }) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}
