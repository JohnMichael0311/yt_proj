import { Card } from "@/components/ui/card";

interface SummaryProps {
  content: string;
  isLoading?: boolean;
}

export function Summary({ content, isLoading }: SummaryProps) {
  if (isLoading) {
    return (
      <Card className="w-full max-w-2xl p-6 space-y-4">
        <div className="h-4 bg-accent/20 rounded animate-pulse w-3/4" />
        <div className="h-4 bg-accent/20 rounded animate-pulse w-full" />
        <div className="h-4 bg-accent/20 rounded animate-pulse w-5/6" />
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl p-6">
      <h3 className="text-lg font-semibold mb-4">Summary</h3>
      <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{content}</p>
    </Card>
  );
}