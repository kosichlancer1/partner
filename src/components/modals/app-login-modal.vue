<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrap">
            <div class="modal-content z-depth-2">
                <p class="modal-title tac fz-large fw-bolder">Авторизация</p>
                <div class="modal-close"><i class="material-icons" @click="loginModalHide()">cancel</i></div>
                <div class="modal-form">

                    <div class="modal-form-item  flex">
                        <p class="checkbox-item">
                            <md-radio v-model="radio" value="webmaster"   >Вебмастер</md-radio>


                        </p>
                        <p class="checkbox-item">
                            <md-radio v-model="radio"  value="adverise"  >Рекламодатель</md-radio>
                        </p>
                    </div>
                    <div class="modal-form-item">
                        <md-field>
                            <label>Логин</label>
                            <md-input></md-input>
                        </md-field>
                    </div>
                    <div class="modal-form-item">
                        <md-field>
                            <label>Пароль</label>
                            <md-input type="password"></md-input>
                        </md-field>
                    </div>
                    <div class="modal-form-item">
                        <a href="" class="fc-accent">Забыли пароль?</a>
                    </div>
                    <div class="modal-form-accept tac">

                        <md-button class="md-raised md-accent" @click="loginModalHide();authUser() ">Войти</md-button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </transition>

</template>

<script>
    import store from '../../store'


    export default {
        components: {

        },
        data: () => ({
            radio:'asd'
        }),
        props: {

        },
        methods: {
            loginModalHide () {
                store.commit('hideLogin')
            },

            authUser() {
                store.commit('auth');

            }
        }
    }
</script>

<style lang="sass">


</style>
