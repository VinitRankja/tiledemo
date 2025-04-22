'use client'

import Filter from '@/components/Filter/Filter';
import ProductList from '@/components/ProductList/ProductList';
import { Suspense } from 'react'
import { useState } from "react";

export default function ProductListPage() {
    
    const [activeFilters, setActiveFilters] = useState({});

    return (
        <Suspense>
            <Filter setActiveFilters={setActiveFilters} activeFilters={activeFilters}>
                <ProductList filters={activeFilters}/>
            </Filter>
        </Suspense>
    )
}