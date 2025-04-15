import { NextRequest } from 'next/server';

let refreshCount = 0;

export async function GET(req: NextRequest) {
  refreshCount++;

  const forwardedFor = req.headers.get('x-forwarded-for');
  const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'Unknown IP';

  console.log(`Page refreshed ${refreshCount-1} times by IP: ${ip}`);

  const img = Buffer.from(
    'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    'base64'
  );

  return new Response(img, {
    headers: {
      'Content-Type': 'image/gif',
      'Content-Length': img.length.toString(),
    },
    status: 200,
  });
}
