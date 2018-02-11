<template>
    <header class="header">
        <div class="container">
            <div class="row">
                <div class="col s2">
                    <a href="" class="header__logo">
                        <img src="../../assets/images/logo.png" alt="">
                    </a>
                </div>
                <div class="col s7">
                    <div class="header__nav">
                        <a href="#" class="uppercase">о нас</a>
                        <a href="#" class="uppercase active">рекламодателям</a>
                        <a href="#" class="uppercase">офферы</a>
                        <a href="#" class="uppercase">faq</a>
                        <a href="#" class="uppercase">оплата</a>
                        <a href="#" class="uppercase">новости</a>
                        <a href="#" class="uppercase">Контакты</a>
                    </div>
                </div>
                <div class="col s2">
                    <div class="header__authorization">
                        <a href="" class="fc-accent">Регистрация</a>
                        <a href="" class="fc-accent">Вход</a>
                    </div>
                </div>
                
            </div>
        </div>
    </header>

</template>

<script>
    export default {

        data () {
            return {
                menu: 'textwwwww'
            }
        }

    }
</script>


<style lang="sass" scoped>
    @import  '~@/assets/style/var.sass'

    header.header

        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)
        padding-top: 10px
        padding-bottom: 10px
        .row
            margin-bottom: 0

        .header__authorization
            padding-top: 10px
            padding-bottom: 10px
            display: flex
            justify-content: flex-end
        .header__authorization a
            margin-right: 20px
            &:last-child
                margin-right: 0
        .header__logo
            display: inline-block
            padding-top: 8px
        .header__nav
            display: flex
            justify-content: center
            align-items: center

        .header__nav a
            color: #333333
            padding-left: 20px
            padding-right: 20px
            padding-top: 10px
            padding-bottom: 10px

            &.active,&:hover
                color: $acColor

</style>
