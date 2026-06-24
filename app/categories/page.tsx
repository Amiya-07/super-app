'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/store/useStore';

const categories = [
  'Action',
  'Drama',
  'Romance',
  'Thriller',
  'Western',
  'Horror',
  'Fantasy',
  'Music',
  'Fiction',
];

export default function CategoriesPage() {
  const router = useRouter();

  const [selected, setSelected] = useState<string[]>([]);

  const setCategories = useStore(
    (state) => state.setCategories
  );

  const toggleCategory = (category: string) => {
    if (selected.includes(category)) {
      setSelected(
        selected.filter((item) => item !== category)
      );
    } else {
      setSelected([...selected, category]);
    }
  };

  const handleNext = () => {
    if (selected.length < 3) {
      alert('Please select at least 3 categories');
      return;
    }

    setCategories(selected);

    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* LEFT */}
      <div className="w-1/2 p-16">
        <h1 className="text-green-500 text-4xl mb-8">
          Super App
        </h1>

        <h2 className="text-6xl font-bold leading-tight mb-8">
          Choose your
          <br />
          entertainment
          <br />
          category
        </h2>

        <div className="flex flex-wrap gap-3 mb-6">
          {selected.map((item) => (
            <span
              key={item}
              className="bg-green-500 text-black px-4 py-2 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        {selected.length < 3 && (
          <p className="text-red-500">
            Minimum 3 category required
          </p>
        )}
      </div>

      {/* RIGHT */}
      <div className="w-1/2 p-16">
        <div className="grid grid-cols-3 gap-5">
          {categories.map((category) => (
            <div
              key={category}
              onClick={() => toggleCategory(category)}
              className={`
                cursor-pointer
                rounded-xl
                h-32
                flex
                items-center
                justify-center
                font-semibold
                text-xl
                transition-all
                hover:scale-105

                ${
                  selected.includes(category)
                    ? 'border-4 border-green-500 bg-zinc-800'
                    : 'bg-zinc-700'
                }
              `}
            >
              {category}
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-10">
          <button
            onClick={handleNext}
            className="bg-green-500 text-black px-8 py-3 rounded-full font-semibold"
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
}





