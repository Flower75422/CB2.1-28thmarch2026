import Link from "next/link";

export default function BottomOfCard({ id, onFlip }: any) {
  return (
    <>
      <div className="h-px bg-gray-100 w-full mb-2"></div>
      
      <div className="flex gap-2">
        <Link href={`/chats/${id}`} className="flex-1 flex items-center justify-center py-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-bold transition">
           Chat
        </Link>
        <button className="flex-1 flex items-center justify-center py-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-bold transition">
           Channel
        </button>
        <button onClick={onFlip} className="flex-1 flex items-center justify-center py-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-bold transition">
           Flip
        </button>
      </div>
    </>
  );
}