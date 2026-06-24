'use client';

import { useEffect, useState } from 'react';

export default function NotesCard() {
  const [notes, setNotes] = useState('');

  useEffect(() => {
    const savedNotes =
      localStorage.getItem('superapp-notes');

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = e.target.value;

    setNotes(value);

    localStorage.setItem(
      'superapp-notes',
      value
    );
  };

  return (
    <div className="bg-yellow-300 text-black rounded-3xl p-5 h-[300px]">
      <h2 className="font-bold text-xl mb-4">
        All Notes
      </h2>

      <textarea
        value={notes}
        onChange={handleChange}
        className="w-full h-[220px] bg-transparent outline-none resize-none"
        placeholder="Write notes here..."
      />
    </div>
  );
}