<template>
  <div>
    <div class="courses">

      <div class="courses-top">
        <div class="container courses-top-container">
          <h1 class="courses-top-title">
            Online Courses on Design and Development
          </h1>
          <p class="courses-top-text">
            Welcome to our online course page, where you can enhance your skills
            in design and development. Choose from our carefully curated
            selection of 10 courses designed to provide you with comprehensive
            knowledge and practical experience. Explore the courses below and
            find the perfect fit for your learning journey.
          </p>
        </div>
      </div>

      <div class="courses-main">
      <div class="container">
        
          <section class="courses-main-section" v-for="item in 5" :key="item">
            <h2 class="courses-main-section__title">Lorem ipsum</h2>
            <div class="courses-main-section-top">
              <p class="courses-main-section-top__text">
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </p>
              <button class="courses-main-section-top__btn">View Course</button>
            </div>

            <div class="courses-main-section-part">
              <img
                v-for="item in 3"
                :key="item"
                class="courses-main-section-part__img"
                src="../assets/images/png/painting.png"
                alt="painting"
              />
            </div>

            <span class="courses-main-section-span">
              <section class="courses-main-section-span-part">
                <button class="courses-main-section-span-part__btn">
                  4 Weeks
                </button>
                <button class="courses-main-section-span-part__btn">
                  Beginner
                </button>
              </section>
              <p class="courses-main-section-span__text">By John Smith</p>
            </span>
            
            <div class="courses-main-section-bottom">
              <h3 class="courses-main-section-bottom__title">Curriculum</h3>
              <nav class="courses-main-section-bottom-item">
                <span
                  class="courses-main-section-bottom-item-span"
                  v-for="item in 5"
                  :key="item"
                >
                  <h1 class="courses-main-section-bottom-item-span__title">
                    0{{ item }}
                  </h1>
                  <p class="courses-main-section-bottom-item-span__text">
                    Lorem ipsum
                  </p>
                </span>
              </nav>
            </div>
          </section>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>