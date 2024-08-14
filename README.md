# Configurable New Tab Redirect Chrome Extension

This Chrome extension allows users to redirect their new tabs to a configurable URL. By default, it redirects to https://home.schappi.com, but users can easily change this to any URL of their choice.

## Features

- Redirects new tabs to a user-defined URL
- Configurable through an options page
- Lightweight and easy to use
- Uses Chrome's storage API to remember your settings

## Installation

1. Clone this repository or download it as a ZIP file and extract it.
2. Open Google Chrome and navigate to `chrome://extensions`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the directory containing the extension files.
5. The extension should now be installed and active.

## Usage

1. After installation, click on the extension icon in the Chrome toolbar.
2. Select "Options" from the dropdown menu.
3. In the options page, enter your desired redirect URL.
4. Click "Save" to apply the changes.
5. Open a new tab to see the redirect in action!

## Files

- `manifest.json`: The extension manifest file
- `background.js`: Handles the tab creation event and performs the redirect
- `redirect.html` and `redirect.js`: Fallback redirect mechanism
- `options.html` and `options.js`: Provides the options page for URL configuration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any problems or have any suggestions, please open an issue on this GitHub repository.

Enjoy your personalized new tab experience!
