import { useState } from "react";
import { VideoInput } from "@/components/VideoInput";
import { VideoPreview } from "@/components/VideoPreview";
import { Summary } from "@/components/Summary";
import { toast } from "sonner";

function getVideoId(url: string) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : null;
}

export default function Index() {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [summary, setSummary] = useState<string>("");

  const handleSubmit = async (url: string) => {
    const id = getVideoId(url);
    if (!id) {
      toast.error("Could not extract video ID from URL");
      return;
    }

    setVideoId(id);
    setIsLoading(true);
    
    // Simulate API call for demo
    setTimeout(() => {
      setSummary("This is a simulated summary of the video. In a real implementation, this would be generated by processing the video transcript through an AI model. The summary would include key points, main ideas, and important details from the video content.");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/10 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            YouTube Video Summarizer
          </h1>
          <p className="text-gray-600">
            Get quick, AI-powered summaries of any YouTube video
          </p>
        </div>

        <VideoInput onSubmit={handleSubmit} isLoading={isLoading} />

        {videoId && (
          <div className="space-y-8">
            <VideoPreview videoId={videoId} />
            <Summary content={summary} isLoading={isLoading} />
          </div>
        )}
      </div>
    </div>
  );
}