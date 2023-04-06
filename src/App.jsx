import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  const generateImg = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    setResult(res.data.data[0].url);
  };

  return (
    <div className="app-main">
      <h1>OpenAI Image Generator</h1>
      <label htmlFor="">
        Type prompt to generate <img src="" alt="" />
      </label>
      <input
        className="app-input"
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={generateImg}>Generate an Image</button>
      <div className="image-holder">
      {result.length > 0 ? <img src={result} alt="bbu" /> : null}
      </div>
    </div>
  );
}

export default App;
