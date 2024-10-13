# BrandBuzz

BrandBuzz is a GenAI-powered solution designed to simplify the creation of marketing visuals by generating high-quality, engaging images using AI. It allows users to quickly create customized visuals for advertising campaigns, social media posts, and other marketing needs with ease and efficiency.

## Features

- **AI-Powered Visual Generation:** Automatically generate engaging marketing images based on text prompts, utilizing Stability AI's capabilities.
- **Image Customization:** Upload base images to customize visuals, enhancing branding and creativity.
- **Easy Integration:** Simplified UI that allows users to quickly input prompts and download generated images.

## Technologies Used

- **Frontend:** React.js, HTML, CSS
- **Backend:** Node.js, Express.js
- **AI Integration:** Stability AI (for image generation)
- **Storage & State Management:** Axios for API communication, useState for handling states

## Installation

To set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/kashishjivani/image-generator.git
   
2. Navigate to the project directory:
   ```bash
   cd image-generator
   
3. Install dependencies:
   ```bash
   npm install

4. Create a .env file and add your Stability AI API key:
   ```bash
   REACT_APP_STABILITY_API_KEY=your_api_key_here

5. Start the application:
   ```bash
   npm start

## How It Works

1. Users provide a prompt describing the marketing image they want.
2. Optionally, they can upload a base image to customize the result.
3. The Stability AI API processes the request and generates a high-quality image.
4. The user can preview the image, make adjustments, and download it for use.

## Future Opportunities

- **Enhanced Customization:** Additional features for more detailed image customization, including text overlays, filters, and advanced styling.
- **Expanded AI Capabilities:** Integration with other AI models to support various content creation needs (e.g., videos, animations).
- **Platform Expansion:** Development of plugins for popular marketing tools and social media platforms to streamline the use of BrandBuzz across different channels.

## Challenges Faced

- **Image Rendering Issue:** Encountered difficulties with converting base64 image data into displayable formats. Resolved this by ensuring proper conversion and MIME-type handling in the frontend.
- **Efficient API Usage:** Managed rate-limiting issues by implementing retry mechanisms and optimizing API request payloads.
