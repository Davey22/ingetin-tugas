
import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb';

export async function GET(req: NextRequest, { params }: { params: { ids: string } }) {
  try {
    const client = await clientPromise;
    const db = client.db('main-db'); 

    const { ids } = params;

    console.log('Received ID:', ids);

    const task = await db.collection('all-db').findOne({
      'all.Ids': ids
    }, {
      projection: {
        all: { $elemMatch: { Ids: ids } } 
      }
    });

    console.log('Found Task:', task);

    if (task && task.all && task.all.length > 0) {
      return NextResponse.json(task.all[0]); 
    } else {
      console.log('Task not found for ID:', ids);
      return NextResponse.json({ message: 'Task not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching task:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
