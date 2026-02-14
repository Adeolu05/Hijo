import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import { products } from '../data/products';

const ProductPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const product = products.find(p => p.id === Number(id));

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!product) {
        return (
            <div className="min-h-screen bg-midnight-900 flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-2xl font-serif mb-4">Product Not Found</h2>
                    <button
                        onClick={() => navigate('/collection')}
                        className="text-gold-400 hover:text-white underline"
                    >
                        Return to Collection
                    </button>
                </div>
            </div>
        );
    }

    return (
        <ProductDetail
            product={product}
            onBack={() => navigate('/collection')}
        />
    );
};

export default ProductPage;
