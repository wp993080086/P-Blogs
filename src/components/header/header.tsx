import { defineComponent, reactive, onMounted } from 'vue'
import { debounce } from '@/utils/index'
import styles from './header.module.scss'
import Logo from '@/static/images/logo.png'

export default defineComponent({
  name: 'pHeader',
  setup() {
    const menu = reactive([
      { title: '个人主页', id: '001' },
      { title: '前端工具', id: '002' },
      { title: '文章合集', id: '003' }
    ])
    // 滚动监听
    const handleScroll = (target: Event) => {
      const dom = document.querySelector('#main_box') as HTMLElement
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const offsetTop = dom.offsetTop // 获取所需元素到文档顶部的距离，然后判断滚动条位置让该元素是否固定定位
      console.log(scrollTop)
      console.log(offsetTop)
    }
    // 挂载之后
    onMounted(() => {
      const fn = debounce(50, handleScroll)
      window.addEventListener('scroll', fn, true)
    })
    return () => (
      <div id={styles.header_box}>
        <div class={styles.header_main}>
          <div class={styles.logo_box}>
            <img src={Logo} alt="logo" class={styles.logo} />
          </div>
          <div class={styles.menu_box}>
            {
              menu.map(item => {
                return <div class={styles.menu_item}>{item.title}</div>
              })
            }
          </div>
        </div>
      </div>
    )
  }
})