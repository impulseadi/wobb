import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CampaignsList from "./components/Campaignslist";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <header className="text-center my-14 space-y-6 px-4">
  <h1 className="text-5xl md:text-6xl font-extrabold text-[#0a0f24] leading-tight">
    Discover Influencer Campaigns
  </h1>
  <p className="text-lg md:text-xl text-[#475569]">
    Collaborate with top brands and grow your reach
  </p>
  <Button className="bg-gradient-to-r from-[#3b82f6] to-[#6366f1] hover:from-[#2563eb] hover:to-[#4f46e5] px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
    Explore Campaigns 🚀
  </Button>
</header>

      <main className="flex-grow">
        <CampaignsList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
