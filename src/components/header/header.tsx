import { defineComponent, reactive } from 'vue'
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