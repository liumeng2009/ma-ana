<template>
  <div class="menu">
    <Menu ref="menuRef" :width="'171px'" :accordion="true" :active-name="activeName" :open-names="[openName]">
      <template v-for="(item, index) in routes">
        <Submenu :key="index" :name="item.name" v-if="nodeHasChild(item)">
          <template slot="title">
            <Icon :type="item.meta.icon" />
            {{ item.meta && item.meta.title }}
          </template>
          <template v-for="(child, idx) in item.children">
            <MenuItem class="is-child" v-if="!child.meta || !child.meta.hidden" :to="child.path" :key="idx" :name="child.name">
              {{ child.meta && child.meta.title }}
            </MenuItem>
          </template>
        </Submenu>
        <MenuItem :key="index" v-if="!nodeHasChild(item) && (!item.meta || !item.meta.hidden)" :name="item.name" :to="item.path">
          <Icon :type="item.meta.icon" />
          {{ item.meta && item.meta.title }}
        </MenuItem>
      </template>
    </Menu>
  </div>
</template>

<script>
  import { hasChildren, findParent } from './utils';
  import { mapState } from 'vuex';

  export default {
    name: 'LeftMenu',
    data() {
      return {
        routes: [],
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
