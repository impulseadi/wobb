import React, { useState } from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export const CampaignCard = ({ campaign }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [applied, setApplied] = useState(false);

  const hiringPercentage = (parseInt(campaign.hired) / parseInt(campaign.totalSlots)) * 100;

  const handleApply = () => {
    setApplied(true);
    setIsOpen(false);
  };

  return (
    <Card className="w-full md:w-[300px] shadow-xl rounded-2xl transition-transform transform hover:scale-[1.03] bg-white mx-auto">
      <div className="relative">
        <img
          src={campaign.image}
          alt={campaign.brandName}
          className="rounded-t-2xl h-40 w-full object-cover"
        />

        {/* Label Badge */}
        <span className="absolute top-2 left-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs px-2 py-1 rounded-md shadow">
          {campaign.label || 'New'}
        </span>

        {/* Voucher Badge */}
        {campaign.voucher && (
          <span className="absolute top-2 right-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded-md shadow">
            {campaign.voucher}
          </span>
        )}
      </div>

      <CardContent className="space-y-3 p-4">
        <CardTitle className="text-lg font-semibold text-[#0a0f24]">{campaign.brandName}</CardTitle>
        <p className="text-sm text-[#334155]">{campaign.description}</p>

        <div className="flex justify-between items-center text-sm mt-2">
          <span className="font-medium text-[#3b82f6]">{campaign.payoutDetails}</span>
          {/* Updated hired text */}
          <span className="text-sm font-semibold text-[#0a0f24]">{campaign.hired}/{campaign.totalSlots} hired</span>
        </div>
        <div className="space-y-1">
          <Progress
            value={hiringPercentage}
            className="h-2 bg-gray-200 rounded-full overflow-hidden"
            style={{ background: 'linear-gradient(to right, #3b82f6, #6366f1)' }}
          />
          {/* Updated progress text */}
          <p className="text-sm text-right text-[#0a0f24] font-semibold">{Math.round(hiringPercentage)}% filled</p>
        </div>

        <Button
          className={`w-full mt-3 py-2 rounded-lg text-sm transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer ${
            applied
              ? 'bg-green-500 text-white cursor-default hover:scale-100'
              : 'hover:bg-[#3b82f6] hover:text-white'
          }`}
          onClick={() => !applied && setIsOpen(true)}
          disabled={applied}
        >
          {applied ? 'Applied' : 'Apply Now'}
        </Button>
      </CardContent>

      {/* Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Application</DialogTitle>
          </DialogHeader>
          <p>Are you sure you want to apply for <strong>{campaign.brandName}</strong> campaign?</p>
          <div className="flex justify-end space-x-3 mt-4">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button className="cursor-pointer" onClick={handleApply}>
              Confirm Application
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};
