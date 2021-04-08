<template>
    <div id="hero">
    <div class="main">
      <div class="hero-words">
          <span class="hero-name">Ambunu Herbal Product</span>
          <h2 class="hero-title">Silky, soft and shiny hair in a single wash!</h2>
          <p class="hero-description">Ambunu contains saponin which gives it the ability to cleanse. It is an effective antioxidant, anti-inflammatory and an emollient. It also gives you stronger, thicker hair, prevents dry scalp and reduces hair loss.</p>
          <button>Buy Ambunu!</button>
      </div>
      
  </div>
        <div class="hero-images">
          <img src="../assets/Woman1.png" alt="Woman with full hair">
        </div>
    </div>
  
</template>

<script>
export default {

}
</script>

<style>
    #hero {
        background-color: #FBF7EE;
        display: grid;
        grid-template-columns: 1.3fr 1fr;
        padding-right: 0px;
    }

    .hero-words {
        padding-top: 35px;
    }
    .hero-images {
        justify-self: right;
        margin-right: 0;
    }
    .hero-name {
        background-color: #c6dd7162;
        padding: 7px 16px;
        color: #158146;
    }
    .hero-title {
        font-family: Playfair Display;
        font-size: 52px;
        font-weight: 900;
        letter-spacing: -1px;
        text-align: left;
        color: #158146;
        line-height: 60px;
        max-width: 534px;
        padding-top: 10px;

    }
    .hero-description {
        font-family: Raleway;
        max-width: 445px;
        font-size: 14px;
        font-weight: 400;
        text-align: left;
        margin: 10px 0 28px 0;


    }
</style>