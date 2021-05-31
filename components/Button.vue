<template>
    <span>
        <button @click="toggleStore"> Buy Ambunu!</button>
        <Store :appearToggle="appearToogle" v-on:toCancel="toggleStore"/>
    </span>
</template>

<script>
import Store from "./Store"

export default {
     components: {
        Store
    },
    data: ()=> {
        return {
            appearToogle:false
        }
    },
    methods: {
        toggleStore(){
           this.appearToogle = !this.appearToogle
        }
    } 
}
</script>

<style scoped>

</style>