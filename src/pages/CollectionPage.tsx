import React from 'react';
import Showcase from '../components/Showcase';
import { useNavigate } from 'react-router-dom';

const CollectionPage: React.FC = () => {
    const navigate = useNavigate();

    const handleProductSelect = (product: any) => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div className="pt-20 min-h-screen bg-midnight-900">
            <Showcase onProductSelect={handleProductSelect} />
        </div>
    );
};

export default CollectionPage;
