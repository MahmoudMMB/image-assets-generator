<h1 align="center">Welcome to image-assets-generator 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/npm-%3E%3D5.5.0-blue.svg" />
  <img src="https://img.shields.io/badge/node-%3E%3D9.3.0-blue.svg" />
  <a href="https://github.com/MahmoudMMB/image-assets-generator#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/MahmoudMMB/image-assets-generator/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/MahmoudMMB/image-assets-generator/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/MahmoudMMB/image-assets-generator" />
  </a>
</p>

> The image-assets-generator package is a powerful tool designed to streamline the process of reading asset directories and automatically generating JSON files for each folder and nested subfolder. With this package, developers can efficiently organize and access their image assets within their React Native projects.

### 🏠 [Homepage](https://github.com/MahmoudMMB/image-assets-generator#readme)

## Prerequisites

- npm >=5.5.0
- node >=9.3.0

## Install
* Install
  ```bash
  npm install -g image-assets-generator
  # or yarn
  yarn global add image-assets-generator
  ```
  
## Usage
* Add assets to your `react-native.config.js` as you would with `react-native link`
  ```js
  ...
   assets: [
      "./src/assets", 
      "./assets",
    ];
  ```
* Add assets to your `react-native.config.js` like so:
  ```js
  ...
  assets: [
    "./src/assets",
  ], 
  ```

* Run the command and linking + unlinking is automatic!
  ```npx image-assets-generator
  ```
  or 
  ```bash image-assets-generator
  ```
## Author

👤 **Mahmoud Albelbeisi**

* Github: [@MahmoudMMB](https://github.com/MahmoudMMB)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/MahmoudMMB/image-assets-generator/issues). You can also take a look at the [contributing guide](https://github.com/MahmoudMMB/image-assets-generator/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2024 [Mahmoud Albelbeisi](https://github.com/MahmoudMMB).<br />
This project is [ISC](https://github.com/MahmoudMMB/image-assets-generator/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_