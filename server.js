// Load environment variables from .env file
require('dotenv').config();

// Import the Express framework
const express = require('express');

// Import the CORS Anywhere library
const corsAnywhere = require('cors-anywhere');

// Import the Axios library (not used in this file, but can be used for making HTTP requests)
const axios = require('axios');

// Initialize an Express application
const app = express();

// Set the port for the server, defaulting to 8080 if not specified in the environment variables
const port = process.env.PORT || 8080;

// Retrieve the client ID from the environment variables
const clientId = process.env.VITE_CLIENT_ID;

// Retrieve the client secret from the environment variables
const clientSecret = process.env.VITE_CLIENT_SECRET;

/**
 * Create and start the CORS Anywhere server
 * 
 * This server will add CORS headers to the proxied request, allowing you to bypass CORS restrictions.
 * 
 * Configuration:
 * - originWhitelist: An array of allowed origins. An empty array means all origins are allowed.
 * - requireHeader: An array of headers that must be present in the request.
 * - removeHeaders:  An array of headers that will be removed from the request.
 */ 
corsAnywhere.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, async () => {
    console.log(`CORS Anywhere server is running on port ${port}`);
});