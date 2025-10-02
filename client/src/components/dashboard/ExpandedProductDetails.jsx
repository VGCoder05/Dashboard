// component for displaying key-value pairs
const DetailItem = ({ label, children }) => (
    <div>
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{label}</p>
        <p className="text-sm text-slate-800 dark:text-slate-200">{children}</p>
    </div>
);

const ExpandedProductDetails = ({ product }) => {
    return (
        <div className="bg-slate-50 dark:bg-slate-900/50 p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Column 1: Description & Tags */}
                <div className="md:col-span-2 space-y-4">
                    <div>
                        <h4 className="font-bold mb-2">Description</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{product.description}</p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {product.tags.map(tag => (
                                <span key={tag} className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Column 2: Specs & Logistics */}
                <div className="space-y-4">
                    <h4 className="font-bold">Details</h4>
                    <div className="grid grid-cols-2 gap-4">
                        <DetailItem label="SKU">{product.sku}</DetailItem>
                        <DetailItem label="Weight">{product.weight}g</DetailItem>
                        <DetailItem label="Dimensions">{`${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth} cm`}</DetailItem>
                        <DetailItem label="Min. Order">{product.minimumOrderQuantity}</DetailItem>
                        <DetailItem label="Warranty">{product.warrantyInformation}</DetailItem>
                        <DetailItem label="Return Policy">{product.returnPolicy}</DetailItem>
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="md:col-span-3">
                    <h4 className="font-bold mb-2">Reviews ({product.reviews.length})</h4>
                    <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
                        {product.reviews.map((review, index) => (
                            <div key={index} className="bg-white dark:bg-surface-dark p-3 rounded-lg">
                                <div className="flex justify-between items-center">
                                    <p className="font-semibold text-sm">{review.reviewerName}</p>
                                    <p className="text-sm">{review.rating} ★</p>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-300 italic">"{review.comment}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpandedProductDetails;