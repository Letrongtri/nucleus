# Nucleus

[![npm](https://img.shields.io/npm/v/@dosullivan557/nucleus)](https://www.npmjs.com/package/@dosullivan557/nucleus)
[![npm downloads](https://img.shields.io/npm/dm/@dosullivan557/nucleus)](https://www.npmjs.com/package/@dosullivan557/nucleus)
[![license](https://img.shields.io/npm/l/@dosullivan557/nucleus)](https://github.com/dosullivan557/nucleus/blob/main/LICENSE)

**Nucleus** is a modular, developer-friendly core library of reusable **React components**, **regular expressions** and **custom hooks**—designed to be the foundation of clean, scalable React applications.

Whether you're building a small prototype or a large-scale SPA, Nucleus provides essential UI building blocks and logic abstractions out of the box, helping you ship faster with consistent design and logic.

---

## 🚀 Quick Start

```bash
npm install @dosullivan557/nucleus
# or
yarn add @dosullivan557/nucleus
```

## 📚 Documentation

👉 [Full documentation & live examples](https://dosullivan557.github.io/nucleus/)

- Component and hook API reference
- Usage examples
- Installation tips
- [Contribution guide](CONTRIBUTING.md)
- [Changelog](CHANGELOG.md)

---

## 🧩 Components

- **Button**: Reusable button with variants ([docs](docs/components/atoms/button.md))
- **Textfield**: Input field for forms ([docs](docs/components/atoms/textfield.md))

## 🪝 Hooks

- **useAsyncHook**: Async state management ([docs](docs/hooks/useAsyncHook.md))
- **useDebounce**: Debounce side effects ([docs](docs/hooks/useDebounce.md))
- **useFetch**: Data fetching ([docs](docs/hooks/useFetch.md))
- **useLocalStorage**: State sync with localStorage ([docs](docs/hooks/useLocalStorage.md))
- **useScreenDimensions**: Window size ([docs](docs/hooks/useScreenDimensions.md))
- **useTimeout**: Timeout management ([docs](docs/hooks/useTimeout.md))
- **useToggle**: Boolean toggle ([docs](docs/hooks/useToggle.md))

## Regular Expressions 
We export both a wrapper function for simplicity, as well as the raw regular expression for more complicated workflows
- **email**
    - isValidEmail 
    - emailRegex

## 🧪 Testing & Development

- Run tests: `npm test`
- Lint: `npm run lint`
- Format: `npm run format`
- Storybook: `npm run storybook`

---

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 📄 License

MIT © Danny O'Sullivan