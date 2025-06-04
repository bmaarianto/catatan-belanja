import { CheckCircle, Circle, TrendingUp } from "lucide-react"

export default function Footer({ items }) {
  if (items.length === 0) return null

  const totalItems = items.length
  const checkedItems = items.filter((item) => item.checked).length
  const percentage = Math.round((checkedItems / totalItems) * 100)

  return (
    <div className="border-t border-slate-200 pt-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-2">
            <Circle className="w-6 h-6 text-slate-500" />
          </div>
          <div className="text-2xl font-bold text-slate-700">{totalItems}</div>
          <div className="text-sm text-slate-500">Total Item</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-2">
            <CheckCircle className="w-6 h-6 text-emerald-600" />
          </div>
          <div className="text-2xl font-bold text-emerald-600">{checkedItems}</div>
          <div className="text-sm text-slate-500">Sudah Dibeli</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-2">
            <TrendingUp className="w-6 h-6 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-blue-600">{percentage}%</div>
          <div className="text-sm text-slate-500">Progress</div>
        </div>
      </div>

      {percentage === 100 && (
        <div className="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl text-center">
          <p className="text-emerald-700 font-medium">🎉 Selamat! Semua item sudah dibeli!</p>
        </div>
      )}
    </div>
  )
}
