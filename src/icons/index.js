import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon)

// 以下2行代码的含义是将所有SVG目录下的所有的.svg后缀的文件映入到项目中
const req = require.context('./svg', false, /\.svg$/) // 读取所有.svg后缀的文件
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

// 相当于把svg下的所有的svg图片打包到了项目中
// 如果想用svg图片 就在svg目录下去寻找就可以了
