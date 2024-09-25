import { NextPage } from 'next';
import clientPromise from '../../../../lib/mongodb';

// Fungsi generateStaticParams untuk mendukung static generation pada dynamic routes
export async function generateStaticParams() {
  const client = await clientPromise;
  const db = client.db('main-db');

  // Mengambil semua Ids dari database
  const ids = await db.collection('all-db').distinct('all.Ids'); // Mengambil semua ID unik

  return ids.map((id: string) => ({
    ids: id.toString(),
  }));
}

// Halaman dynamic route yang menerima `params` berisi ID dari URL
const TaskPage: NextPage<{ params: { ids: string } }> = async ({ params }) => {
  const { ids } = params;

  try {
    const client = await clientPromise;
    const db = client.db('main-db');

    // Mendapatkan task berdasarkan Ids
    const task = await db.collection('all-db').findOne(
      { 'all.Ids': ids },
      {
        projection: {
          all: { $elemMatch: { Ids: ids } }, // Mengambil hanya task dengan ID tersebut
        },
      }
    );

    if (task && task.all && task.all.length > 0) {
      const taskData = task.all[0]; // Task yang ditemukan
      return (
        <div>
          <h1>Task ID: {ids}</h1>
          <p>Task Detail: {JSON.stringify(taskData)}</p>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Task not found for ID: {ids}</h1>
        </div>
      );
    }
  } catch (error) {
    console.error('Error fetching task:', error);
    return (
      <div>
        <h1>Error fetching task for ID: {ids}</h1>
      </div>
    );
  }
};

export default TaskPage;
