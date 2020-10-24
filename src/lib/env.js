import envalid from 'envalid'

export default envalid.cleanEnv(process.env, {
  WEBSLIDES_LOOP: envalid.bool({ default: true }),
  WEBSLIDES_SHOW_INDEX: envalid.bool({ default: true }),
  WEBSLIDES_AUTO_SLIDE: envalid.bool({ default: false }),
  WEBSLIDES_CHANGE_ON_CLICK: envalid.bool({ default: false }),
  WEBSLIDES_MIN_WHEEL_DELTA: envalid.num({ default: 40 }),
  WEBSLIDES_NAVIGATE_ON_SCROLL: envalid.bool({ default: false }),
  WEBSLIDES_SCROLL_WAIT: envalid.num({ default: 450 }),
  WEBSLIDES_SLIDE_OFFSET: envalid.num({ default: 50 }),
})
