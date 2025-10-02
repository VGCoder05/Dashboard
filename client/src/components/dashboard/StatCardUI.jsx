const StatCard = ({ title, value }) => (
  <div className="rounded-xl border border-primary/20 bg-background-light p-6 dark:border-primary/30 dark:bg-background-dark/50">
    <p className="text-base font-medium text-slate-600 dark:text-slate-300">{title}</p>
    <p className="text-3xl font-bold text-slate-900 dark:text-white">{value}</p>
  </div>
);

  export default StatCard;

// Product Catalog