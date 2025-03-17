import React from 'react';
import { CampaignCard } from './CampaignCard';

const campaigns = [
  { brandName: "Nike", payoutDetails: "Fixed Pay", hired: "5", totalSlots: "10", image: "https://tse4.mm.bing.net/th?id=OIP.WlTthXGmL7Ax0lYId5fCGwHaFS&pid=Api&P=0&h=180s", description: "Exciting collaboration opportunity with Nike.", voucher: "🎁 Bonus" },
  { brandName: "Adidas", payoutDetails: "Barter", hired: "3", totalSlots: "5", image: "https://static.vecteezy.com/system/resources/previews/019/136/309/original/adidas-logo-adidas-icon-free-free-vector.jpg", description: "Work with Adidas on a creative project.", voucher: "🚀 Featured" },
  { brandName: "Puma", payoutDetails: "Refunds", hired: "2", totalSlots: "4", image: "https://tse2.mm.bing.net/th?id=OIP.JFvo7u5MInuYRKKacZSKgQHaEc&pid=Api&P=0&h=180", description: "Special campaign with Puma.", voucher: "🎉 Cashback" },
  { brandName: "Fila", payoutDetails: "Fixed Pay", hired: "7", totalSlots: "10", image: "https://static.vecteezy.com/system/resources/previews/023/871/637/large_2x/fila-logo-brand-clothes-symbol-name-white-design-fashion-illustration-with-black-background-free-vector.jpg", description: "Partner with Fila on upcoming campaigns.", voucher: "🔥 Limited" }
];

const CampaignsList = () => {
  return (
    <section className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {campaigns.map((campaign, idx) => (
        <CampaignCard key={idx} campaign={campaign} />
      ))}
    </section>
  );
};

export default CampaignsList;
