    //ToDo: Import Home Component
import Home from './components/Home.vue'
    //ToDo: Import portfolio/Portfolio Component
import Portfolio from './components/portfolio/Portfolio.vue'
    //ToDo: Import stocks/Stocks Component
import Stocks from './components/stocks/Stocks.vue'

export const routes = [
    //ToDo: Create Route for Home Component with root (/) path
    {path: '/', components: Home, name:'home'},
    //ToDo: Create Route for Portfolio Component
    {path: '/portfolio', components: Portfolio, name:'portfolio'},
    //ToDo: Create Route for Stocks Component
    {path: '/stocks', components: Stocks, name:'stocks'}
];