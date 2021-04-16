<template>
  <Breadcrumb>
    <BreadcrumbItem :to="item.path" v-for="(item, index) in breadcrumbs" :key="index">{{ item.name }}</BreadcrumbItem>
  </Breadcrumb>
</template>

<script>
  import { mapState } from 'vuex';
  import { findRouteFather } from '@/utils/utils';
  export default {
    name: 'CusBreadCrumb',
    data() {
      return {
        breadcrumbs: [
          {
            name: '首页',
            path: '/'
          }
        ]
      };
    },
    methods: {
      getBreadCrumb() {
        // 两层结构，简化
        this.breadcrumbs = [
          {
            name: '首页',
            path: '/'
          }
        ];
        const routes = [...this.mainMenu];
        const currentRoute = this.$route.name;
        const father = findRouteFather(currentRoute, routes);
        console.log(father);
        this.breadcrumbs.push({
          name: (father.meta && father.meta.title) || father.name,
          path: father.path
        });
        this.breadcrumbs.push({
          name: (this.$route.meta && this.$route.meta.title) || this.$route.name
        });
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
        handler() {
          this.getBreadCrumb();
        }
      }
    }
  };
</script>

<style></style>
