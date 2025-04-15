
const CONVERTKIT_API_URL = 'https://api.convertkit.com/v3';

interface SubscriberData {
  email: string;
  fields?: Record<string, string>;
}

export async function addSubscriber(
  formId: string, 
  apiKey: string, 
  data: SubscriberData
): Promise<Response> {
  const response = await fetch(`${CONVERTKIT_API_URL}/forms/${formId}/subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      api_key: apiKey,
      email: data.email,
      fields: data.fields,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to add subscriber to ConvertKit');
  }

  return response.json();
}
