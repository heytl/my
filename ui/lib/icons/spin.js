
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M498.4 349.8c-17.7 0-32-14.3-32-32V64.6c0-17.7 14.3-32 32-32s32 14.3 32 32v253.2c0 17.7-14.3 32-32 32zM218.6 629.6H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h186.6c17.7 0 32 14.3 32 32s-14.4 32-32 32zM497.6 989.4h-0.3c-17.7-0.2-31.8-14.7-31.7-32.3l0.8-80c0.2-17.6 14.5-31.7 32-31.7h0.3c17.7 0.2 31.8 14.7 31.7 32.3l-0.8 80c-0.2 17.6-14.5 31.7-32 31.7zM671.6 909.4c-10.5 0-20.8-5.2-26.9-14.7L618 853.3c-9.6-14.9-5.3-34.7 9.6-44.2 14.9-9.6 34.7-5.3 44.2 9.6l26.7 41.5c9.6 14.9 5.3 34.7-9.6 44.2-5.3 3.4-11.3 5-17.3 5zM764.9 789.5c-5.5 0-11.2-1.4-16.3-4.5l-26.7-15.8c-15.2-9-20.2-28.6-11.2-43.8 9-15.2 28.6-20.2 43.8-11.2l26.7 15.8c15.2 9 20.2 28.6 11.2 43.8-5.9 10.1-16.6 15.7-27.5 15.7zM751.2 509.7c-12 0-23.5-6.8-28.9-18.3-7.6-16-0.8-35.1 15.2-42.6l240.8-114.2c16-7.6 35.1-0.8 42.6 15.2 7.6 16 0.8 35.1-15.2 42.6L764.9 506.6c-4.4 2.1-9.1 3.1-13.7 3.1zM644.9 391.2c-5.7 0-11.5-1.5-16.7-4.7-15.1-9.3-19.8-29-10.5-44l139.6-227c9.3-15.1 29-19.8 44-10.5 15.1 9.3 19.8 29 10.5 44L672.2 376c-6 9.8-16.5 15.2-27.3 15.2zM365.2 383.6c-11.3 0-22.3-6-28.1-16.7l-120-220.4c-8.4-15.5-2.7-35 12.8-43.4 15.5-8.4 35-2.7 43.4 12.8l119.9 220.3c8.4 15.5 2.7 35-12.8 43.4-4.8 2.7-10.1 4-15.2 4zM252.3 496.4c-5 0-10-1.2-14.7-3.6L57.3 399.5c-15.7-8.1-21.8-27.4-13.7-43.1 8.1-15.7 27.4-21.8 43.1-13.7L267 435.9c15.7 8.1 21.8 27.4 13.7 43.1-5.6 11.1-16.8 17.4-28.4 17.4zM306.8 989.4a32 32 0 0 1-14.6-3.5c-15.7-8.1-21.9-27.3-13.9-43.1l58.3-113.7c8.1-15.7 27.3-21.9 43.1-13.9 15.7 8.1 21.9 27.3 13.9 43.1L335.3 972c-5.7 11-16.9 17.4-28.5 17.4zM112 842.8c-11.1 0-21.9-5.8-27.8-16.2-8.7-15.4-3.4-34.9 12-43.6l140.4-80c15.4-8.7 34.9-3.4 43.6 12 8.7 15.4 3.4 34.9-12 43.6l-140.4 80c-5 2.9-10.5 4.2-15.8 4.2z"/>
    </svg>
  )
}

Vue.component('icon-spin', Icon)
export default Icon
