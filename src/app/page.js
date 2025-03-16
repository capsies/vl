import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <Header />
      <main className="p-6">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
