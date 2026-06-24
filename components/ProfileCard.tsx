'use client';

import { useStore } from '@/store/useStore';

export default function ProfileCard() {
  const user = useStore((state) => state.user);
  const categories = useStore((state) => state.categories);

  return (
    <div className="bg-[#5746EA] rounded-3xl p-6 text-white h-full">
      <p className="text-lg">{user?.name}</p>

      <p className="text-sm opacity-80">
        {user?.email}
      </p>

      <h2 className="text-2xl font-bold mt-3">
        {user?.username}
      </h2>

      <div className="flex flex-wrap gap-2 mt-5">
        {categories.map((category) => (
          <span
            key={category}
            className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-semibold"
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
}