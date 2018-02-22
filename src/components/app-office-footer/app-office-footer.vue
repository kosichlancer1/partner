<template>
    <footer class="footer ">
        <div class="row md-layout md-gutter margin-reset ">
          <div class="col m2">
              <div class="socials-media-block">
                  <a href="" class="social-link"><img src="/static/vk.png" alt=""></a>
                  <a href="" class="social-link"><img src="/static/skype.png" alt=""></a>
                  <a href="" class="social-link"><img src="/static/telegram.png" alt=""></a>
              </div>
          </div>
            <div class="col m10">
               <a href="" class="footer__contact-item fc-base"><i class="material-icons fc-accent">&#xE0CD;</i><span>adverchain@gmail.com</span></a>
               <a href="" class="footer__contact-item fc-base"><i class="material-icons fc-accent">&#xE0BE;</i><span>8 (999) 858-85-98</span></a>
            </div>
        </div>

    </footer>

</template>

<script>
    export default {

        data () {
            return {

            }
        }

    }
</script>


<style lang="sass" scoped>
    @import  '~@/assets/style/var.sass'

    footer.footer
        padding-top: 20px
        padding-bottom: 20px
        .footer__contact-item
            font-weight: 500
            display: inline-block
            padding-left: 40px
            > *
                vertical-align: middle

        i
            margin-right: 15px




</style>
