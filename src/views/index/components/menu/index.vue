<template>
  <div class="menu">
    <Menu
      ref="menuRef"
      :width="'auto'"
      :accordion="true"
      :active-name="activeName"
      :open-names="[openName]"
    >
      <template v-for="(item, index) in routes">
        <Submenu :key="index" :name="item.name" v-if="nodeHasChild(item)">
          <template slot="title">
            <img :src="getIcon(item.meta.icon)" :alt="item.meta.icon" />
            {{ item.meta && item.meta.title }}
          </template>
          <template v-for="(child, idx) in item.children">
            <MenuItem
              class="is-child"
              v-if="!child.meta || !child.meta.hidden"
              :to="child.path"
              :key="idx"
              :name="child.name"
            >
              {{ child.meta && child.meta.title }}
            </MenuItem>
          </template>
        </Submenu>
        <MenuItem
          :key="index"
          v-if="!nodeHasChild(item) && (!item.meta || !item.meta.hidden)"
          :name="item.name"
          :to="item.path"
        >
          <img :src="getIcon(item.meta && item.meta.icon)" :alt="item.meta && item.meta.icon" />
          {{ item.meta && item.meta.title }}
        </MenuItem>
      </template>
    </Menu>
  </div>
</template>

<script>
  import { hasChildren, findParent } from './utils';
  import { mapState } from 'vuex';

  import Hall from '@/assets/img/hall-a.png';
  import Find from '@/assets/img/find-a.png';
  import Check from '@/assets/img/check-a.png';
  import Test from '@/assets/img/test-a.png';
  import Tj from '@/assets/img/tj-a.png';
  import Report from '@/assets/img/report-a.png';
  import Sys from '@/assets/img/sys-a.png';

  export default {
    name: 'LeftMenu',
    data() {
      return {
        Hall,
        Find,
        Check,
        Test,
        Tj,
        routes: [],
        Report,
        Sys,
        activeName: 'ClueFind',
        openName: 'Clue'
      };
    },
    created() {
      this.routes = [...this.mainMenu];
    },
    methods: {
      getIcon(iconname) {
        for (const p in this._data) {
          if (iconname === p.toLowerCase()) {
            return this._data[p];
          }
        }
      },
      handleBtnClick() {
        // console.log(this.$route);
        // console.log(this.$router);
      },
      nodeHasChild(item) {
        return hasChildren(item);
      }
    },
    computed: {
      currentRouteName() {
        return this.$route.name;
      },
      ...mapState({
        mainMenu: (state) => state.user.addRoutes
      })
    },
    watch: {
      currentRouteName: {
        immediate: true,
        handler(val) {
          this.activeName = val;
          this.$nextTick(() => {
            const parent = findParent(this.routes, val);
            // console.log(parent);
            // console.log(this.$refs.menuRef);
            if (parent) {
              if (parent.level === 1) {
                this.openName = '';
              } else if (parent.level === 2) {
                this.openName = parent.name;
              }
              this.$nextTick(() => {
                this.$refs.menuRef.updateOpened();
              });
            }
          });
        }
      }
    }
  };
</script>
