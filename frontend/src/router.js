
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import OrderOrderManager from "./components/listers/OrderOrderCards"
import OrderOrderDetail from "./components/listers/OrderOrderDetail"

import DeliveryDeliveryManager from "./components/listers/DeliveryDeliveryCards"
import DeliveryDeliveryDetail from "./components/listers/DeliveryDeliveryDetail"

import ProductInventoryManager from "./components/listers/ProductInventoryCards"
import ProductInventoryDetail from "./components/listers/ProductInventoryDetail"

import SearchProductView from "./components/SearchProductView"
import SearchProductViewDetail from "./components/SearchProductViewDetail"

import MyPageView from "./components/MyPageView"
import MyPageViewDetail from "./components/MyPageViewDetail"

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/orders/orders',
                name: 'OrderOrderManager',
                component: OrderOrderManager
            },
            {
                path: '/orders/orders/:id',
                name: 'OrderOrderDetail',
                component: OrderOrderDetail
            },

            {
                path: '/deliveries/deliveries',
                name: 'DeliveryDeliveryManager',
                component: DeliveryDeliveryManager
            },
            {
                path: '/deliveries/deliveries/:id',
                name: 'DeliveryDeliveryDetail',
                component: DeliveryDeliveryDetail
            },

            {
                path: '/products/inventories',
                name: 'ProductInventoryManager',
                component: ProductInventoryManager
            },
            {
                path: '/products/inventories/:id',
                name: 'ProductInventoryDetail',
                component: ProductInventoryDetail
            },

            {
                path: '/products/searchProducts',
                name: 'SearchProductView',
                component: SearchProductView
            },
            {
                path: '/products/searchProducts/:id',
                name: 'SearchProductViewDetail',
                component: SearchProductViewDetail
            },

            {
                path: '/dashboards/myPages',
                name: 'MyPageView',
                component: MyPageView
            },
            {
                path: '/dashboards/myPages/:id',
                name: 'MyPageViewDetail',
                component: MyPageViewDetail
            },


    ]
})
