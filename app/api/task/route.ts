// app/api/task/route.ts
import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb'; // Import ObjectId

export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db('main-db'); // Ganti 'main-db' dengan nama database kamu

    // Query ke MongoDB menggunakan ObjectId
    const result = await db.collection('all-db').findOne({
      _id: new ObjectId("66b43a652f119c6210cb115e")
    });

    if (result && result.all) {
      return NextResponse.json(result.all);
    } else {
      return NextResponse.json({ message: 'Data not found' }, { status: 404 });
    }
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: 'Failed to fetch tasks' }, { status: 500 });
  }
}
