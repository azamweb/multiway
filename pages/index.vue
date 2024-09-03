<template>
  <div>
    <header class="header">
      <div class="header-hero">
        <section class="header-hero-top">
          <img
            class="header-hero-top__img"
            src="../assets/images/svg/abstractLine.svg"
            alt="abstractLine"
          />
          <span class="header-hero-top-span">
            <img src="../assets/images/svg/ergy.svg" alt="enrgy" />
            <h1><span>Unlock</span>Your Learning Skills</h1>
          </span>
        </section>
        <h2>with Online Design and Development Courses.</h2>
        <p>Learn from Industry Experts and Enhance Your Skills.</p>
        <div class="header-hero-btns">
          <button>Explore Courses</button>
          <button>View Pricing</button>
        </div>
      </div>

      <div class="container">
        <div class="header-centre">
          <section class="header-centre-item" v-for="item in 10" :key="item">
            <div class="header-centre-item-card">
              <img src="../assets/images/svg/zapier.svg" alt="svg" />
            </div>
            <div class="header-centre-item-card">
              <img src="../assets/images/svg/spotify.svg" alt="svg" />
            </div>
            <div class="header-centre-item-card">
              <img src="../assets/images/svg/zoom.svg" alt="svg" />
            </div>
            <div class="header-centre-item-card">
              <img src="../assets/images/svg/amazon.svg" alt="svg" />
            </div>
            <div class="header-centre-item-card">
              <img src="../assets/images/svg/adobe.svg" alt="svg" />
            </div>
            <div class="header-centre-item-card">
              <img src="../assets/images/svg/notion.svg" alt="svg" />
            </div>
            <div class="header-centre-item-card">
              <img src="../assets/images/svg/netlify.svg" alt="svg" />
            </div>
          </section>
        </div>
      </div>

      <div class="header-video">
        <div class="container">
          <section class="header-video-item">
            <video
              width="540px"
              height="340px"
              controls
              src="../assets/rolik.mp4"
            ></video>
          </section>
        </div>
      </div>
    </header>

    <main class="main">
      <div class="container">
        <div class="benifits">
          <h1 class="benifits__title">Benifits</h1>
          <section>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              ipsum voluptates tempore, praesentium nulla labore?
            </p>
            <button class="section-btn">View All</button>
          </section>

          <div class="benifits-card">
            <div class="benifits-card-item" v-for="item in 6" :key="item">
              <h1>0{{ item }}</h1>
              <h3 class="benifits-card-item__title">
                flexsible learning schedual
              </h3>
              <p class="benifits-card-item__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex hic
                neque animi!
              </p>
              <button class="benifits-card-item__btn">
                <img src="../assets/images/svg/chevrontop.svg" alt="svg" />
              </button>
            </div>
          </div>
        </div>

        <div class="courses">
          <h1 class="courses__title">Our Courses</h1>
          <section class="courses-section">
            <p class="courses-section__text">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
            <button class="courses-btn">View All</button>
          </section>

          <div class="courses-cards">
            <div class="courses-cards-item" v-for="item in 6" :key="item">
              <img
                class="courses-cards-item__img"
                src="../assets/images/png/painting.png"
                alt="png"
              />
              <section class="courses-cards-item-part">
                <span>
                  <button class="courses-btn">4Weeks</button>
                  <button class="courses-btn">beginer</button>
                </span>
                <h4>By John Smith</h4>
              </section>

              <h2 class="courses-cards-item__title">Lorem ipsum</h2>
              <p class="courses-cards-item__text">
                Lorem ipsum dolor sit amet consectetur. Sed a eget etiam massa
                sem malesuada in sit at. Amet velit volutpat enim at egestas
                commodo sodales. Habitasse etiam sociis donec quisque dictumst
                felis dolor. Fermentum viverra purus vel nullam amet et purus
                senectus.
              </p>
              <button class="courses-cards-item__btn">Get it Now</button>
            </div>
          </div>
        </div>

        <div class="testimonials">
          <h1 class="testimonials__title">Our Testimonials</h1>
          <section class="testimonials-section">
            <p class="testimonials-section__text">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
            <button class="testimonials-btn">View All</button>
          </section>

          <div class="testimonials-cards">
            <div class="testimonials-cards-item" v-for="item in 4" :key="item">
              <p class="testimonials-cards-item__text">
                Lorem ipsum dolor sit amet consectetur. Sed a eget etiam massa
                sem malesuada in sit at. Amet velit volutpat enim at egestas
                commodo sodales. Habitasse etiam sociis donec quisque dictumst
                felis dolor. Fermentum viverra purus vel nullam amet et purus
                senectus.
              </p>
              <section class="testimonials-cards-item-part">
                <span>
                  <img src="../assets/images/png/girl.png" alt="girl" />
                  <h5>Sarah L</h5>
                </span>
                <button>Read Full Story</button>
              </section>
            </div>
          </div>
        </div>

        <div class="pricing">
          <h1 class="pricing__title">Our Pricing</h1>
          <section class="pricing-section">
            <p class="pricing-section__text">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
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
              <h1 class="pricing-payment-item__title">
                <span>$70</span>/month
              </h1>
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
            <section
              class="answer-right-item"
              v-for="(item, i) in 5"
              :key="item"
            >
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
    </main>
  </div>
</template>

<script setup>
import { useStore } from "~~/store/store";
const store = useStore();

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

