import { redirect } from "next/navigation";

export default function Home() {
  // This function immediately sends the user to the "/cards" route
  redirect("/cards");
}