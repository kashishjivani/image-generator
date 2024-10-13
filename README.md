# BrandBuzz

BrandBuzz is a GenAI-powered solution designed to simplify the creation of marketing visuals by generating high-quality, engaging images using AI. It allows users to quickly create customized visuals for advertising campaigns, social media posts, and other marketing needs with ease and efficiency.

## Features

- **AI-Powered Visual Generation:** Automatically generate engaging marketing images based on text prompts, utilizing Stability AI's capabilities.
- **Image Customization:** Upload base images to customize visuals, enhancing branding and creativity.
- **Easy Integration:** Simplified UI that allows users to quickly input prompts and download generated images.

## Technologies Used

- **Frontend:** React.js, HTML, CSS
- **AI Integration:** Stability AI (for image generation)
- **Storage & State Management:** Axios for API communication and React state for state management

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

### Example Usage

To generate a marketing banner with BrandBuzz, you can use prompts to customize your visuals. Here's an example:

**Prompt:**
> "Create a banner featuring three different vegetables on a wooden table. Include red bell peppers, broccoli, and carrots, each with a price tag displaying the vegetable name and price. Place the bell peppers in a basket at the center. The background should be a blurred garden, and there should be text 'Fresho Days' with a Big Basket logo at the top left."

**Generated Banner:**

![BrandBuzz Banner Example](./A_banner_image_for_BrandBuzz_featuring_three_diffe.png)

## Future Opportunities

- **Enhanced Customization:** Additional features for more detailed image customization, including text overlays, filters, and advanced styling.
- **Expanded AI Capabilities:** Integration with other AI models to support various content creation needs (e.g., videos, animations).
- **Platform Expansion:** Development of plugins for popular marketing tools and social media platforms to streamline the use of BrandBuzz across different channels.

## Challenges Faced

- **Image Rendering Issue:** Encountered difficulties with converting base64 image data into displayable formats. Resolved this by ensuring proper conversion and MIME-type handling in the frontend.
- **Efficient API Usage:** Managed rate-limiting issues by implementing retry mechanisms and optimizing API request payloads.
