import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image src={'https://images.unsplash.com/photo-1713146254843-c7e890264857?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} layout="fill" alt="image" />
    </main>
  );
}
