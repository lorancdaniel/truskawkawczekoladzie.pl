import type { LeadFormValues } from '../types/lead';

export async function submitLead(values: LeadFormValues): Promise<void> {
  const endpoint = import.meta.env.VITE_LEAD_ENDPOINT as string | undefined;

  if (!endpoint) {
    const isLocalPreview = ['localhost', '127.0.0.1'].includes(window.location.hostname);

    if (import.meta.env.DEV || isLocalPreview) {
      await new Promise((resolve) => window.setTimeout(resolve, 700));
      return;
    }

    throw new Error('Missing VITE_LEAD_ENDPOINT for production lead capture');
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    throw new Error('Lead submission failed');
  }
}
