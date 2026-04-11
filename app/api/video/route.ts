import { get } from '@vercel/blob'
import { type NextRequest, NextResponse } from 'next/server'

const VIDEO_PATHNAME = "0404 (3)(8) (1).mov"

export async function GET(request: NextRequest) {
  try {
    const result = await get(VIDEO_PATHNAME, {
      access: 'private',
    })

    if (!result) {
      return new NextResponse('Video not found', { status: 404 })
    }

    // Stream the video with proper headers for video playback
    return new NextResponse(result.stream, {
      headers: {
        'Content-Type': result.blob.contentType || 'video/quicktime',
        'Content-Length': result.blob.size.toString(),
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (error) {
    console.error('Error serving video:', error)
    return NextResponse.json({ error: 'Failed to serve video' }, { status: 500 })
  }
}
