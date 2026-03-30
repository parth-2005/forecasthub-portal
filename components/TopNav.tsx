'use client'

import { useState } from 'react'
import { Search, Plus, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function TopNav() {
  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      {/* Left Section: Search */}
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search F&B categories or sensory traits..."
            className="pl-10 bg-gray-50 border-gray-200 text-sm"
          />
        </div>
      </div>

      {/* Right Section: CTA & User */}
      <div className="flex items-center gap-4 ml-6">
        <Button
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white"
          size="sm"
        >
          <Plus className="w-4 h-4" />
          Request Custom Survey
        </Button>

        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
          <User className="w-5 h-5 text-gray-600" />
        </div>
      </div>
    </div>
  )
}
