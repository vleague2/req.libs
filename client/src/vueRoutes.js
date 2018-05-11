import HelloWorld from  './components/HelloWorld.vue'
import Second from  './components/Second.vue'

export const routes = [
    {path: '', components: HelloWorld },
    {path: '/gohere', components: Second }
];