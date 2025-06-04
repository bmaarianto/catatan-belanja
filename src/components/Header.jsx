import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-4 shadow-lg">
        <ShoppingCart className="w-8 h-8 text-white" />
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-2 tracking-tight">
        Catatan Belanja
      </h1>
      <p className="text-slate-500 text-sm sm:text-base">
        Kelola daftar belanjaan Anda dengan mudah
      </p>
    </div>
  );
}
