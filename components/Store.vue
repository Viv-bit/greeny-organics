<template>
    <div class="storeWrapper" v-bind:class="appearToggle ? 'appear' : '' " >
        <div class="store">
            <span  class="cancel-container">
                <img @click="toggleStore" src="../assets/cancel.png" alt="Cancel" class="cancel">
            </span>
            
            <h1 class="store-title">Now Available in your Favorite Ottawa Stores</h1>

            <div>
                <p class="store-location"><img src="../assets/location.png" alt="Location" class="location"> ALL Geeland International Grocery Stores <span> (Ottawa & Gatineu) </span></p>

                <p class="store-location"><img src="../assets/location.png" alt="Location" class="location">  African Queen <span> - 2430 Bank St, Ottawa, ON KTV OT7 </span></p>

                <p class="store-location"><img src="../assets/location.png" alt="Location" class="location"> M&J Tropical Supermarket  <span> - 1383 Clyde Ave, Nepean, ON K2G 3H7 </span> </p>

                <p class="store-location"><img src="../assets/location.png" alt="Location" class="location"> Africa World Market <span> - 1392 Cyrville Rd, Ottawa, ON KIL 3M9 </span></p>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    props: {
        appearToggle:Boolean
    },
    methods: {
        toggleStore(){
           this.$emit('toCancel', !this.appearToggle)
        }
    }  
}
</script>

<style scoped>
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