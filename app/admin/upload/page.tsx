"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Upload, CheckCircle, Loader2, Video } from "lucide-react"

export default function UploadVideoPage() {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('video/')) {
      setError('Please select a video file')
      return
    }

    setIsUploading(true)
    setError(null)
    setUploadSuccess(false)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/upload-video', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Upload failed')
      }

      setCurrentVideoUrl(data.url)
      setUploadSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed')
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 text-3xl font-bold text-foreground">Upload VSL Video</h1>
        <p className="mb-8 text-muted-foreground">
          Upload your Video Sales Letter to replace the placeholder on the homepage.
        </p>

        <div className="rounded-lg border border-border bg-card p-6">
          <input
            type="file"
            accept="video/*"
            onChange={handleUpload}
            ref={fileInputRef}
            className="hidden"
          />

          {!isUploading && !uploadSuccess && (
            <div 
              className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border p-12 transition-colors hover:border-primary hover:bg-primary/5"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="mb-4 h-12 w-12 text-muted-foreground" />
              <p className="mb-2 text-lg font-medium text-foreground">Click to upload video</p>
              <p className="text-sm text-muted-foreground">MP4, MOV, WebM supported</p>
            </div>
          )}

          {isUploading && (
            <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-primary bg-primary/5 p-12">
              <Loader2 className="mb-4 h-12 w-12 animate-spin text-primary" />
              <p className="text-lg font-medium text-foreground">Uploading video...</p>
              <p className="text-sm text-muted-foreground">This may take a moment for large files</p>
            </div>
          )}

          {uploadSuccess && currentVideoUrl && (
            <div className="flex flex-col items-center">
              <div className="mb-4 flex items-center gap-2 text-green-500">
                <CheckCircle className="h-6 w-6" />
                <span className="font-medium">Video uploaded successfully!</span>
              </div>
              
              <div className="mb-4 w-full">
                <video 
                  src={currentVideoUrl} 
                  controls 
                  className="w-full rounded-lg"
                />
              </div>

              <Button 
                onClick={() => {
                  setUploadSuccess(false)
                  setCurrentVideoUrl(null)
                }}
                variant="outline"
              >
                <Video className="mr-2 h-4 w-4" />
                Upload Different Video
              </Button>
            </div>
          )}

          {error && (
            <div className="mt-4 rounded-lg bg-destructive/10 p-4 text-destructive">
              {error}
            </div>
          )}
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          Note: Uploading a new video will replace the existing VSL video on the homepage.
        </p>
      </div>
    </div>
  )
}
