<template>
   <footer class="footer">
       <div class="container">
           <div class="md-layout md-gutter">
               <div class="md-layout-item md-size-25">
                   <a href="" class="footer__logo">
                       <img src="../../assets/images/logo.png" alt="">
                   </a>
                   <p class="md-body-2 fw-light fz-small margin-reset footer__logo-description">CPA Сеть партнерских программ с оплатой за действия</p>
               </div>
               <div class="md-layout-item md-size-55">
                <div class="md-layout md-gutter">
                    <div class="md-layout-item">
                        <span class="footer__link-list-title fc-accent">Вебмастерам</span>
                        <ul class="footer__link-list">
                            <li class="footer__link-list-item "><a @click="loginModalShow()">Авторизация</a></li>
                            <li class="footer__link-list-item"><a @click="registrModalShow()">Регистрация</a></li>
                            <li class="footer__link-list-item"><a href="">Оплата</a></li>
                            <li class="footer__link-list-item"><a href="">Оферта</a></li>
                            <li class="footer__link-list-item"><a href="">Вопрос-ответ</a></li>
                            <li class="footer__link-list-item"><a href="">Что мы предлагаем?</a></li>
                        </ul>
                    </div>
                    <div class="md-layout-item">
                        <span class="footer__link-list-title fc-accent">Вебмастерам</span>
                        <ul class="footer__link-list">
                            <li class="footer__link-list-item "><a @click="loginModalShow()">Авторизация</a></li>
                            <li class="footer__link-list-item"><a  @click="registrModalShow()">Регистрация</a></li>
                            <li class="footer__link-list-item"><a href="">Вопрос-ответ</a></li>
                            <li class="footer__link-list-item"><a href="">Что мы предлагаем?</a></li>
                        </ul>
                    </div>
                    <div class="md-layout-item">
                        <span class="footer__link-list-title fc-accent">Компания</span>
                        <ul class="footer__link-list">
                            <li class="footer__link-list-item "><a href="">О нас</a></li>
                            <li class="footer__link-list-item"><a href="">Контакты</a></li>
                        </ul>
                    </div>

                </div>
               </div>
               <div class="md-layout-item md-size-20">
                   <div class="socials-media-block">
                       <a href="" class="social-link"><img src="/static/vk.png" alt=""></a>
                       <a href="" class="social-link"><img src="/static/skype.png" alt=""></a>
                       <a href="" class="social-link"><img src="/static/telegram.png" alt=""></a>
                   </div>
                   <a href="" class="footer__contact-item fc-base"><i class="material-icons fc-accent">&#xE0CD;</i><span>adverchain@gmail.com</span></a>
                   <a href="" class="footer__contact-item fc-base"><i class="material-icons fc-accent">&#xE0BE;</i><span>8 (999) 858-85-98</span></a>

               </div>
           </div>
       </div>
   </footer>

</template>

<script>
    import store from '../../store'


    export default {

        data () {
            return {
                menu: 'textwwwww'
            }
        },
        methods:{
            registrModalShow () {
                store.commit('showRegistr')
            },
            loginModalShow () {
                store.commit('showLogin')
            },
        }

    }
</script>


<style lang="sass" scoped>
    @import  '~@/assets/style/var.sass'
    footer.footer
        background-color: $mainColor
        padding: 40px 0px
    .footer__link-list a
        color: $baseFontColor
    .footer__link-list-title
        font-weight: 500
    .footer__logo-description
        max-width: 240px
    .socials-media-block
        margin-bottom: 20px
    .footer__link-list
        list-style: none
        .footer__link-list-item
            margin-bottom: 10px
    .footer__contact-item
        display: flex
        justify-content: flex-start
        align-items: center
        font-weight: 500
        margin-bottom: 20px

        i
            margin-right: 15px



</style>
