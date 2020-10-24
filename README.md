
# 🛷 webslides-builder

a small component based builder for webslides - built using parcel and posthtml to componentise slides

## 📦 Getting Started

Install them packages

```sh
yarn
```

Run the project

```sh
yarn dev
```

Build the project

```sh
yarn build
```


## 🔥 How to use

In the `src/index.html` file:

```html
<main role="main">
  <article id="webslides">

    <!-- Quick Guide
      - Each parent <section> in the <article id="webslides"> element is an individual slide.
      - Vertical sliding = <article id="webslides" class="vertical">
      - <div class="wrap"> = container 90% / <div class="wrap size-50"> = 45%;
    -->

    <!-- Slides should be placed here as includes -->
    <include src="slides/001-intro.html"></include>

  </article>
</main>
```

Individual slides should still follow the webslides standards:

```html
<section class="bg-brand-primary aligncenter">
  <!--.wrap = container (width: 90%) -->
  <div class="wrap">
    <h1><img class="whitelogo" src="./images/logos/apple.svg" alt="Brand Logo"></h1>
  </div>
  <!-- .end .wrap -->
</section>
```


## 🤔 What is WebSlides?

Great question, you should go check it out [here](https://github.com/webslides/WebSlides)