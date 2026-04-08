import { get } from '@vercel/blob'
import { type NextRequest, NextResponse } from 'next/server'

const VIDEO_PATHNAME = "0404 (3)(8) (1).mov"

export async function GET(request: NextRequest) {
  try {
    const result = await get(VIDEO_PATHNAME, {
      access: 'private',
      ifNoneMatch: request.headers.get('if-none-match') ?? undefined,
    })

    if (!result) {
      return new NextResponse('Video not found', { status: 404 })
    }

    // Blob hasn't changed — tell the browser to use its cached copy
    if (result.statusCode === 304) {
      return new NextResponse(null, {
        status: 304,
        headers: {
          ETag: result.blob.etag,
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      })
    }

    return new NextResponse(result.stream, {
      headers: {
        'Content-Type': result.blob.contentType || 'video/quicktime',
        ETag: result.blob.etag,
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Accept-Ranges': 'bytes',
      },
    })
  } catch (error) {
    console.error('Error serving video:', error)
    return NextResponse.json({ error: 'Failed to serve video' }, { status: 500 })
  }
}
