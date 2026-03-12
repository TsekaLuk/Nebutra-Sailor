import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'resume.pdf');
  
  if (!fs.existsSync(filePath)) {
    return new NextResponse('Resume not found', { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      'Content-Disposition': 'attachment; filename="Tseka_Luk_Resume.pdf"',
      'Content-Type': 'application/pdf',
    },
  });
}
