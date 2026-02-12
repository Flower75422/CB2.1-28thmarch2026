export default function CardSkeleton() {
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-5 flex flex-col gap-3 animate-pulse">

      {/* --- HEADER SECTION --- */}
      <div className="flex items-start justify-between">
        
        <div className="flex gap-3 w-full">
          {/* Avatar Circle */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-gray-200" />
          </div>

          {/* User Info + Stats Stack */}
          <div className="flex flex-col gap-2 w-full">
            {/* Name */}
            <div className="h-4 w-32 bg-gray-200 rounded" />
            {/* Handle */}
            <div className="h-3 w-20 bg-gray-100 rounded" />

            {/* Stats Row (Under User ID) */}
            <div className="flex items-center gap-3 mt-1">
              <div className="h-3 w-8 bg-gray-100 rounded" />
              <div className="h-3 w-8 bg-gray-100 rounded" />
              <div className="h-3 w-8 bg-gray-100 rounded" />
            </div>
          </div>
        </div>

        {/* Top Right Action Circles */}
        <div className="flex gap-1">
          <div className="w-7 h-7 rounded-full bg-gray-100" />
          <div className="w-7 h-7 rounded-full bg-gray-100" />
        </div>
      </div>

      {/* --- BIO LINES --- */}
      <div className="mt-1 space-y-2">
        <div className="h-3 w-full bg-gray-100 rounded" />
        <div className="h-3 w-5/6 bg-gray-100 rounded" />
      </div>

      {/* --- STATUS PILL --- */}
      <div className="mt-1">
        <div className="h-5 w-24 bg-gray-100 rounded-md" />
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-100 w-full" />

      {/* --- BOTTOM BUTTONS --- */}
      <div className="flex gap-2">
        <div className="flex-1 h-9 bg-gray-100 rounded-lg" />
        <div className="flex-1 h-9 bg-gray-100 rounded-lg" />
        <div className="flex-1 h-9 bg-gray-800 rounded-lg opacity-10" /> {/* Darker for Flip */}
      </div>

    </div>
  );
}