function TagItem({ name, color }) {
  const colorClasses = {
    primary: 'bg-primary/10 dark:bg-primary/20 text-primary hover:bg-primary/20',
    blue: 'bg-blue-500/10 dark:bg-blue-400/20 text-blue-500 dark:text-blue-400 hover:bg-blue-500/20',
    purple: 'bg-purple-500/10 dark:bg-purple-400/20 text-purple-500 dark:text-purple-400 hover:bg-purple-500/20',
    amber: 'bg-amber-500/10 dark:bg-amber-400/20 text-amber-500 dark:text-amber-400 hover:bg-amber-500/20',
  };

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-medium cursor-pointer transition-colors ${colorClasses[color]}`}>
      {name}
    </span>
  );
}

export default TagItem;