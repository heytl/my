
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M767.263419 301.91284l248.266654-247.267191c12.49329-12.49329 12.49329-32.782392 0-45.275682s-32.782392-12.49329-45.275682 0L722.087684 256.737104c-6.196672-6.196672-16.391196-6.196672-22.587868 0l-22.587868 22.587868c-18.689961 18.689961-49.073642 18.689961-67.86355 0-12.49329-12.49329-32.782392-12.49329-45.275682 0L127.906824 715.190864c-9.394954 9.394954-24.586794 9.394954-33.881802 0l-25.486311-25.486311c-1.599141-1.599141-4.097799-1.599141-5.69694 0l-39.578742 39.578742c-1.599141 1.599141-1.599141 4.097799 0 5.69694l81.955981 81.955981c3.098336 3.098336 3.098336 8.195598 0 11.293934l-5.397102 5.397101c-12.49329 12.49329-32.782392 12.49329-45.175735 0-12.49329-12.49329-32.782392-12.49329-45.275682 0s-12.49329 32.782392 0 45.275682l135.727099 135.7271c12.49329 12.49329 32.782392 12.49329 45.275682 0s12.49329-32.782392 0-45.275682-12.49329-32.782392 0-45.175736l5.397102-5.397101c3.098336-3.098336 8.195598-3.098336 11.293934 0l81.95598 81.955981c1.599141 1.599141 4.097799 1.599141 5.69694 0l39.578742-39.578742c1.599141-1.599141 1.599141-4.097799 0-5.69694L308.809659 930.075448c-9.394954-9.394954-9.394954-24.586794 0-33.881802l73.360597-73.360597 45.275682-45.275682 317.32956-317.32956c12.49329-12.49329 12.49329-32.782392 0-45.275682-18.689961-18.689961-18.689961-49.073642 0-67.86355l22.587868-22.587867c6.196672-6.196672 6.196672-16.29125-0.099947-22.587868zM514.998913 593.856034l-39.578742-39.578742c-1.599141-1.599141-4.097799-1.599141-5.69694 0l-39.578742 39.578742c-1.599141 1.599141-1.599141 4.097799 0 5.69694L469.723231 639.03177c1.599141 1.599141 1.599141 4.097799 0 5.69694l-39.578742 39.578742c-1.599141 1.599141-4.097799 1.599141-5.69694 0l-39.578742-39.578742c-1.599141-1.599141-4.097799-1.599141-5.69694 0l-39.578742 39.578742c-1.599141 1.599141-1.599141 4.097799 0 5.69694l39.578742 39.578742c1.599141 1.599141 1.599141 4.097799 0 5.69694l-39.578742 39.578742c-1.599141 1.599141-4.097799 1.599141-5.69694 0l-39.578742-39.578742c-1.599141-1.599141-4.097799-1.599141-5.69694 0l-39.578742 39.578742c-1.599141 1.599141-1.599141 4.097799 0 5.69694L288.820396 819.934605c1.599141 1.599141 1.599141 4.097799 0 5.696941l-30.383681 30.38368c-6.196672 6.196672-16.391196 6.196672-22.587868 0l-67.86355-67.86355c-6.196672-6.196672-6.196672-16.391196 0-22.587867l325.125372-325.125373c1.599141-1.599141 4.097799-1.599141 5.69694 0l84.854424 84.854424c1.599141 1.599141 1.599141 4.097799 0 5.69694l-62.866234 62.866234c-1.699087 1.499195-4.297692 1.499195-5.796886 0z m113.73891-113.838856L543.883399 395.162754c-1.599141-1.599141-1.599141-4.097799 0-5.69694l31.083305-31.083305c6.196672-6.196672 16.391196-6.196672 22.587868 0l67.863549 67.86355c6.196672 6.196672 6.196672 16.391196 0 22.587868l-31.083304 31.083305c-1.499195 1.699087-3.997853 1.699087-5.596994 0.099946z"/>
    </svg>
  )
}

Vue.component('icon-treatment', Icon)
export default Icon
