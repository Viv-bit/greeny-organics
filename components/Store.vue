<template>
    <div class="storeWrapper" v-bind:class="appearToggle ? 'appear' : '' " >
        <div class="store">
            <span  class="cancel-container">
                <img @click="toggleStore" src="../assets/cancel.png" alt="Cancel" class="cancel" />
            </span>
            
            <h1 class="store-title">Now Available in your Favorite Ottawa Stores</h1>

            <div>
                <p class="store-location"><img src="../assets/location.png" alt="Location" class="location"> ALL Geeland International Grocery Stores <span> 1620 Walkley Rd, Ottawa ON K1V 6P5 & 10-1020 St. Laurent Blvd, Ottawa ON K1K 4S2 </span></p>

                <p class="store-location"><img src="../assets/location.png" alt="Location" class="location">  African Queen <span> - 2430 Bank St, Ottawa, ON KTV OT7 </span></p>

                <p class="store-location"><img src="../assets/location.png" alt="Location" class="location"> Africa World Market <span> - 1392 Cyrville Rd, Ottawa, ON KIL 3M9 </span></p>

            </div>
        </div>
    </div>
</template>


<script>

export default {
    props: {
        appearToggle:false
    },
    methods: {
        toggleStore(){
           this.$emit('toCancel', !this.appearToggle)
        }
    }  
}
</script>

<style>
.storeWrapper{
        display: none;
        position: fixed !important;
        top: 0;
        left: 0;
        background-color : rgba(0, 0, 0, 0.2);
        height: 100vh;
        width: 100vw;
        z-index: 100;
        text-align: left;
    }
    .store {
        background-color: hsla(42, 62%, 96%, 1);
        padding: 50px 60px;
        width: 900px;
        margin: 150px auto;
    }
    .storeWrapper.appear {
        display: block;
    }
    .cancel-container {
        padding: 0 10px;
        display: grid;
        grid-template-columns: 1fr 72px;
    }
    .cancel {
        grid-column-start: 2;
    }
    .store-title {
        font-family: Playfair Display;
        font-size: 50px;
        font-style: normal;
        font-weight: 900;
        color: hsla(147, 72%, 29%, 1);
    }
    .store-location {
        display: flex;
        margin: 20px 0;
        align-items: center;
        font-size: 18px;
        font-weight: 900;
        color: #062815;
    }
    .store-location span {
        font-family: Raleway;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
    }
    .location {
        margin-right: 10px;
        width: 13px;
        height: 18px;
    }
    @media only screen and (max-width: 700px) {
        .store-title {
            font-size: 46px; 
        }
        .store-location {
            display: flex;
            flex-wrap: wrap;
            margin: 20px 0;
        }
    }
</style>