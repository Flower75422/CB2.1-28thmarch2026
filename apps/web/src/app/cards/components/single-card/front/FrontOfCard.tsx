// apps/web/src/app/cards/components/single-card/front/FrontOfCard.tsx
import TopOfFrontCard from "./TopOfFrontCard";
import BodyOfSingleCard from "./BodyOfSingleCard";
import BottomOfCard from "./BottomOfCard";

export default function FrontOfCard(props: any) {
  return (
    <div className="w-full h-full bg-white rounded-2xl shadow-sm border border-gray-200 p-5 font-sans flex flex-col justify-between gap-3">
      <TopOfFrontCard {...props} />
      {/* Body now handles bio, location, and status */}
      <BodyOfSingleCard {...props} /> 
      <BottomOfCard {...props} />
    </div>
  );
}