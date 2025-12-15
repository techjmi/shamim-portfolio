// Reusable Badge utility component (no external deps)
// Props:
// - variant: 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
// - className: extra classes to override (e.g., 'bg-amber-800 text-white')
// - children: label
// - as: element type (default 'span')

function cx(...classes) { return classes.filter(Boolean).join(' '); }

export default function Badge({ variant = 'neutral', className, as: Tag = 'span', children, ...rest }) {
  const v = `badge--${variant}`;
  // Ensure warning is highly visible in both light and dark (user preference: amber-800 bg)
  const twFallback = variant === 'warning' ? 'bg-amber-800 text-white border-amber-800' : '';
  return (
    <Tag className={cx('badge', v, twFallback, className)} {...rest}>
      {children}
    </Tag>
  );
}

