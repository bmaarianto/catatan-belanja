"use client";

import { useState } from "react";
import { ArrowUpDown, Trash2 } from "lucide-react";
import Item from "./Item";

export default function GroceryList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  switch (sortBy) {
    case "name":
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "checked":
      sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
      break;
    default:
      sortedItems = items;
      break;
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-12 mb-8">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <ArrowUpDown className="w-8 h-8 text-slate-400" />
        </div>
        <p className="text-slate-500 text-lg">Daftar belanja masih kosong</p>
        <p className="text-slate-400 text-sm mt-1">
          Tambahkan item pertama Anda!
        </p>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1">
          <label
            htmlFor="sortBy"
            className="block text-sm font-medium text-slate-600 mb-1"
          >
            Urutkan berdasarkan
          </label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
          >
            <option value="input">Urutan input</option>
            <option value="name">Nama barang</option>
            <option value="checked">Status ceklis</option>
          </select>
        </div>

        <div className="sm:w-auto">
          <label className="block text-sm font-medium text-slate-600 mb-1 sm:invisible">
            Hapus
          </label>
          <button
            onClick={onClearItems}
            className="w-full sm:w-auto px-6 py-3 bg-red-500 text-white font-medium rounded-xl hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
            Bersihkan
          </button>
        </div>
      </div>

      <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
        <ul className="divide-y divide-slate-200">
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
