/* Quand je crée un produit, je n'ai pas d'id, donc je ne peux pas en créer un puis le supprimer ou modifier juste après
* Je dois refresh la page entre temps
* Pas de refresh après l'update de mon product
*/

import React, { useState, useEffect } from 'react';
import AdminDashboardOrders from '../components/AdminDashboardOrders';
import AdminDashboardProducts from '../components/AdminDashboardProducts';
import { TabMenu } from 'primereact/tabmenu';

export default function AdminDashboard() {

    const items = [
        {label: 'Orders', icon: 'pi pi-fw pi-shopping-cart'},
        {label : 'Products', icon: 'pi pi-fw pi-tags'}
        // {label: 'Categories', icon: 'pi pi-fw pi-calendar'} // categories
       
    ];

    const [tabIndex, setTabIndex] = useState(0)

    function handleTabChange(index){
        setTabIndex(index)
    }
    return (
        <div>
            <div className="card">
                <TabMenu activeIndex={tabIndex} style={{margin:10}} model={items} onTabChange={(e) => handleTabChange(e.index)}/>
            </div>
            {tabIndex === 0 ? <AdminDashboardOrders/> : <AdminDashboardProducts/>}
        </div>
    );
}