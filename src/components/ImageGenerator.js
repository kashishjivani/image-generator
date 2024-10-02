import React, { useState } from "react";
import axios from "axios";
import "./ImageGenerator.css"; // Importing CSS for styles

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null); // State for file preview

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("prompt", prompt);
    if (file) {
      formData.append("init_image", file); // Append the uploaded image
    }

    try {
      const response = await axios.post(
        "https://api.stability.ai/v2beta/stable-image/generate/ultra",
        formData,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_STABILITY_API_KEY}`,
            "Content-Type": "multipart/form-data",
          },
          responseType: "arraybuffer",
        }
      );

      //   const blob = new Blob([response.data], { type: "image/webp" });
      //   const imageUrl = URL.createObjectURL(blob);
      //   setImage(imageUrl);
      const base64Image = response.data.image; // Make sure this is how the base64 string is returned
      setImage(`data:image/webp;base64,${base64Image}`);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = image;
    link.download = "generated-image.webp";
    link.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFilePreview(URL.createObjectURL(selectedFile));
    }
    // setImage(URL.createObjectURL(selectedFile));
  };

  return (
    <div className="image-generator">
      <div className="chat-container">
        <div className="user-input">
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                }}
              >
                {filePreview && (
                  <img
                    src={filePreview}
                    alt="Uploaded Preview"
                    className="file-preview"
                  />
                )}
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  id="file-input"
                />
                <label htmlFor="file-input" className="upload-button">
                  📁
                </label>
              </div>
              <textarea
                rows="4"
                cols="50"
                placeholder="Enter your prompt here..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>
            <button type="submit">Generate</button>
          </form>
        </div>

        {loading && <p className="loading">Loading...</p>}

        {image && (
          <div className="generated-image-container">
            <img
              src={image}
              alt="Generated"
              style={{ maxWidth: "100%", marginTop: "10px" }}
            />
            <button onClick={downloadImage}>Download Image</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGenerator;
