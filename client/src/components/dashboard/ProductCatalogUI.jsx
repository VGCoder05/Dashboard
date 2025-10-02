// src/components/ProductCatalogUI.jsx
import React from 'react';
import NavbarLogic from '../layout/Navbar/NavbarLogic';

// --- Icons (can be moved to their own files) ---
const InfoIcon = () => (
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path>
    </svg>
);

// --- Sub-Components for better organization ---

// const Header = ({ user, searchTerm, onSearchChange }) => (
//   <header className="flex items-center justify-between whitespace-nowrap border-b border-primary/20 dark:border-primary/30 px-6 py-3">
//     <div className="flex items-center gap-8">
//       <div className="flex items-center gap-2.5 text-slate-800 dark:text-white">
//         <div className="size-6 text-primary"><InfoIcon /></div>
//         <h2 className="text-lg font-bold text-slate-800 dark:text-white tracking-[-0.015em]">Catalog Manager</h2>
//       </div>
//       <nav className="hidden md:flex items-center gap-6">
//         <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary" href="#">Dashboard</a>
//         <a className="text-sm font-medium text-primary dark:text-primary" href="#">Products</a>
//         <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary" href="#">Orders</a>
//         <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary" href="#">Customers</a>
//       </nav>
//     </div>
//     <div className="flex items-center gap-4">
//       <div className="relative w-64">
//         <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400">search</span>
//         <input 
//             className="form-input w-full rounded-lg border-primary/20 dark:border-primary/30 bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 placeholder:text-slate-500 dark:placeholder:text-slate-400 pl-10 pr-4 py-2 text-sm focus:ring-primary focus:border-primary" 
//             placeholder="Search" 
//             value={searchTerm}
//             onChange={onSearchChange}
//         />
//       </div>
//       <button className="flex items-center justify-center rounded-full h-10 w-10 bg-primary/10 dark:bg-primary/20 text-slate-700 dark:text-slate-200 hover:bg-primary/20 dark:hover:bg-primary/30">
//         <span className="material-symbols-outlined text-xl">notifications</span>
//       </button>
//       <div className="size-10 rounded-full bg-cover bg-center" style={{ backgroundImage: `url("${user.avatarUrl}")` }}></div>
//     </div>
//   </header>
// );

const FilterButton = ({ children }) => (
    <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary/10 dark:bg-primary/20 pl-4 pr-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-primary/20 dark:hover:bg-primary/30">
        {children}
        <span className="material-symbols-outlined text-lg">expand_more</span>
    </button>
);

const ProductTableRow = ({ product, onEditProduct }) => (
    <tr className="hover:bg-primary/5 dark:hover:bg-primary/10 cursor-pointer">
        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 dark:text-slate-300 sm:pl-6">{product.id}</td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
            <div className="size-10 rounded-lg bg-cover bg-center" style={{ backgroundImage: `url("${product.thumbnailUrl}")` }}></div>
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-800 dark:text-white">{product.title}</td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400 max-w-xs truncate">{product.description}</td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
                {product.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center rounded-full bg-primary/10 dark:bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary dark:text-primary/80">{tag}</span>
                ))}
            </div>
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{product.returnPolicy}</td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">{product.dateAdded}</td>
        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
            <button onClick={() => onEditProduct(product.id)} className="text-primary hover:text-primary/80">Edit</button>
        </td>
    </tr>
);

// --- The Main UI Component ---

const ProductCatalogUI = ({ user, products, isLoading, searchTerm, onSearchChange, onAddProduct, onEditProduct }) => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* <Header user={user} searchTerm={searchTerm} onSearchChange={onSearchChange} /> */}
          <NavbarLogic/>
          <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Product Catalog</h1>
                <button onClick={onAddProduct} className="flex items-center justify-center gap-2 rounded-lg bg-primary text-white px-4 py-2 text-sm font-medium hover:bg-primary/90">
                  <span className="material-symbols-outlined">add</span>
                  <span className="truncate">Add Product</span>
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <FilterButton>Category: All</FilterButton>
                <FilterButton>Sort by: Date Added</FilterButton>
                <FilterButton>Filters</FilterButton>
              </div>

              <div className="overflow-x-auto rounded-lg border border-primary/20 dark:border-primary/30 bg-white dark:bg-background-dark/50">
                <table className="min-w-full divide-y divide-primary/20 dark:divide-primary/30">
                  <thead className="bg-primary/5 dark:bg-primary/10">
                    <tr>
                      <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 dark:text-white sm:pl-6" scope="col">ID</th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white" scope="col">Thumbnail</th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white" scope="col">Product Title</th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white" scope="col">Description</th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white" scope="col">Tags</th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white" scope="col">Return Policy</th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-white" scope="col">Date Added</th>
                      <th className="relative py-3.5 pl-3 pr-4 sm:pr-6" scope="col"><span className="sr-only">Edit</span></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-primary/10 dark:divide-primary/20 bg-white dark:bg-background-dark/50">
                    {isLoading ? (
                        <tr><td colSpan="8" className="text-center p-8">Loading products...</td></tr>
                    ) : (
                        products.map(product => (
                            <ProductTableRow key={product.id} product={product} onEditProduct={onEditProduct} />
                        ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalogUI;