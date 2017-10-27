import Vue from 'vue'
import {debounce, throttle } from 'vux'

import {COMMON_REGEX} from './global'


//验证指令
Vue.directive('verify',{
    inserted (el,binding) {
        let regex = COMMON_REGEX[binding.arg];
        let maxL = binding.value;
        console.log(typeof regex,regex)

        el.onkeyup =  debounce(function(){
            console.log(1)
            el.dataset.value = regex.test(el.value)&&(el.value.length<=maxL) ? 'valid' : 'invalid'
        },100)
    }
})

Vue.directive('focus',{
    inserted (el) {
        el.focus();
    }
})