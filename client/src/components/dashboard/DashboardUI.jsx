// UI component 
import DashboardControls from './DashboardControls';
import ProductTableRow from './ProductTableRow';
import StatCard from './StatCardUI';

const SalesDashboardUI = ({
  products,
  isLoading,
  activeFilterCount,
  onSearchChange,
  onSortChange,
  onOpenFilters
}) => {
  const tableHeaders = ["S.No.","Thumbnail", "Product Info", "Category", "Price", "Rating", "Stock", ""];
  
  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen">
      <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
                    <div className="w-full max-w-7xl">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Product Dashboard</h1>
              </div>

              <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <StatCard title="Total Products" value={products.length || '...'} />
                {/* <StatCard title="Average Price" value={stats.averagePrice ? `$${stats.averagePrice.toFixed(2)}` : '...'} />
                <StatCard title="Average Customer Rating" value={stats.averageRating || '...'} /> */}
                <StatCard title="Average Price" value={ '...'} />
                <StatCard title="Average Customer Rating" value={ '...'} />
              </div>


                      <div className="rounded-xl border border-primary/20 bg-background-light dark:border-primary/30 dark:bg-background-dark/50 overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Product Details</h2>
                    <div className="flex gap-3">

        <DashboardControls
          onSearchChange={onSearchChange}
          onSortChange={onSortChange}
          onOpenFilters={onOpenFilters}
          activeFilterCount={activeFilterCount}
        />
                  </div>
                  </div>
                </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-primary/5 dark:bg-primary/10">
                <tr>
                  {tableHeaders.map(header => (
                    <th key={header} className="px-6 py-3 text-left text-sm font-medium text-slate-600 dark:text-slate-300 dark:text-white sm:pl-6" scope="col">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {isLoading ? (
                  <tr><td colSpan={tableHeaders.length} className="p-8 text-center">Loading products...</td></tr>
                ) : (
                  products.map((product,idx) => <ProductTableRow key={idx} product={product} />)
                )}
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
};

export default SalesDashboardUI;