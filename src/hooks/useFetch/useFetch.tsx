import { useAsyncHook } from '../';

type FetchMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
/**
 * A custom hook for making API calls with headers and body.
 *
 * @param {string} url - The URL to fetch data from.
 * @param {Object} body - The body of the request.
 * @param {Object} headers - The headers of the request.
 * @returns {Array} An array containing the data, error, and loading state.
 */
const useFetch = (
  url: string,
  method: FetchMethod = 'GET',
  body: any = null,
  headers: HeadersInit = {}
) => {
  const fetchData = async () => {
    const response = await fetch(url, {
      method,
      headers: headers,
      body: body ? JSON.stringify(body) : null
    });
    return await response.json();
  };

  return useAsyncHook(fetchData);
};
export default useFetch;
