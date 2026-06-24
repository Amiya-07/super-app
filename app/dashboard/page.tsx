import ProfileCard from '@/components/ProfileCard';
import WeatherCard from '@/components/WeatherCard';
import NewsCard from '@/components/NewsCard';
import NotesCard from '@/components/NotesCard';
import TimerCard from '@/components/TimerCard';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black p-8 text-white">
      
      {/* Top Section */}
      <div className="grid grid-cols-3 gap-6">
        <ProfileCard />
        <WeatherCard />
        <NewsCard />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        <NotesCard />
        <TimerCard />

        <div className="flex items-center justify-center">
          <a
            href="/movies"
            className="
              bg-green-500
              text-black
              px-8
              py-4
              rounded-full
              font-bold
              hover:bg-green-400
              transition-all
            "
          >
            Browse Movies
          </a>
        </div>
      </div>

    </div>
  );
}