<template>
  <div class="testimony main">
        <div class="testimony-item">
            <h3 class="testimony-title">Detangling made easy</h3>
            <p class="testimony-description">I used the Ambunu powder for the first time and I saw my hair in a whole different dimension, it was extremely easy to detangle and i had little to no breakage at all. My hair was so soft.</p>
            <span class="testimony-name">Believe Anyiwo</span>
        </div>

        <div class="testimony-item">
            <h3 class="testimony-title">Cheapest all in one product</h3>
            <p class="testimony-description">Since I started using Ambunu it has become my prepoo, detangler, conditioner, and I just add milk or rice to it for my protein treatment and deep condition.</p>
            <span class="testimony-name">Mary Peter</span>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .testimony {
    display: flex;
    text-align: center;
    justify-content: space-around;
  }
  .testimony-item {
    max-width: 350px;
    padding: 30px 0;
  }
  .testimony-title {
    font-family: 'Playfair Display', serif;;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    color: #158146;
  }
  .testimony-description {
    font-family: 'Raleway', sans-serif;;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.1px;
  }
  .testimony-name {
    font-family: 'Playfair Display', serif;;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: #158146;
  }
  @media only screen and (max-width: 768px) {
    .testimony {
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      align-items: center;
    }
  }
</style>