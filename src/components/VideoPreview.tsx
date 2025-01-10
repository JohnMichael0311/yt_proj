import { Card } from "@/components/ui/card";

interface VideoPreviewProps {
  videoId: string;
  title?: string;
}

export function VideoPreview({ videoId, title }: VideoPreviewProps) {
  return (
    <Card className="w-full max-w-2xl overflow-hidden">
      <div className="relative pb-[56.25%]">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title || "YouTube video player"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
      {title && (
        <div className="p-4">
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
      )}
    </Card>
  );
}