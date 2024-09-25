import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export async function POST(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db('main-db');

    const data = await req.json();

    // Ensure all fields are checked for existence before inserting
    const newTask = {
      Title: data.Title || "", // Default to empty string if undefined
      About: data.About || "",
      Deadline: data.Deadline || "",
      Ids: data.Ids || "",
      Guru: data.Guru || "",
      Mapel: data.Mapel || "",
      Tipe: data.Tipe || "",
      Detail: data.Detail || "",
    };

    // Update the document by pushing the new task into the 'all' array
    const result = await db.collection('all-db').updateOne(
      { _id: new ObjectId("66b43a652f119c6210cb115e") }, // Find the specific document by its ObjectId
      { $push: { all: newTask } } // Push the new task into the 'all' array
    );

    if (result.modifiedCount > 0) {
      return NextResponse.json({ message: 'Task added successfully' }, { status: 201 });
    } else {
      return NextResponse.json({ message: 'Failed to add task' }, { status: 500 });
    }
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: 'Failed to create task' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db('main-db');

    const result = await db.collection('all-db').findOne({
      _id: new ObjectId("66b43a652f119c6210cb115e"),
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
