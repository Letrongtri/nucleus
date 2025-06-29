/**
 * @jest-environment jsdom
 */
import { default as useFetch } from './useFetch';
import { renderHook, waitFor } from '@testing-library/react';

// jest.mock("fetch", () =>
//   jest.fn(() =>
//     Promise.resolve({
//       json: () => Promise.resolve({ data: "mocked response" }),
//     })
//   )
// );

describe('useFetch', () => {
  it('fetches data from the API', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        headers: {
          get: () => 'application/json'
        },
        json: () => Promise.resolve({ data: 'mocked response' }),
        text: () =>
          Promise.resolve(JSON.stringify({ data: 'mocked response' })),
        clone: function () {
          return this;
        }
      } as unknown as Response)
    );
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const headers = { 'Content-Type': 'application/json' };
    const body = { name: 'John Doe' };

    const { result } = renderHook(() =>
      useFetch(url, undefined, body, headers)
    );
    // Act
    await waitFor(() => {
      expect(result.current[2]).toEqual(false);
    });
    expect(result.current[0]).toEqual({ data: 'mocked response' });
  });

  it('handles errors while fetching data from the API', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('mocked error')));
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const headers = { 'Content-Type': 'application/json' };
    const body = { name: 'John Doe' };

    const { result } = renderHook(() => useFetch(url, 'POST', body, headers));

    await waitFor(() => {
      expect(result.current[2]).toEqual(false);
    });
    expect((result.current[1] as Error).message).toEqual('mocked error');
    expect(result.current[2]).toEqual(false);
  });

  it('updates the body and headers', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        headers: {
          get: () => 'application/json'
        },
        json: () => Promise.resolve({ data: 'mocked response' }),
        text: () =>
          Promise.resolve(JSON.stringify({ data: 'mocked response' })),
        clone: function () {
          return this;
        }
      } as unknown as Response)
    );
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const headers = { 'Content-Type': 'application/json' };
    const body = { name: 'John Doe' };

    const { result, rerender } = renderHook(() =>
      useFetch(url, 'GET', body, headers)
    );

    await waitFor(() => {
      expect(result.current[2]).toEqual(false);
    });

    const newHeaders = { 'Content-Type': 'text/plain' };
    const newBody = { name: 'Jane Doe' };

    rerender(() => useFetch(url, 'GET', newBody, newHeaders));

    await waitFor(() => {
      expect(result.current[2]).toEqual(false);
    });

    expect(result.current[0]).toEqual({ data: 'mocked response' });
  });
  it('fetches data using POST method', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        headers: {
          get: () => 'application/json'
        },
        json: () => Promise.resolve({ data: 'mocked response' }),
        text: () =>
          Promise.resolve(JSON.stringify({ data: 'mocked response' })),
        clone: function () {
          return this;
        }
      } as unknown as Response)
    );
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const headers = { 'Content-Type': 'application/json' };
    const body = { name: 'John Doe' };

    const { result } = renderHook(() => useFetch(url, 'POST', body, headers));

    await waitFor(() => {
      expect(result.current[2]).toEqual(false);
    });

    expect(result.current[0]).toEqual({ data: 'mocked response' });
  });
});
