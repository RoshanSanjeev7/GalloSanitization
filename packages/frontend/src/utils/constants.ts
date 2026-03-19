/**
 * Application constants
 */

export const STATUS_LABELS: Record<string, string> = {
  in_progress: 'In Progress',
  submitted: 'Submitted',
  approved: 'Approved',
  denied: 'Denied',
};

export const STATUS_COLORS: Record<string, string> = {
  in_progress: 'var(--blue)',
  submitted: 'var(--amber)',
  approved: 'var(--green)',
  denied: 'var(--red)',
};
