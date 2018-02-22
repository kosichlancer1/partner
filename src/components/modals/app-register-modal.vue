<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrap">
                <div class="modal-content z-depth-2">
                    <p class="modal-title tac fz-large fw-bolder">Регистрация</p>
                    <div class="modal-close"><i class="material-icons" @click="registrModalHide()">cancel</i></div>
                    <div class="modal-form">

                        <div class="modal-form-item  flex">
                            <p class="checkbox-item">
                                <md-radio v-model="userType" value="ur-face"   >Вебмастер</md-radio>


                            </p>
                            <p class="checkbox-item">
                                <md-radio v-model="userType"  value="phys-face"  >Рекламодатель</md-radio>
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
                            <md-field>
                                <label>Повторите пароль</label>
                                <md-input type="password"></md-input>
                            </md-field>
                        </div>
                        <div class="modal-form-item">
                            <md-field>
                                <label>Контактные данные</label>
                                <md-input ></md-input>
                            </md-field>
                        </div>

                        <div class="modal-form-accept tac">
                            <md-button class="md-raised md-accent" @click="registrModalHide()">Зарегистрироваться</md-button>
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
            userType: ""
        }),
        methods: {
            registrModalHide () {
                store.commit('hideRegistr')
            }
        },
        computed: {

        }


    }
</script>

<style lang="sass">


</style>
