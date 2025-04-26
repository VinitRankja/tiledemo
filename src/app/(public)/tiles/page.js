'use client'

import Filter from '@/components/Filter/Filter';
import ProductList from '@/components/ProductList/ProductList';
import { Suspense } from 'react'
import { useState } from "react";

export default function ProductListPage() {
    
    const [activeFilters, setActiveFilters] = useState({});

    return (
        <Suspense>
            <div className='py-8' />
            <Filter setActiveFilters={setActiveFilters} activeFilters={activeFilters}>
                <ProductList activeFilters={activeFilters}/>
            </Filter>
        </Suspense>
    )
}