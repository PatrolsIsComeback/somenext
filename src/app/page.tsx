import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Home() {
  const animes = [
    { id: 1, title: 'ATRI -My Dear Moments-', episode: 'Bölüm 12', image: 'https://gogocdn.net/cover/atri-my-dear-moments.png' },
    { id: 2, title: 'One Piece', episode: 'Bölüm 1107', image: 'https://gogocdn.net/cover/one-piece.png' },
    { id: 3, title: 'Chainsaw Man', episode: 'Bölüm 12', image: 'https://gogocdn.net/cover/chainsaw-man.png' },
    { id: 4, title: 'Jujutsu Kaisen', episode: 'Bölüm 24', image: 'https://gogocdn.net/cover/jujutsu-kaisen.png' },
    { id: 5, title: 'Boku no Hero Academia', episode: 'Bölüm 138', image: 'https://gogocdn.net/cover/boku-no-hero-academia-6.png' },
    { id: 6, title: 'Bleach', episode: 'Bölüm 366', image: 'https://gogocdn.net/cover/bleach.png' },
    { id: 7, title: 'Attack on Titan', episode: 'Bölüm 88', image: 'https://gogocdn.net/cover/shingeki-no-kyojin-the-final-season-part-3.png' },
    { id: 8, title: 'Hunter x Hunter', episode: 'Bölüm 148', image: 'https://gogocdn.net/cover/hunter-x-hunter-2011.png' },
  ];

  return (
    <div className="flex bg-[var(--background-color)]">
      {/* Sidebar */}
      <Sidebar />

      {/* Ana içerik alanı */}
      <div className="flex-grow ml-20 min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Sayfa içeriği */}
        <main className="pt-20 p-6 md:p-8">
          {/* Öne Çıkan Anime Banner'ı */}
          <div className="relative w-full h-[30rem] rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://wallpapercave.com/wp/wp12204557.jpg"
              alt="ATRI -My Dear Moments-"
              className="w-full h-full object-cover brightness-50"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">ATRI -My Dear Moments-</h1>
              <div className="flex items-center text-lg md:text-xl font-medium mb-4 space-x-2">
                <span>7.4</span>
                <span className="bg-white/20 rounded-full px-3 py-1 text-sm font-semibold">12 Bölüm</span>
                <span className="bg-white/20 rounded-full px-3 py-1 text-sm font-semibold">1 Sezon</span>
              </div>
              <div className="flex space-x-4">
                <button className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors">
                  İzle
                </button>
                <button className="bg-white/30 text-white px-6 py-2 rounded-full font-bold hover:bg-white/50 transition-colors">
                  Listeye Ekle
                </button>
              </div>
            </div>
          </div>

          {/* Popüler Serilerden Son Bölümler */}
          <section className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Popüler Serilerden Son Bölümler</h2>
              <span className="text-[var(--accent-blue)] text-sm font-semibold cursor-pointer hover:underline">
                Tümünü Gör &gt;
              </span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {animes.map((anime) => (
                <div key={anime.id} className="relative cursor-pointer group">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={anime.image}
                      alt={anime.title}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-sm font-bold truncate">{anime.title}</h3>
                    <p className="text-xs text-gray-400">{anime.episode}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
