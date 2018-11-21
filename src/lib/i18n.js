import Gettext from 'node-gettext'
import locales from '../translations/locales.json'
import {vsprintf} from 'sprintf-js'

function getUserLanguage() {
  if (navigator.language.indexOf('zh') !== -1) {
    return 'zh'
  } else {
    return 'en'
  }
}

 // 保证单例
if(!window.gt) {
  window.gt = new Gettext()
  window.gt.addTranslations('en', 'messages', locales['en'])
  window.gt.addTranslations('zh', 'messages', locales['zh-CN'])
  window.gt.setLocale(getUserLanguage())
}

// 对常用的方法，提供缩写命名
let _ = function(msgid, values=[]) {
  let str = window.gt.gettext.call(gt, msgid)
  return values.length ? vsprintf(str, values) : str
}

let _c = function(msgctxt, msgid, values=[]) {
  let str = window.gt.pgettext.call(gt, msgctxt, msgid)
  return values.length ? vsprintf(str, values) : str
}

// node-gettext 的 count 参数的插值稍显麻烦，需要声明两次
let _p = function(msgid, msgidPlural, count, values=[]) {
  let str = window.gt.ngettext.call(gt, msgid, msgidPlural, count)
  return values.length ? vsprintf(str, values) : str
}

let _cp = function(msgctxt, msgid, msgidPlural, count, values=[]) {
  let str = window.gt.npgettext.call(gt, msgctxt, msgid, msgidPlural, count)
  return values.length ? vsprintf(str, values) : str
}

let gt = window.gt

export {
  _,
  _c,
  _p,
  _cp,
  gt,
}