
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M959.531723 895.562714c0 35.282772-28.685993 63.968765-63.968765 63.968765H771.123719v63.968765h156.423621c52.974134 0 95.953148-42.979014 95.953148-95.953148V768.124939h-63.968765v127.437775zM927.54734 0H771.123719v63.968765h124.439239c35.282772 0 63.968765 28.586042 63.968765 63.968766V256.374817h63.968765V95.953148c0-52.974134-42.979014-95.953148-95.953148-95.953148zM63.969009 895.562714V768.124939h-63.968765v159.422157c0 52.974134 42.979014 95.953148 95.953148 95.953148H259.373597v-63.968765H127.937775c-35.282772 0-63.968765-28.685993-63.968766-63.968765zM0.000244 95.953148V256.374817h63.968765V127.937531c0-35.382723 28.685993-63.968765 63.968766-63.968766H259.373597v-63.968765H95.953392c-52.974134 0-95.953148 42.979014-95.953148 95.953148zM511.850317 192.406052C238.183943 192.406052 58.17184 426.491752 11.894436 494.158712c-7.49634 10.89468-7.49634 25.287653 0 36.182332C58.17184 598.008004 238.183943 832.093704 511.850317 832.093704c301.852611 0 462.474183-235.385066 501.954905-302.352367 6.296925-10.694778 5.897121-23.988287-1.099463-34.28326C967.927623 429.69019 787.315813 192.406052 511.850317 192.406052z m343.632211 433.488336c-43.678673 41.579697-91.555295 74.663543-142.230551 98.252025-62.769351 29.185749-130.536262 43.978526-201.40166 43.978526-62.769351 0-125.138897-14.392972-185.60937-42.879063-49.675744-23.38858-98.351977-56.372474-144.529429-98.052123-46.277404-41.679649-81.06042-83.959004-102.350025-112.545046-1.099463-1.399317-1.099463-3.398341 0-4.797658 21.289605-28.586042 55.97267-70.865398 102.350025-112.545046 46.177452-41.579697 94.853685-74.563592 144.529429-97.952172 60.370522-28.486091 122.84002-42.879063 185.60937-42.879063s125.138897 14.392972 185.609371 42.879063c49.675744 23.38858 98.351977 56.372474 144.529429 97.952172 47.776672 42.979014 83.159395 86.557735 104.249097 115.143777 0.999512 1.399317 0.999512 3.198438 0.099951 4.597755-1.899073 2.898585-3.898097 5.897121-6.097023 9.095559-16.991703 24.787897-45.377843 62.269595-84.758614 99.751294zM512.250122 272.367008c-132.435334 0-239.88287 107.447535-239.88287 239.88287s107.447535 239.88287 239.88287 239.88287 239.88287-107.447535 239.88287-239.88287-107.447535-239.88287-239.88287-239.88287z m-31.984383 287.859444c-44.078477 0-79.960957-35.882479-79.960956-79.960957s35.882479-79.960957 79.960956-79.960956 79.960957 35.882479 79.960957 79.960956-35.882479 79.960957-79.960957 79.960957z"/>
    </svg>
  )
}

Vue.component('icon-view-fill', Icon)
export default Icon
