// src/app/page.tsx

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Ana içerik alanı */}
      <div className="flex-grow ml-20"> {/* Sidebar'ın genişliği kadar boşluk bırak */}
        {/* Navbar */}
        <Navbar />

        {/* Sayfa içeriği burada olacak */}
        <main className="pt-16 p-4"> {/* Navbar'ın yüksekliği kadar boşluk bırak */}
          {/* Ana sayfa bannerı ve diğer içerikler buraya gelecek */}
          <h1 className="text-3xl font-bold">Ana Sayfa</h1>
          <p className="mt-4">İçerik alanı için yer tutucu.</p>
        </main>
      </div>
    </div>
  );
}
