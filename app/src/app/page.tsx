
// module resolution: bundler
// import { x_a, type A  } from "@vendor/package/x/a"; // directory export breaks.
// import { y } from "@vendor/package/y"; // individual file export works

// moduleResolution: node / nodenext
import { x_a, type A  } from "@vendor/package/x/a"; // directory export breaks.
import { y } from "@vendor/package/y"; // individual file export works

export default async function Home() {
  x_a();
  return (
    <main className="flex min-h-screen bg-black text-white">
    </main>
  );
}
