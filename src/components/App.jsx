import { useState } from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import GroceryList from "../components/GroceryList";
import Footer from "../components/Footer";

// Sample data
const initialItems = [
  { id: 1, name: "Apel", quantity: 3, checked: false },
  { id: 2, name: "Roti", quantity: 1, checked: true },
  { id: 3, name: "Susu", quantity: 2, checked: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-4 px-4 sm:py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200/50 overflow-hidden">
        <div className="p-6 sm:p-8">
          <Header />
          <Form onAddItem={handleAddItem} />
          <GroceryList
            items={items}
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
            onClearItems={handleClearItems}
          />
          <Footer items={items} />
        </div>
      </div>
    </div>
  );
}
