<template>
    <header class="header">
        <div class="row valign-wrapper office-header-top">
            <div class="col m3 ">
                <a href="" class="header__logo valign-wrapper">
                    <img src="../../assets/images/logo.png" alt="">
                </a>
            </div>
            <div class="col m9">
                <div class="user-information right-align ">
                    <div class="user-balance link user-information-item" >
                        <dropdown :visible="dropItems.balance" :animation="dropItems.animation" :position="dropItems.position" @clickout="dropItems.balance = false">
                            <span class="drop-link"  @click="dropItems.balance = !dropItems.balance">
                                 <span class="user-balance-item fw-bold">Доступно:</span>
                            <span class="fc-accent user-balance-item"><span class="fz-middle">2500.00</span><i class="icon rub "></i></span>
                            <span class="fc-accent user-balance-item"><span class="fz-middle">2500.00</span><i class="icon dollar"></i></span>
                            </span>

                            <div slot="dropdown" class=" z-depth-1 ">
                                <div class=" card">
                                    <div class="card-content">
                                        <table>
                                            <thead>
                                            <tr>
                                                <th class="fz-middle fw-regular"><span class="vac">Ваш баланс </span><i class="icon rub vac"></i></th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            <tr class="">
                                                <td>Доступно:</td>
                                                <td class="right-align"><span class="vac fc-accent">24350.00 </span> <i class="icon rub vac"></i></td>

                                            </tr>
                                            <tr class="">
                                                <td>В холде:</td>
                                                <td class="right-align"><span class="vac fc-accent">242350.00 </span> <i class="icon rub vac"></i></td>

                                            </tr>
                                            </tbody>
                                        </table>
                                        <table>
                                            <thead>
                                            <tr>
                                                <th class="fz-middle fw-regular"><span class="vac">Ваш баланс </span><i class="icon dollar vac"></i></th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            <tr class="">
                                                <td>Доступно:</td>
                                                <td class="right-align"><span class="vac fc-accent">24350.00 </span> <i class="icon dollar vac"></i></td>

                                            </tr>
                                            <tr class="">
                                                <td>В холде:</td>
                                                <td class="right-align"><span class="vac fc-accent">242350.00 </span> <i class="icon dollar vac"></i></td>

                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </dropdown>
                    </div>

                    <div class="user-profile user-information-item">
                        <dropdown :visible="dropItems.profile" :animation="dropItems.animation" :position="['left', 'bottom', 'left', 'top']" @clickout="dropItems.profile = false">

                            <span class="user-profile__user-name fw-bold" @click="dropItems.profile = !dropItems.profile" >LevelUP SPB</span>
                            <i class="material-icons fc-accent user-profile__user-icon">&#xE853;</i>
                            <div slot="dropdown" class=" z-depth-1 ">
                                <div class="dropdown-block mw-reset left-align">
                                    <ul class="dropdown-block__menu">
                                        <li class="dropdown-block__menu-item"><a href="#">Профиль</a></li>
                                        <li class="dropdown-block__menu-item" @click="exit()"><a href="#">Выход</a></li>
                                    </ul>
                                </div>
                            </div>
                        </dropdown>


                    </div>
                </div>
            </div>
        </div>
        <div class="office-header-bottom z-depth-1">
            <div class="office-header__menu row">
                <div class="col m12">
                    <!--<a class="office-header__menu-item"> </a>-->
                    <dropdown :visible="dropItems.item1" :animation="dropItems.animation" :position="dropItems.position" @clickout="dropItems.item1 = false">
                        <span class="link office-header__menu-item" @click="dropItems.item1 = !dropItems.item1"><i class="material-icons">&#xE88A;</i>Главная</span>
                        <div slot="dropdown" class=" z-depth-1 ">
                            <div class="dropdown-block">
                                <ul class="dropdown-block__menu">
                                    <li v-for="(item, index) in 5" class="dropdown-block__menu-item"><a href="#">Пункт меню {{index + 1}}</a></li>
                                </ul>
                            </div>
                        </div>
                    </dropdown>
                    <dropdown :visible="dropItems.item2" :animation="dropItems.animation" :position="dropItems.position" @clickout="dropItems.item2 = false">
                        <span class="link office-header__menu-item" @click="dropItems.item2 = !dropItems.item2"><i class="material-icons">&#xE6C4;</i>Статистика</span>
                        <div slot="dropdown" class=" z-depth-1 ">
                            <div class="dropdown-block">
                                <ul class="dropdown-block__menu">
                                    <li v-for="(item, index) in 3" class="dropdown-block__menu-item"><a href="#">Пункт меню {{index + 1}}</a></li>
                                </ul>
                            </div>
                        </div>
                    </dropdown>

                    <a class="office-header__menu-item"><i class="material-icons">&#xE322;</i> Источники</a>
                    <a class="office-header__menu-item"><i class="material-icons">&#xE873;</i> Офферы</a>
                    <a class="office-header__menu-item"><i class="material-icons">&#xE869;</i> Инструменты</a>
                    <a class="office-header__menu-item"><i class="material-icons">&#xE263;</i> Финансы</a>
                    <a class="office-header__menu-item"><i class="material-icons">&#xE887;</i> Поддержка</a>
                </div>

            </div>
        </div>
    </header>

</template>

<script>
    import store from '../../store'
    import dropdown from 'vue-my-dropdown'


    export default {

        data () {
            return {

                dropItems: {
                    animation: 'ani-slide-y',
                    position: ['left', 'bottom', 'left', 'top'],
                    balance:false,
                    item1: false,
                    item2: false,
                    profile: false
                }
            }
        },
        components: {
            dropdown,
        },
        methods: {
            exit() {
                store.commit('exit');
            }
        }

    }
</script>


<style lang="sass" scoped>
    @import  '~@/assets/style/var.sass'

    header.header
        position: relative
        background-color: $mainColor
        .row
            margin-bottom: 0
        .user-profile
            cursor: pointer
            i
                font-size: 27px
        .user-balance-item
            margin-right: 20px
            vertical-align: middle
            & > span,i
                vertical-align: middle
        .user-profile
            .user-profile__user-name,
            .user-profile__user-icon
                vertical-align: middle
            .user-profile__user-name
                margin-right: 10px


        .user-information-item
            display: inline-block
            border-right: 1px solid #a8a4a4
            padding-top: 20px
            padding-bottom: 20px
            padding-left: 15px
            padding-right: 15px
            &:last-child
                border-right: none
                padding-right: 0
        .user-information
        .drop-link
            cursor: pointer

        .office-header-bottom
            background-color: #ffffff
            .office-header__menu-item
                padding: 15px 20px
                display: inline-block
                cursor: pointer
                color: $baseFontColor
                font-weight: 500
                transition: all 0.2s
                &:hover,.active
                    background-color: $lightAccent
                    color: #ffffff
                    i
                        color: #ffffff
                i
                    vertical-align: middle
                    margin-right: 10px
                    font-size: 20px
                    color: $acColor
                    transition: all 0.2s




</style>
