const API_BASE_URL = 'https://dndhideout.com/gh/gh_backend/public';
// const API_BASE_URL = 'http://localhost:8000';

export async function updateDatabase(data, isNew, id = null) {
  if (!data.data_id.trim() || !data.ms_name.trim()) {
    throw new Error('データID、名称は必須です。');
  }
  const method = isNew ? 'POST' : 'PUT';
  const url = isNew ? `${API_BASE_URL}/api/mobile-suits` : `${API_BASE_URL}/api/mobile-suits/${id}`;
  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(data),
  });
  console.log(response)
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(errorData.message || 'Failed to update database');
  }
  return response;
}

export async function fetchMobileSuits() {
  const response = await fetch(`${API_BASE_URL}/api/mobile-suits`);
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(errorData.message || 'Failed to fetch mobile suits');
  }
  return await response.json();
}