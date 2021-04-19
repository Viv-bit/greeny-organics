<template>
  <div class="product main">
      <div class="product-item">
          <img src="../assets/leaves.png" alt="Ambunu Leaves" class="product-image">
          <div class="product-words">
              <h3 class="product-title">Greeny Organics - Ambunu Herb</h3>

              <p class="product-description">Prevents hair loss, eliminates dandruff completely! A 5 in 1 wonder, shampoo (cleaner), detangler, leave-in-conditioner, moisturiser and sheen (shiny hair)</p>

              <h5 class="product-direction">How to use</h5>

              <ul class="product-direction-detail">
                  <li><img src="../assets/check.png" alt="check" class="product-check">Mix at least 4 tablespoons of Ambunu leaves in a cup of hot water ( double the quantity for long and thick hair )</li>
                  <li><img src="../assets/check.png" alt="check" class="product-check">Let it sit for 30minutes until it gets gooey.</li>
                  <li><img src="../assets/check.png" alt="check" class="product-check">Extract the juice and use as needed</li>
                  <li><img src="../assets/check.png" alt="check" class="product-check">Store the leaves in a refridgerator or spread out to dry for one more use.</li>
              </ul>
          </div>
      </div>

      <div class="product-item">
          <img src="../assets/powdered.png" alt="Ambunu Powder" class="product-image">
          <div class="product-words">
              <h3 class="product-title">Greeny Organics - Ambunu Powder</h3>

              <p class="product-description">A 5 in 1 wonder, shampoo (cleaner), detangler, leave-in-conditioner, moisturiser and sheen (shiny hair)</p>

              <h5 class="product-direction">How to use</h5>

              <ul class="product-direction-detail">
                  <li><img src="../assets/check.png" alt="check" class="product-check"> Mix at least 4 tablespoons of the powder in a cup of hot water ( double the quantity for long and thick hair )</li>
                  <li><img src="../assets/check.png" alt="check" class="product-check">Stir well and let it sit for 30 minutes.</li>
                  <li><img src="../assets/check.png" alt="check" class="product-check">Sieve with a cheesecloth or very fine strainer.</li>
                  <li><img src="../assets/check.png" alt="check" class="product-check">Apply juice as needed.</li>
                  <li><img src="../assets/check.png" alt="check" class="product-check">Reapply as conditioner. Rinse off with cold water after 15minutes.</li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .product {
        padding-top: 50px;
    }
    .product-item {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding-top: 50px;
    }
    .product-words {
        padding-top: 20px;
    }
    .product-item:nth-child(even) .product-words {
        grid-column: 1;
        grid-row: 1;
        padding-left: 20px;
    }
    .product-item:nth-child(even) .product-image {
        grid-column: 2;
    }
    .product-item:nth-child(odd) .product-words {
        padding-left: 50px;
    }
    .product-title {
        font-family: Playfair Display;
        font-size: 24px;
        font-weight: 700;
        line-height: 32px;
        letter-spacing: -0.1px;
        color: #158146;
        padding-bottom: 5px;
    }
    .product-description {
        font-family: Raleway;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.1px;
        text-align: left;
        padding-bottom: 15px;
    }
    .product-direction {
        font-family: Playfair Display;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.1px;
        color: #158146;
    }
    .product-direction-detail{

    }
    li {
        display: grid;
        grid-template-columns: 20px 1fr;
        grid-column-gap: 10px;
        font-family: Raleway;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.1px;
    }
    @media only screen and (max-width: 1024px) {
        .product-image {
            align-self: center;
        }
    }
    @media only screen and (max-width: 868px) {
        .product-image {
            max-width: 300px;
            align-self: center;
        }
    }
    @media only screen and (max-width: 768px) {
        .product-item {
            display: flex;
            flex-direction: column;
    }
    }
</style>