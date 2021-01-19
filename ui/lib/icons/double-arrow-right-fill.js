
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M450.4 1024c13.5 0 26.8-5.6 36.3-16.6l348.6-402.8c22.4-25.7 34.7-58.5 34.7-92.6 0-34.1-12.3-67-34.7-92.6L486.7 16.6C469.4-3.5 439-5.6 419 11.7c-20 17.3-22.2 47.7-4.9 67.7l348.8 403.1c14.7 16.8 14.7 42.2 0 59l-0.2 0.2-348.6 402.9c-17.3 20-15.2 50.4 4.9 67.7 9.1 7.9 20.3 11.7 31.4 11.7zM202 1024c13.5 0 26.8-5.6 36.3-16.6l348.6-402.8c22.4-25.7 34.7-58.5 34.7-92.6 0-34.1-12.3-67-34.7-92.6L238.3 16.6c-17.3-20-47.7-22.2-67.7-4.9-20 17.3-22.2 47.7-4.9 67.7l348.8 403.1c14.7 16.8 14.7 42.2 0 59l-0.2 0.2-348.6 402.9c-17.3 20-15.2 50.4 4.9 67.7 9 7.9 20.2 11.7 31.4 11.7z"/>
    </svg>
  )
}

Vue.component('icon-double-arrow-right-fill', Icon)
export default Icon
