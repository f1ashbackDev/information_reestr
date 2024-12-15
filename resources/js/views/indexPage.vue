<template>
    <main>
        <section>
            <div class="banner">
                <div class="banner-image"></div>
                <div style="
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background-color: black;
                opacity: .3;"></div>
                <div class="banner-text">
                    <h2>{{ $t("message.title") }}</h2>
                    <p></p>
                </div>
            </div>
        </section>
    </main>
</template>
<style>
    .color-white{
        color: white !important;
    }

    body {
        margin: 0;
        font-family: Arial, sans-serif;
    }

    .banner {
        position: relative;
        width: 100%; /* Полная ширина экрана */
        height: 350px; /* Полная высота экрана */
    }

    .banner-image {
        width: 100%; /* Растягиваем изображение на всю ширину */
        height: 100%; /* Растягиваем изображение на всю высоту */
        background-image: url("img/aqlxxm09s1q71osc21lyygj9d7c8ne52.jpg");
        background-size: cover;
        background-position: center top;
    }

    .banner-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        text-align: center;
    }

    .banner-text h1 {
        font-size: 2.5em;
        margin: 0;
    }

    .banner-text p {
        font-size: 1.2em;
    }

    @media (max-width: 768px) {
        .banner-text h1 {
            font-size: 2em;
        }
        .banner-text p {
            font-size: 1em;
        }
    }

    @media (max-width: 480px) {
        .banner-text h1 {
            font-size: 1.5em;
        }
        .banner-text p {
            font-size: 0.9em;
        }
    }
</style>
