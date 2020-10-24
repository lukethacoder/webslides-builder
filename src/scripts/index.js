import 'webslides'
import Prism from 'prismjs'

import env from '../lib/env'

function init() {
  console.log('env ', env)

  const ws = new window.WebSlides({
    loop: env.WEBSLIDES_LOOP,
    showIndex: env.WEBSLIDES_SHOW_INDEX,
    autoslide: env.WEBSLIDES_AUTO_SLIDE,
    changeOnClick: env.WEBSLIDES_CHANGE_ON_CLICK,
    navigateOnScroll: env.WEBSLIDES_NAVIGATE_ON_SCROLL,
    minWheelDelta: env.WEBSLIDES_MIN_WHEEL_DELTA,
    scrollWait: env.WEBSLIDES_SCROLL_WAIT,
    slideOffset: env.WEBSLIDES_SLIDE_OFFSET,
  })

  Prism.highlightAll()
}

init()
