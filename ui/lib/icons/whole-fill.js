
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M0.000244 95.953148v831.593948c0 52.974134 42.979014 95.953148 95.953148 95.953148h831.593948c52.974134 0 95.953148-42.979014 95.953148-95.953148v-831.593948c0-52.974134-42.979014-95.953148-95.953148-95.953148h-831.593948c-52.974134 0-95.953148 42.979014-95.953148 95.953148z m895.562714 863.578331h-767.625183c-35.282772 0-63.968765-28.685993-63.968766-63.968765v-767.625183c0-35.282772 28.685993-63.968765 63.968766-63.968766h767.625183c35.282772 0 63.968765 28.685993 63.968765 63.968766v767.625183c0 35.282772-28.685993 63.968765-63.968765 63.968765zM480.265739 160.421669v287.859444c0 17.691362-14.293021 31.984383-31.984382 31.984382H160.421913c-17.691362 0-31.984383-14.293021-31.984382-31.984382V160.421669c0-17.691362 14.293021-31.984383 31.984382-31.984383h287.859444c17.691362 0 31.984383 14.293021 31.984382 31.984383zM896.062714 160.421669v287.859444c0 17.691362-14.293021 31.984383-31.984383 31.984382H576.218887c-17.691362 0-31.984383-14.293021-31.984382-31.984382V160.421669c0-17.691362 14.293021-31.984383 31.984382-31.984383h287.859444c17.691362 0 31.984383 14.293021 31.984383 31.984383zM480.265739 576.218643v287.859444c0 17.691362-14.293021 31.984383-31.984382 31.984382H160.421913c-17.691362 0-31.984383-14.293021-31.984382-31.984382V576.218643c0-17.691362 14.293021-31.984383 31.984382-31.984382h287.859444c17.691362 0 31.984383 14.293021 31.984382 31.984382zM896.062714 576.218643v287.859444c0 17.691362-14.293021 31.984383-31.984383 31.984382H576.218887c-17.691362 0-31.984383-14.293021-31.984382-31.984382V576.218643c0-17.691362 14.293021-31.984383 31.984382-31.984382h287.859444c17.691362 0 31.984383 14.293021 31.984383 31.984382z"/>
    </svg>
  )
}

Vue.component('icon-whole-fill', Icon)
export default Icon
