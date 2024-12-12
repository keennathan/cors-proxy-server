# CORS Anywhere Server

This is a simple Node.js application that uses the `cors-anywhere` library to create a proxy server which adds CORS headers to the proxied request. This is useful for bypassing CORS restrictions when making API requests from the browser.

## Features
- Allows all origins
- Requires `origin` and `x-requested-with` headers
- Removes `cookie` and `cookie2` headers