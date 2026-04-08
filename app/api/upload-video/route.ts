import { put, list, del } from '@vercel/blob'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Validate file type
    if (!file.type.startsWith('video/')) {
      return NextResponse.json({ error: 'File must be a video' }, { status: 400 })
    }

    // Delete any existing VSL videos first
    const { blobs } = await list({ prefix: 'vsl-video' })
    for (const blob of blobs) {
      await del(blob.url)
    }

    // Upload the new video with a consistent name
    const blob = await put(`vsl-video/${file.name}`, file, {
      access: 'public',
    })

    return NextResponse.json({ url: blob.url })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const { blobs } = await list({ prefix: 'vsl-video' })
    
    if (blobs.length === 0) {
      return NextResponse.json({ url: null })
    }

    // Return the most recent video
    const latestVideo = blobs[blobs.length - 1]
    return NextResponse.json({ url: latestVideo.url })
  } catch (error) {
    console.error('Error fetching video:', error)
    return NextResponse.json({ error: 'Failed to fetch video' }, { status: 500 })
  }
}
