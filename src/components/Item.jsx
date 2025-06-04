"use client";

import { X, Check } from "lucide-react";

export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="group hover:bg-white transition-colors duration-200">
      <div className="flex items-center gap-4 p-4">
        <button
          onClick={() => onToggleItem(item.id)}
          className={`flex-shrink-0 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-200 ${
            item.checked
              ? "bg-emerald-500 border-emerald-500 text-white"
              : "border-slate-300 hover:border-emerald-400 hover:bg-emerald-50"
          }`}
          aria-label={`Mark ${item.name} as ${
            item.checked ? "incomplete" : "complete"
          }`}
        >
          {item.checked && <Check className="w-4 h-4" />}
        </button>

        <div className="flex-1 min-w-0">
          <span
            className={`block text-lg transition-all duration-200 ${
              item.checked
                ? "line-through text-slate-400"
                : "text-slate-700 group-hover:text-slate-900"
            }`}
          >
            <span className="font-medium">{item.quantity}</span>
            <span className="mx-2">×</span>
            <span>{item.name}</span>
          </span>
        </div>

        <button
          onClick={() => onDeleteItem(item.id)}
          className="flex-shrink-0 w-8 h-8 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label={`Delete ${item.name}`}
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </li>
  );
}
