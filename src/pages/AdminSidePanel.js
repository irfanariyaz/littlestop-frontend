import React from 'react'

function AdminSidePanel() {
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col">
    <div className="p-4 border-b border-gray-700">
      <h2 className="text-xl font-bold">Admin Panel</h2>
    </div>
    <nav className="flex-1 p-4 space-y-4">
      <NavLink
        to="/admin/products"
        className={({ isActive }) =>
          `block px-4 py-2 rounded hover:bg-gray-700 ${
            isActive ? "bg-gray-700" : ""
          }`
        }
      >
        View All Products
      </NavLink>
      <NavLink
        to="/admin/add-product"
        className={({ isActive }) =>
          `block px-4 py-2 rounded hover:bg-gray-700 ${
            isActive ? "bg-gray-700" : ""
          }`
        }
      >
        Add a Product
      </NavLink>
    </nav>
  </aside>

  )
}

export default AdminSidePanel