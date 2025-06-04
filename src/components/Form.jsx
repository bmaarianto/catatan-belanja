"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) return;

    const newItem = {
      name: name.trim(),
      quantity,
      checked: false,
      id: Date.now(),
    };
    onAddItem(newItem);

    setName("");
    setQuantity(1);
  }

  const quantityOptions = [...Array(20)].map((_, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ));

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-slate-700 mb-6 text-center">
        Hari ini belanja apa?
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="sm:w-24">
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-slate-600 mb-1"
            >
              Jumlah
            </label>
            <select
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
            >
              {quantityOptions}
            </select>
          </div>

          <div className="flex-1">
            <label
              htmlFor="itemName"
              className="block text-sm font-medium text-slate-600 mb-1"
            >
              Nama Barang
            </label>
            <input
              id="itemName"
              type="text"
              placeholder="Masukkan nama barang..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="sm:w-auto">
            <label className="block text-sm font-medium text-slate-600 mb-1 sm:invisible">
              Tambah
            </label>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-xl hover:from-emerald-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Tambah
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
