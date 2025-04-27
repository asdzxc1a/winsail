import { ImageResponse } from '@vercel/og';
import type { NextRequest } from 'next/server';
import React from 'react';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Landing Page';

  return new ImageResponse(
    React.createElement(
      'div',
      { style: {
          background: '#f8fafc',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 64,
          fontFamily: 'Arial, sans-serif',
          color: '#111827',
          padding: '0 48px',
          textAlign: 'center',
        }
      },
      title
    ),
    { width: 1200, height: 630 }
  );
}
