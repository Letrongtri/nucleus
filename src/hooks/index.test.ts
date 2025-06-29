import * as hooks from './index';

test('should export all hooks', () => {
  const expectedHooks = [
    'useAsyncHook',
    'useDebounce',
    'useFetch',
    'useLocalStorage',
    'useScreenDimensions',
    'useTimeout',
    'useToggle'
  ];

  expectedHooks.forEach((hook) => {
    expect(hooks).toHaveProperty(hook);
  });
});

test('Should have number of hooks', () => {
  expect(Object.keys(hooks).length).toBe(7);
});
