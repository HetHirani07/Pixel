import { NextRequest } from 'next/server';
import { PageProps } from '@/app/pageProps';

export async function GET(
  req: NextRequest,
  context: any
) {
  const id  = context?.params?.id;

  const page = PageProps.find((i) => i.id.toString() === id);

  const forwardedFor = req.headers.get('x-forwarded-for');
  const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'Unknown IP';

  if (page) {
    console.log(`Page id: ${page.id}, name: ${page.name} by IP: ${ip}`);
  } else {
    console.log(`Page not found for id ${id}, by IP: ${ip}`);
  }

  const img = Buffer.from(
    'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    'base64'
  );

  return new Response(img, {
    headers: {
      'Content-Type': 'image/gif',
      'Content-Length': img.length.toString(),
      'Cache-Control': 'no-cache',
    },
    status: 200,
  });
}
