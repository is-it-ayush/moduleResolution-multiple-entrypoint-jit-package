
import { x_a, type A } from "@vendor/package/x/a";
import { y } from "@vendor/package/y";

export default async function Home() {
  type HoverMe = A;
  x_a();
  y();
  return (
    <main className="flex min-h-screen bg-black text-white">
    </main>
  );
}
