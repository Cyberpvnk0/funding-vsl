import { getDownloadUrl } from '@vercel/blob'
import { type NextRequest, NextResponse } from 'next/server'

const VIDEO_PATHNAME = "0404 (3)(8) (1).mov"

export async function GET(request: NextRequest) {
  try {
    // Generate a signed download URL that's valid for 1 hour
    const downloadUrl = await getDownloadUrl(VIDEO_PATHNAME, {
      access: 'private',
      expiresInSeconds: 3600, // 1 hour
    })

    // Redirect to the signed URL for direct video access
    return NextResponse.redirect(downloadUrl)
  } catch (error) {
    console.error('Error serving video:', error)
    return NextResponse.json({ error: 'Failed to serve video' }, { status: 500 })
  }
}
