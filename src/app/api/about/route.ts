import { NextResponse } from 'next/server';

export interface AboutResponse {
  data: {
    message: string;
  }
}
export async function GET(request: Request) {
  console.log(request)
  return NextResponse.json({ message: 'This is the about page' });
}
