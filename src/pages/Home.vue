<template>
    <div class="home-page">
       <section class="standart-banner">
           <img class="standart-banner-background" src="/static/banner-bg.png">
           <div class="standart-banner-overlay"></div>
           <div class="standart-banner-content">
               <h1 class="fc-white tac fw-light standart-banner-title">ПОРА РАБОТАТЬ НА РЕЗУЛЬТАТ  <p class="margin-reset fw-bolder">C АДВЕРЧЕЙН.РУ</p></h1>
               <div class="standart-banner-button "><md-button class="md-raised md-accent large" :md-ripple="false">ПРИСОЕДИНИТЬСЯ</md-button></div>




           </div>
       </section>
       <section class="advantage-block">
            <div class="container">
                <router-link to="Webmasters">asdasd</router-link>
                <p class="section-title">наша работа - ваш результат</p>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item advantage-block__item">
                        <img src="/static/adv-search.png" alt="" class="advantage-block__item-img">
                        <p class="advantage-block__item-title fw-bolder fz-middle ">ПРЕИМУЩЕСТВО ПЕРВОЕ</p>
                        <p class="advantage-block__item-desc">Краткое описание преимущества, плюсов и почему стоит с нами сотрудничества.</p>
                    </div>
                    <div class="md-layout-item advantage-block__item">
                        <img src="/static/adv-like.png" alt="" class="advantage-block__item-img">
                        <p class="advantage-block__item-title fw-bolder fz-middle">ПРЕИМУЩЕСТВО ВТОРОЕ</p>
                        <p class="advantage-block__item-desc">Краткое описание преимущества, плюсов и почему стоит с нами сотрудничества.</p>
                    </div>
                    <div class="md-layout-item advantage-block__item">
                        <img src="/static/adv-path.png" alt="" class="advantage-block__item-img">
                        <p class="advantage-block__item-title fw-bolder fz-middle">ПРЕИМУЩЕСТВО ТРЕТЬЕ</p>
                        <p class="advantage-block__item-desc">Краткое описание преимущества, плюсов и почему стоит с нами сотрудничества.</p>
                    </div>
                    <div class="md-layout-item advantage-block__item">
                        <img src="/static/adv-clock.png" alt="" class="advantage-block__item-img">
                        <p class="advantage-block__item-title fw-bolder fz-middle">ПРЕИМУЩЕСТВО ЧЕТВЕРТОЕ</p>
                        <p class="advantage-block__item-desc">Краткое описание преимущества, плюсов и почему стоит с нами сотрудничества.</p>
                    </div>
                </div>
            </div>

        </section>
        <section class="section">
            <div class="container">
                <p class="fw-light tac"><b>АДВЕРЧЕЙН.ру</b> - это CPA сеть партнерских программ, созданная командой профессионалов. Наш опыт в сфере интернет-маркетинга позволил нам разработать уникальную платформу, сводящую вместе интересы
                    вебмастеров и рекламодателей.</p>

                <p class="fw-light tac">Мы заботимся о репутации нашей компании и делаем акцент на высоких стандартах ведения бизнеса, системном подходе к развитию компании и высоком уровне профессионализма наших сотрудников. Наши разработки в области интернет маркетинга по CPA модели помогут Вам достичь высоких результатов как в привлечении клиентов так и в монетизации Вашего трафика.</p>

                <p class="fw-light tac">Для нас Вы не просто партнеры, Вы – часть нашей команды, и у нас с Вами один путь и общие цели. Наши навыки и умения работают на Вас и помогут Вам достичь небывалых вершин в онлайн сфере.</p>
            </div>

        </section>
    </div>

</template>

<script>

    export default {
        name: 'Home',
        data () {
            return {
                menu: 'textwwwww'
            }
        }
    }
</script>

<style lang="sass">


</style>
