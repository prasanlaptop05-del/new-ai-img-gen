
import React, { useState, useCallback } from 'react';
import { generateImage } from './services/geminiService';
import { LoadingSpinner } from './components/LoadingSpinner';
import { SparklesIcon, ImageIcon, AlertTriangleIcon } from './components/Icons';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setImageUrl(null);
    try {
      const url = await generateImage(prompt);
      setImageUrl(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [prompt]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600 text-white flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-4xl backdrop-filter backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 shadow-2xl p-6 md:p-10 transition-all duration-500">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            AI Image Studio
          </h1>
          <p className="text-gray-300 mt-2 text-lg">Bring your imagination to life with a single prompt.</p>
        </header>

        <main>
          <div className="flex flex-col gap-4">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., A majestic lion wearing a crown, studio lighting, hyperrealistic"
              className="w-full h-28 p-4 bg-white/5 border border-white/20 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow text-white placeholder-gray-400"
              disabled={isLoading}
            />
            <button
              onClick={handleGenerate}
              disabled={isLoading || !prompt.trim()}
              className="flex items-center justify-center gap-2 w-full md:w-auto md:self-end bg-purple-600 hover:bg-purple-700 disabled:bg-gray-500 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500"
            >
              {isLoading ? (
                <>
                  <LoadingSpinner />
                  Generating...
                </>
              ) : (
                <>
                  <SparklesIcon />
                  Generate Image
                </>
              )}
            </button>
          </div>

          {error && (
            <div className="mt-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3 text-red-300">
                <AlertTriangleIcon />
                <span>{error}</span>
            </div>
          )}

          <div className="mt-8 w-full aspect-square bg-white/5 rounded-xl border border-white/20 flex items-center justify-center overflow-hidden">
            {isLoading && (
              <div className="text-center text-gray-400">
                <LoadingSpinner className="w-12 h-12" />
                <p className="mt-4">Conjuring your masterpiece...</p>
              </div>
            )}
            {!isLoading && imageUrl && (
              <img src={imageUrl} alt={prompt} className="w-full h-full object-contain" />
            )}
            {!isLoading && !imageUrl && (
              <div className="text-center text-gray-400 p-8">
                <ImageIcon className="w-16 h-16 mx-auto" />
                <p className="mt-4">Your generated image will appear here.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
