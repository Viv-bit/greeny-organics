<template>
    <div class="main" id="hero">
      <div class="hero-words">
          <span class="hero-name">Ambunu Herbal Product</span>
          <h2 class="hero-title">Silky, soft and shiny hair in a single wash!</h2>
          <p class="hero-description">Ambunu contains saponin which gives it the ability to cleanse. It is an effective antioxidant, anti-inflammatory and an emollient. It also gives you stronger, thicker hair, prevents dry scalp and reduces hair loss.</p>
         <Button />
      </div>
      
        <div class="hero-images">
          <img src="../assets/Woman1.png" alt="Woman with full hair" class="image-under">
          <img src="../assets/woman2.png" alt="Woman with afro" class="overlay-image">
        </div>
  </div>
  
</template>

<script>
import Button from './Button'
export default {
   components: {
       Button
   } 
}
</script>

<style>
    #hero {
        background-color: #FBF7EE;
        display: grid;
        min-height: 550px;
        margin-top: 100px;
    }

    .hero-words {
        padding-top: 35px;
    }
    .hero-images {
        max-height: 50vh;
        position: absolute;
        margin-right: 0;
        right: 0;
        display: grid;
        grid-template-columns: '163px 197px 346px';
        grid-template-rows: '275px 182px 188px';
        z-index: 1;
    }
    .image-under {
        grid-column: 2 / span 3;
        grid-row: 1 / span 2;
    }
    .overlay-image {
        grid-column: 1 / span 2;
        grid-row: 2 / span 3;
    }
    .hero-name {
        background-color: #c6dd7162;
        padding: 7px 16px;
        color: #158146;
    }
    .hero-title {
        font-family: 'Playfair Display', serif;;
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
        font-family: 'Raleway', sans-serif;;
        max-width: 445px;
        font-size: 14px;
        font-weight: 400;
        text-align: left;
        margin: 10px 0 28px 0;
    }
   @media only screen and (max-width: 1270px) {
  .hero-images {
    max-width: calc(100% - 120px);
    max-height: calc(100% - 60px);
  }
  .hero-title {
      max-width: 500px;
  }
  .hero-description {
        max-width: 350px;
    }
}
@media only screen and (max-width: 1120px) {
  .hero-title {
      max-width: 480px;
  }
  .hero-description {
        max-width: 280px;
    }
    .hero-images {
        position: absolute;
        margin-right: 0;
        right: 0;
        display: grid;
        grid-template-columns: '153px 187px 326px';
        grid-template-rows: '265px 170px 178px';
    }
    .image-under {
        max-width: 500px;
        max-height: 400px;
        grid-column: 2 / span 3;
        grid-row: 1 / span 2;
    }
    .overlay-image {
        max-width: 320px;
        max-height: 320px;
        grid-column: 1 / span 2;
        grid-row: 2 / span 3;
    }
}
@media only screen and (max-width: 970px) {
  .hero-title {
      max-width: 450px;
  }
  .hero-description {
        max-width: 260px;
    }
    .hero-images {
        position: absolute;
        margin-right: 0;
        right: 0;
        display: grid;
        grid-template-columns: '130px 175px 310px';
        grid-template-rows: '250px 155px 158px';
    }
    .image-under {
        max-width: 450px;
        max-height: 360px;
        grid-column: 2 / span 3;
        grid-row: 1 / span 2;
    }
    .overlay-image {
        max-width: 270px;
        max-height: 270px;
        grid-column: 1 / span 2;
        grid-row: 2 / span 3;
    }
}
@media only screen and (max-width: 880px) {
  .hero-title {
      max-width: 300px;
      
  }
  .hero-description {
        max-width: 250px;
    }
    .hero-images {
        position: absolute;
        margin-right: 0;
        right: 0;
        display: grid;
        grid-template-columns: '110px 165px 300px';
        grid-template-rows: '240px 145px 140px';
    }
    .image-under {
        max-width: 405px;
        max-height: 315px;
        grid-column: 2 / span 3;
        grid-row: 1 / span 2;
    }
    .overlay-image {
        max-width: 225px;
        max-height: 225px;
        grid-column: 1 / span 2;
        grid-row: 2 / span 3;
    }
}
@media only screen and (max-width: 768px) {
    #hero {
        display: grid;
        grid-template-rows: 0.8fr 1.1fr;
    }
    .hero-words {
        grid-row: 2;
        padding-bottom: 30px;
    }
    .hero-images {
        width: 100%;
        order: 1;
        grid-row: 1;
        display: grid;
        grid-template-columns: 199px 175px 65px;
        grid-template-rows: 157px 97px 78px;
        object-fit: contain;
        justify-items: start;
    }
    .image-under {
        width: 440px;
        height: 264px;
       grid-column: 1 / span 3;
       grid-row: 1 / span 2;
    }
    .overlay-image {
        width: 175px;
        height: 175px;
        grid-column: 2;
        grid-row: 2 / span 3;
    }
}
@media only screen and (max-width: 568px) {
    #hero {
        display: grid;
        grid-template-rows: 0.6fr 1.2fr;
    }
    .hero-words {
        grid-row: 2;
        padding-bottom: 30px;
    }
    .hero-images {
        width: 100%;
        order: 1;
        grid-row: 1;
        display: grid;
        grid-template-columns: 169px 125px 25px;
        grid-template-rows: 117px 67px 58px;
        object-fit: contain;
        justify-items: start;
        left: 0;
    }
    .image-under {
        width: 320px;
        height: 180px;
       grid-column: 1 / span 3;
       grid-row: 1 / span 2;
    }
    .overlay-image {
        width: 125px;
        height: 125px;
        grid-column: 2;
        grid-row: 2 / span 3;
    }
}
</style>