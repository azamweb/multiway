<template>
  <div>
    <div class="contakt">
      <div class="contakt-top">
        <div class="container contakt-top-container">
          <h1 class="contakt-top-title">Contact Us</h1>
          <p class="contakt-top-text">
            Lorem ipsum dolor sit amet consectetur. Sed a eget etiam massa sem
            malesuada in sit at. Amet velit volutpat enim at egestas commodo
            sodales. Habitasse etiam sociis donec quisque dictumst felis dolor.
            Fermentum viverra purus vel nullam amet et purus senectus.
          </p>
        </div>
      </div>

      <div class="contakt-main">
        <div class="container">


          <div class="contakt-mesage">

            <div class="contakt-mesage-left">


              <form action="">

                <div class="contakt-mesage-left-item">
                  <section class="contakt-mesage-left-item-part">
                    <label
                      class="contakt-mesage-left-item-part__label"
                      for="part"
                      >First Name</label
                    >
                    <input
                      class="contakt-mesage-left-item-part__input"
                      id="part"
                      type="text"
                      placeholder="Enter First Name"
                    />
                  </section>

                  <section class="contakt-mesage-left-item-part">
                    <label
                      class="contakt-mesage-left-item-part__label"
                      for="part"
                      >Last Name</label
                    >
                    <input
                      class="contakt-mesage-left-item-part__input"
                      id="part"
                      type="text"
                      placeholder="Enter Last Name"
                    />
                  </section>

                  <section class="contakt-mesage-left-item-part">
                    <label
                      class="contakt-mesage-left-item-part__label"
                      for="part"
                      >Email</label
                    >
                    <input
                      class="contakt-mesage-left-item-part__input"
                      id="part"
                      type="email"
                      placeholder="Enter your Email"
                    />
                  </section>

                  <section class="contakt-mesage-left-item-part">
                    <label
                      class="contakt-mesage-left-item-part__label"
                      for="part"
                      >Phone</label
                    >
                    <input
                      class="contakt-mesage-left-item-part__input"
                      id="part"
                      type="tel"
                      placeholder="Enter Phone Number"
                    />
                  </section>

                </div>

                <div class="contakt-mesage-left-sebjekt">
                  <label class="contakt-mesage-left-sebjekt__label" for="part">Subject</label>
                  <input class="contakt-mesage-left-sebjekt__input" id="part" type="text" placeholder="Enter your Subject"/>
                </div>


                <div class="contakt-mesage-left-action">
                  <label class="contakt-mesage-left-action__label" for="part">Message</label>
                  <textarea class="contakt-mesage-left-action__input" placeholder="Enter your Message here..."></textarea>
                </div>

                <button class="contakt-mesage-left-btn">Send Your Message</button>


              </form>


            </div>

            <div class="contakt-socials">
  
              <section class="contakt-socials-item">
                  <NuxtLink class="contakt-socials-item__link" to="/">
                      <img src="../assets/images/svg/massage.svg" alt="message">
                  </NuxtLink>
                  <p class="contakt-socials-item__text">support@multiway.com</p>
              </section>
  
              <section class="contakt-socials-item">
                  <NuxtLink class="contakt-socials-item__link" to="/">
                      <img src="../assets/images/svg/call.svg" alt="message">
                  </NuxtLink>
                  <p class="contakt-socials-item__text" >+998919994455</p>
              </section>
  
              <section class="contakt-socials-item">
                  <NuxtLink class="contakt-socials-item__link" target="_blank" to="https://www.google.com/maps/@41.2942336,69.238784,12z?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D">
                      <img src="../assets/images/svg/Subtract.svg" alt="message">
                  </NuxtLink>
                  <p class="contakt-socials-item__text" >Some Where in the World</p>
              </section>
  
              <section class="contakt-socials-item">
                  <div class="contakt-socials-item-asets">
  
                      <NuxtLink class="contakt-socials-item-asets__link" to="https://www.facebook.com/?locale=ru_RU">
                          <img src="../assets/images/svg/facbook.svg" alt="message">
                      </NuxtLink>
  
                      <NuxtLink class="contakt-socials-item-asets__link" to="/">
                          <img src="../assets/images/svg/twiter.svg" alt="message">
                      </NuxtLink>
  
                      <NuxtLink class="contakt-socials-item-asets__link" to="/">
                          <img src="../assets/images/svg/in.svg" alt="message">
                      </NuxtLink>
  
                  </div>
  
                  <p class="contakt-socials-item__text" >Social Profiles</p>
              </section>
  
            </div>

          </div>




        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>