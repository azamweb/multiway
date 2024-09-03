<template>
  <div>
    <header class="header">
      <div class="header-top">
        <div class="header-top-up">
          <img src="../assets/images/svg/chevron-right.svg" alt="svg" />
        </div>

        <div class="header-top-centre">
          <section class="header-top-centre-left">
            <h1><span>Multi</span>way</h1>
            <nav>
              <ul>
                <li>
                  <NuxtLink class="header-top-list-link" to="/">Home</NuxtLink>
                </li>
                <li>
                  <NuxtLink class="header-top-list-link" to="/courses"
                    >Courses</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink class="header-top-list-link" to="/about"
                    >About Us</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink class="header-top-list-link" to="/pricing"
                    >Pricing</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink class="header-top-list-link" to="/contakt"
                    >Contact</NuxtLink
                  >
                </li>
              </ul>
            </nav>
          </section>
          <section class="header-top-centre-right">
            <div class="buttons">
              <button class="blob-btn">
                Sign Up
                <span class="blob-btn__inner">
                  <span class="blob-btn__blobs">
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                    <span class="blob-btn__blob"></span>
                  </span>
                </span>
              </button>
              <br />

              <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                  <filter id="goo">
                    <feGaussianBlur
                      in="SourceGraphic"
                      result="blur"
                      stdDeviation="10"
                    ></feGaussianBlur>
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                      result="goo"
                    ></feColorMatrix>
                    <feBlend
                      in2="goo"
                      in="SourceGraphic"
                      result="mix"
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
            </div>

            <button class="btn-secont">Login</button>
          </section>
        </div>
      </div>
    </header>

    <NuxtPage />

    <div class="footer">
      <div class="container">
        <div class="footer-wrapper">

          <section class="footer-first-item">
            <h1><span>Multi</span>way</h1>
            <span class="footer-first-item-span">
              <section class="footer-first-item-span-part">
                <img src="../assets/images/svg/massage.svg" alt="massage" />
                <NuxtLink class="footer-first-item-span-part__link" to="/">hello@multiway.com</NuxtLink>
              </section>
              <section class="footer-first-item-span-part">
                <img src="../assets/images/svg/call.svg" alt="call" />
                <NuxtLink class="footer-first-item-span-part__link" to="/">+99899-999-99-99</NuxtLink>
              </section>
              <section class="footer-first-item-span-part">
                <img src="../assets/images/svg/Subtract.svg" alt="Subtract" />
                <NuxtLink class="footer-first-item-span-part__link"
                  to="https://www.google.com/maps/@41.3270016,69.2649984,11z?authuser=0&entry=ttu"
                  target="_blank"
                  >Somewhere in the World</NuxtLink
                >
              </section>
            </span>
          </section>

          <div class="footer-wrapper-right">
            <section class="footer-secont-item">
              <h1>Home</h1>
              <nav>
                <ul>
                  <li>Benefits</li>
                  <li>Our Courses</li>
                  <li>Our Testimonials</li>
                  <li>Our FAQ</li>
                </ul>
              </nav>
            </section>

            <section class="footer-secont-item">
              <h1>About Us</h1>
              <nav>
                <ul>
                  <li>Company</li>
                  <li>Achievements</li>
                  <li>Our Goals</li>
                </ul>
              </nav>
            </section>

            <section class="footer-thert-item">
              <h1>Social Profiles</h1>
              <span class="footer-thert-item-span">
                <nav class="footer-thert-item-span__nav">
                  <img src="../assets/images/svg/facbook.svg" alt="" />
                </nav>
                <nav class="footer-thert-item-span__nav">
                  <img src="../assets/images/svg/twiter.svg" alt="" />
                </nav>
                <nav class="footer-thert-item-span__nav">
                  <img src="../assets/images/svg/in.svg" alt="" />
                </nav>
              </span>
            </section>
          </div>


        </div>
        <h3>© 2023 Multiway. All rights reserved.</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Multiway",
  meta: [{ name: "description", content: "Multiway" }],
});
</script>

<style lang="scss" scoped>
</style>