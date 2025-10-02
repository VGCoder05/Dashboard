function Button({ variant = 'primary', icon, children, onClick }) {
  const baseClasses = "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-primary/10 dark:bg-primary/20 text-primary hover:bg-primary/20 dark:hover:bg-primary/30"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {icon && (
        <span className="material-symbols-outlined text-base">{icon}</span>
      )}
      {children}
    </button>
  );
}

export default Button;