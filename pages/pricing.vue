<template>
  <div>
    <div class="pricing">


      <div class="pricing-top">
        <div class="container pricing-top-container">
          <h1 class="pricing-top-title">Our Pricings</h1>
          <p class="pricing-top-text">
            Welcome to our online course page, where you can enhance your skills
            in design and development. Choose from our carefully curated
            selection of 10 pricing designed to provide you with comprehensive
            knowledge and practical experience. Explore the pricing below and
            find the perfect fit for your learning journey.
          </p>
        </div>
      </div>


      <div class="container">

          <div class="pricing-part">
            <section class="pricing-section">
              <span class="pricing-span">
                <button class="pricing-span__btn">Monthly</button>
                <button class="pricing-span__btn">Yearly</button>
              </span>
            </section>
    
            <div class="pricing-payment">
              <section class="pricing-payment-item">
                <button class="pricing-payment-item__btn">Free Plan</button>
                <h1 class="pricing-payment-item__title"><span>$0</span>/month</h1>
                <div class="pricing-payment-item-limit">
                  <h4 class="pricing-payment-item-limit__title">
                    Available Features
                  </h4>
                  <nav>
                    <ul>
                      <li v-for="item in 7" :key="item">
                        <label class="checkbox-container">
                          <input type="checkbox" />
                          <span class="custom-checkbox"></span>
                          Access to selected free courses.
                        </label>
                      </li>
                    </ul>
                  </nav>
                </div>
                <button class="pricing-payment-item-btn">Get Started</button>
              </section>
    
              <section class="pricing-payment-item">
                <button class="pricing-payment-item__btn">Pro Plan</button>
                <h1 class="pricing-payment-item__title"><span>$70</span>/month</h1>
                <div class="pricing-payment-item-limit">
                  <h4 class="pricing-payment-item-limit__title">
                    Available Features
                  </h4>
                  <nav>
                    <ul>
                      <li v-for="item in 7" :key="item">
                        <label class="checkbox-container">
                          <input type="checkbox" />
                          <span class="custom-checkbox"></span>
                          Access to selected free courses.
                        </label>
                      </li>
                    </ul>
                  </nav>
                </div>
                <button class="pricing-payment-item-btn">Get Started</button>
              </section>
            </div>
          </div>
    
          <div class="answer">
            <div class="answer-left">
              <h1 class="answer-left__title">Frequently Asked Questions</h1>
              <p class="answer-left__text">
                Still you have any questions? Contact our Team via
                support@skillbridge.com
              </p>
              <button class="answer-left__btn">See All FAQ’s</button>
            </div>
    
            <div class="answer-right">
              <section class="answer-right-item" v-for="(item, i) in 5" :key="item">
                <span>
                  <h3>Can I enroll in multiple courses at once?</h3>
                  <div class="answer-right-item-span-img" @click="toggleopen(i)">
                    <img
                      class="answer-right-item-span-img-logo"
                      src="../assets/images/svg/add.svg"
                      alt="plus"
                    />
                  </div>
                </span>
                <div class="answer-right-item-part">
                  <p class="answer-right-item-part__text">
                    Absolutely! You can enroll in multiple courses simultaneously
                    and access them at your convenience.
                  </p>
                  <button class="answer-right-item-part__btn">
                    Enrollment Process for Different Courses
                    <img src="../assets/images/svg/button.svg" alt="svg" />
                  </button>
                </div>
              </section>
            </div>
          </div>
      </div>



    </div>
  </div>
</template>

<script setup>

function toggleopen(i) {
  document.querySelectorAll(".answer-right-item-part").forEach((el, index) => {
    if (i == index) {
      el.classList.toggle("open");
    } else {
      el.classList.remove("open");
    }
  });
  document
    .querySelectorAll(".answer-right-item-span-img-logo")
    .forEach((el, index) => {
      if (i == index) {
        el.classList.toggle("rotate");
      } else {
        el.classList.remove("rotate");
      }
    });
}
</script>

<style lang="scss" scoped>
</style>