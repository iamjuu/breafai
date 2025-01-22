import React from 'react'
import { Share2, Clock, Calendar, Download } from 'lucide-react';

const index = () => {
  return (
    <div className="p-4 text-white">
    <h2 className="text-2xl font-semibold mb-4">Overview</h2>
    <p className="text-gray-300 mb-6">
      EventHex stands out by tackling two key challenges that traditional event management often struggles with: creating personalized experiences and ensuring attendee retention. This platform is built to streamline even
    </p>

    <h3 className="text-lg font-semibold mb-4">Session Highlights</h3>
    <div className="space-y-4 bg-gray-800 rounded-lg p-4">
      <div className="flex items-start gap-2">
        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
        <p className="text-gray-300">creating personalized experiences and ensuring attendee retention. This</p>
      </div>
      <div className="flex items-start gap-2">
        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
        <p className="text-gray-300">experiences and ensuring attendee</p>
      </div>
      <div className="flex items-start gap-2">
        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
        <p className="text-gray-300">stands out by tackling two key challeng</p>
      </div>
      <div className="flex items-start gap-2">
        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
        <p className="text-gray-300">personalized experiences and ensuring attendee retention. This</p>
      </div>
    </div>

    {/* Action Buttons */}
    <div className="flex gap-4 mt-6">
      <button className="flex-1 flex items-center justify-center gap-2 border border-gray-600 rounded-lg py-2 px-4 text-blue-400">
        <Share2 className="w-5 h-5" />
        <span>Share</span>
      </button>
      <button className="flex-1 flex items-center justify-center gap-2 border border-gray-600 rounded-lg py-2 px-4 text-blue-400">
        <Download className="w-5 h-5" />
        <span>Download</span>
      </button>
    </div>
  </div>


  )
}

export default index
