import { useState } from 'react';
import { Link2, Copy, Check, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useActor } from '@/hooks/useActor';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

export function UrlShortener() {
  const { actor } = useActor();
  const { copy, isCopied } = useCopyToClipboard();
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const isValidUrl = (urlString: string) => {
    try {
      new URL(urlString);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setShortUrl('');

    if (!url.trim()) {
      setError('Please enter a URL');
      return;
    }

    if (!isValidUrl(url)) {
      setError('Please enter a valid URL (e.g., https://example.com)');
      return;
    }

    if (!actor) {
      setError('Backend not available. Please try again.');
      return;
    }

    setIsLoading(true);
    try {
      const shortCode = await actor.generateShortUrl(url);
      const baseUrl = window.location.origin;
      const generatedShortUrl = `${baseUrl}/${shortCode}`;
      setShortUrl(generatedShortUrl);
    } catch (err) {
      console.error('Error generating short URL:', err);
      setError('Failed to generate short URL. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (shortUrl) {
      copy(shortUrl);
    }
  };

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <Card className="border-2">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Link2 className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-3xl">URL Shortener</CardTitle>
              <CardDescription className="text-base">
                Transform long URLs into short, easy-to-share links
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Enter your long URL here (e.g., https://example.com/very/long/path)"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="h-12 text-base"
                    disabled={isLoading}
                  />
                  {error && (
                    <p className="text-sm text-destructive">{error}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Link2 className="h-5 w-5" />
                      Shorten URL
                    </>
                  )}
                </Button>
              </form>

              {shortUrl && (
                <div className="space-y-3 rounded-lg border-2 border-primary/20 bg-accent/30 p-4">
                  <p className="text-sm font-medium text-muted-foreground">
                    Your shortened URL:
                  </p>
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      value={shortUrl}
                      readOnly
                      className="h-12 text-base font-mono bg-background"
                    />
                    <Button
                      onClick={handleCopy}
                      size="lg"
                      variant="outline"
                      className="gap-2 border-2 min-w-[120px]"
                    >
                      {isCopied ? (
                        <>
                          <Check className="h-5 w-5 text-green-600" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-5 w-5" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Share this link anywhere - it will redirect to your original URL
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
