
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M578.34297 350.7c33.4 0 63.9 10.3 86 29.1 8.2 7 15.1 15.1 20.8 24.2h-222c5.8-7.8 12.6-14.9 20.5-21.3 25.1-20.4 59.6-32 94.7-32z m0-64c-96.9 0-195.9 63.1-202.2 181.3h391.7C762.34297 344.7 671.34297 286.7 578.34297 286.7zM762.34297 596.8c87.1 0 173.5-0.9 254.6-4.2 15.1-110-10.8-208.3-45.9-278.9 43.9-89.3 57-226.2-14.1-282.5C928.54297 8.7 890.34297 0.4 849.54297 0.4c-76.5 0-162.3 29.3-210.1 48.9-18.1 7.5-37.2 18.8-52.9 21.8-18.2 3.4-40.6 2.2-56.5 3.6-231.7 20.1-358.5 161-416.3 358.5 70.9-66 131.8-142.3 222.3-188.3 0 2.1-1 3.2-1.9 4.3-0.7 0.8-1.3 1.7-1.6 2.9-8.4 7.1-16.7 14.5-25.1 22.3-106.3 99.2-210.9 256.9-267.9 416-30.3 84.7-65.9 214.6-10.6 286 26.9 34.8 68.9 47.5 115.3 47.5 79.2 0 171.2-37.2 223.4-65.6 49.6 18.9 94.3 35.6 151.8 39.9 14.8 1.1 29.3 1.6 43.5 1.6 227.8 0 375.9-136.5 436.3-309.5H752.34297c-40.2 56.1-99.4 106.5-183 106.5-8.1 0-16.5-0.5-25.1-1.5-99.3-11.5-166.2-92.9-172.9-199.1 32.6-0.4 66.3-0.6 100.7-0.6 93.4 0.1 192.3 1.2 290.3 1.2zM865.04297 68.3c61.1 0 114.6 26.1 116.6 97 1.3 45-16 77.1-28.3 115.8-56.1-76.3-124.7-139.9-218.8-177.4 35.9-21.1 85.3-35.4 130.5-35.4zM184.64297 982.8c-49.8 0-93-19.9-102.7-75.1-13-73.7 27.7-156.4 49.4-210.1 46.8 99.3 104.7 187.1 197.6 239.1-35.8 25.3-93.5 46.1-144.3 46.1zM307.34297 600.3c8.8 139.8 101 243.8 229.4 258.7 10.9 1.3 21.8 1.9 32.5 1.9 81.5 0 155-36.7 214.3-106.5h115.2c-25.2 41.2-56.8 76.6-93.6 104.7-31.8 24.3-67.6 43.1-106.4 56-41.7 13.8-87.4 20.8-135.7 20.8-12.7 0-25.7-0.5-38.8-1.4-47.9-3.6-86-17.7-129.5-34.3l-34.5-19.3c-36.1-20.2-67.8-48.1-96.9-85.4-25.9-33.1-49.4-72.9-74-125.2L152.24297 592c19.8-38.5 42.3-76.5 66.9-113.1 48.5-71.9 101.9-133.4 154.5-177.8l16.5-14v-0.2c39.7-29.7 80.9-57.8 122.9-83.8 40-24.8 81.5-48.2 123.6-69.6l74.1 29.6c38.7 15.5 73.5 36.3 106.2 63.7 29.8 25 57.5 55.1 84.7 92.1l1.3 1.7 10.7 21.5c17.8 35.8 44 103.2 43.6 188.4-55.8 1.5-119.2 2.2-195 2.2-49.4 0-99.6-0.3-148.3-0.6-47.1-0.3-95.8-0.5-142.1-0.5-38.1 0-71.3 0.2-101.5 0.6l-67.3 0.9 4.3 67.2z"/>
    </svg>
  )
}

Vue.component('icon-internet', Icon)
export default Icon
