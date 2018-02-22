<template>
    <div class="office">
        <div class="row">
            <div class="col m12">
                <span class="page-title">Общая информация</span>
            </div>

        </div>
        <div class="row">

            <div class="col m2 s3">
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
                <div class="card">
                    <div class="card-content">
                        <span class="card-title">Наши новости</span>
                        <ul class="event-list">
                            <li class="event-list__item">
                                <p class="date-span">27.08.2018</p>
                                <a href="" class="event-list__item-title fc-accent fz-middle">CreditPlus стал удобнее для продвижения.</a>
                                <p class="event-list__item-text fz-small">
                                    Псевдо-латинский текст, который используется для веб дизайна, типографии, оборудования, и распечатки вместо английского текста для того, чтобы сделать ударение не на содержание, а на элементы дизайна. Такой текст также называется как заполнитель. Это очень удобный инструмент для моделей (макетов). Он помогает выделить визуальные элементы в документе или презентации, например текст
                                </p>
                            </li>
                            <li class="event-list__item">
                                <p class="date-span">27.08.2018</p>
                                <a href="" class="event-list__item-title fc-accent fz-middle">CreditPlus стал удобнее для продвижения.</a>
                                <p class="event-list__item-text fz-small">
                                    Псевдо-латинский текст, который используется называется как заполнитель. Это очень удобный инструмент для моделей (макетов). Он помогает выделить визуальные элементы в документе или презентации, например текст
                                </p>
                            </li>
                            <li class="event-list__item">
                                <p class="date-span">27.08.2018</p>
                                <a href="" class="event-list__item-title fc-accent fz-middle">CreditPlus стал удобнее для продвижения.</a>
                                <p class="event-list__item-text fz-small">
                                    Псевдо-латинский текст, который используется для веб дизайна зуется называется как заполнитель. Это очень удобный инструмент
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col m7">
                <div class="card">
                    <div class="card-content">
                        <vue-chart type="line" :data="chartData"></vue-chart>
                    </div>
                </div>
                <div class="card">

                    <div class="card-content">
                        <span class="card-title">Наши новости</span>
                        <ul class="event-list">
                            <li class="event-list__item">
                                <p class="date-span">27.08.2018</p>
                                <a href="" class="event-list__item-title fc-accent fz-middle">CreditPlus стал удобнее для продвижения.</a>
                                <p class="event-list__item-text fz-small">
                                    Псевдо-латинский текст, который используется для веб дизайна, типографии, оборудования, и распечатки вместо английского текста для того, чтобы сделать ударение не на содержание, а на элементы дизайна. Такой текст также называется как заполнитель. Это очень удобный инструмент для моделей (макетов). Он помогает выделить визуальные элементы в документе или презентации, например текст
                                </p>
                            </li>
                            <li class="event-list__item">
                                <p class="date-span">27.08.2018</p>
                                <a href="" class="event-list__item-title fc-accent fz-middle">CreditPlus стал удобнее для продвижения.</a>
                                <p class="event-list__item-text fz-small">
                                    Псевдо-латинский текст, который используется называется как заполнитель. Это очень удобный инструмент для моделей (макетов). Он помогает выделить визуальные элементы в документе или презентации, например текст
                                </p>
                            </li>
                            <li class="event-list__item">
                                <p class="date-span">27.08.2018</p>
                                <a href="" class="event-list__item-title fc-accent fz-middle">CreditPlus стал удобнее для продвижения.</a>
                                <p class="event-list__item-text fz-small">
                                    Псевдо-латинский текст, который используется для веб дизайна зуется называется как заполнитель. Это очень удобный инструмент
                                </p>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
            <div class="col m3">
                <div class="card">

                        <div class="card-content">
                            <span class="card-title">Наши новости</span>
                            <ul class="event-list">
                                <li class="event-list__item">
                                    <p class="date-span">27.08.2018</p>
                                    <a href="" class="event-list__item-title fc-accent fz-middle">CreditPlus стал удобнее для продвижения.</a>
                                    <p class="event-list__item-text fz-small">
                                        Псевдо-латинский текст, который используется для веб дизайна, типографии, оборудования, и распечатки вместо английского текста для того, чтобы сделать ударение не на содержание, а на элементы дизайна. Такой текст также называется как заполнитель. Это очень удобный инструмент для моделей (макетов). Он помогает выделить визуальные элементы в документе или презентации, например текст
                                    </p>
                                </li>
                                <li class="event-list__item">
                                    <p class="date-span">27.08.2018</p>
                                    <a href="" class="event-list__item-title fc-accent fz-middle">CreditPlus стал удобнее для продвижения.</a>
                                    <p class="event-list__item-text fz-small">
                                        Псевдо-латинский текст, который используется называется как заполнитель. Это очень удобный инструмент для моделей (макетов). Он помогает выделить визуальные элементы в документе или презентации, например текст
                                    </p>
                                </li>
                                <li class="event-list__item">
                                    <p class="date-span">27.08.2018</p>
                                    <a href="" class="event-list__item-title fc-accent fz-middle">CreditPlus стал удобнее для продвижения.</a>
                                    <p class="event-list__item-text fz-small">
                                        Псевдо-латинский текст, который используется для веб дизайна зуется называется как заполнитель. Это очень удобный инструмент
                                    </p>
                                </li>
                            </ul>
                        </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Webmasters',
        data () {
            return {
                chartData: {
                    labels: ['январь', 'февраль', 'март', "апрель"],
                    datasets: [
                        {
                            label: 'Component 1',
                            data: [1000, 2000, 1500, 5000],
                            backgroundColor: "rgba(255,87,34, 0.5)",
                            borderColor:"rgba(255,87,34, 1)"
                        },
                        {
                            label: 'Component 2',
                            data: [2000, 3000, 4000, 1000],
                            backgroundColor: "rgba(255,46,87, 0.5)",
                            borderColor:"rgba(255,46,87, 1)"
                        }
                    ]
                }
            }
        }
    }
</script>

<style lang="sass">


</style>
