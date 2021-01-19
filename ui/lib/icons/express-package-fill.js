
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1024 708.7c0 36.4-20.5 69.6-53.1 85.9 0 0-261.1 130.3-374.9 186.8-23.9 11.9-52-5.5-52-32.3V456.4c0-20.3 12.8-38.4 31.8-45.2l137.4-49.1c2.6-0.9 5.3 1 5.3 3.8v197.2c0 5.9 6.3 9.8 11.6 7.2l43.6-21.8c5.4-2.7 8.8-8.3 8.8-14.3V342.9c0-3.4 2.1-6.4 5.3-7.5l203.8-72.8c15.6-5.6 32.1 6 32.1 22.6 0.3 105.9 0.3 423.5 0.3 423.5zM480 456.2v490.4c0 27.2-29.1 44.6-53 31.7L50.6 776.2C19.5 759.5 0 727 0 691.6c0 0 0.1-304.3 0.3-408 0-16.6 16.5-28.2 32.1-22.5L448.3 411c19 6.9 31.7 24.9 31.7 45.2zM978.9 199.2l-207.9 74.3c-3.7 1.3-7.8 1.2-11.4-0.2L300.2 86.9c-3.4-1.4-3.3-6.2 0.1-7.5L478.4 12.6c10.9-4.1 22.3-6.1 33.7-6.1 11.4 0 22.7 2 33.6 6l415.9 155.2c7.2 2.7 13.9 6.2 20.1 10.3 8.1 5.5 6.4 17.9-2.8 21.2zM655.6 299.9c6.8 2.8 6.6 12.5-0.3 14.9L544.4 354.4c-21 7.5-43.9 7.5-64.9-0.1l-432-155.8c-9.4-3.4-10.8-16.1-2.4-21.4 5.4-3.3 11.1-6.2 17.2-8.5L196.4 118.4c3.8-1.4 7.9-1.4 11.6 0.2l447.6 181.3z"/>
    </svg>
  )
}

Vue.component('icon-express-package-fill', Icon)
export default Icon
