import React, { useState } from 'react';
import ExpandedProductDetails from './ExpandedProductDetails'; 

const ProductTableRow = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Use the new data structure from your JSON
  const finalPrice = product.price * (1 - product.discountPercentage / 100);
  const stockClass = product.availabilityStatus === 'Low Stock' || product.stock < 10 
    ? "text-red-500 dark:text-red-400" 
    : "text-slate-500 dark:text-slate-400";
  
  return (
    <>
      <tr 
        className="hover:bg-primary/5 dark:hover:bg-primary/10 cursor-pointer [&>td]:w-max"
        onClick={() => setIsExpanded(!isExpanded)} // Toggle expansion on row click
      >
        {/* S.No. */}
        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 dark:text-slate-300 sm:pl-6">{product.id}</td>

        {/* Thumbnail */}
        <td className="whitespace-nowrap px-6 py-4 text-sm">
          <div className="h-10 w-10 rounded-lg bg-cover bg-center" style={{ backgroundImage: `url("${product.thumbnail}")` }}></div>
        </td>
        {/* Product Info */}
        <td className="px-6 py-4 text-slate-800 dark:text-slate-100">
            <div className="font-medium">{product.title}</div>
            <div className="text-xs text-slate-500">{product.brand}</div>
        </td>
        {/* Category */}
        <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{product.category}</td>
        {/* Price */}
        <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
            <div>${product.price.toFixed(2)}</div>
            {product.discountPercentage > 0 && (
                <div className="text-xs text-green-600">-{product.discountPercentage.toFixed(2)}%</div>
            )}
        </td>
        {/* Rating */}
        <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{product.rating.toFixed(2)} ★</td>
        {/* Stock */}
        <td className={`whitespace-nowrap px-6 py-4 text-sm font-medium ${stockClass}`}>
            <div>{product.stock}</div>
            <div className="text-xs font-normal">{product.availabilityStatus}</div>
        </td>
        {/* Expand Icon */}
        <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500">
            <span className="material-symbols-outlined transition-transform" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'}}>
                expand_more
            </span>
        </td>
      </tr>
      {/* The Expanded Content Row */}
      {isExpanded && (
        <tr>
          {/* This td must span all columns of your table */}
          <td colSpan="8">
            <ExpandedProductDetails product={product} />
          </td>
        </tr>
      )}
    </>
  );
};

export default ProductTableRow;