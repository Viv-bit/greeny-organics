<template>
  <div class="about">
      <span class="about-company">About Greeny Organics</span>
      <h3 class="about-title">Your trusted organic product distributor</h3>
      <p class="about-description">Greeny Organics is a sole distributor of the Ambunu herbal product in Canada for your tough and broken hairs. A very high performing product with great results from numerous customers over the past one year.</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .about {
        background-image: url("../assets/image 4.svg");
        background-repeat: no-repeat;
        text-align: center;
        background-color: #062815;
        background-position: right;
        color: #fff;
        height: 348px;
        display: flex;
        align-items: center;
        flex-direction: column;
 
    }
    .about-company {
        padding-top: 60px;
        color: #C5DD71;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.1px;

    }
    .about-title {
        font-family: Playfair Display;
        font-size: 40px;
        font-weight: 700;
        letter-spacing: -0.5px;
        line-height: 48px;
        max-width: 540px;
        padding-top: 8px;
    }
    .about-description {
        font-family: Raleway;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.1px;
        max-width: 540px;
        padding-top: 10px;
    }

</style>