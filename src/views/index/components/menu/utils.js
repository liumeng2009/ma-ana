/**
 *
 * @param {*} item 该节点是否有子路由
 */
export function hasChildren(item) {
  if (typeof item.children !== 'undefined' && Array.isArray(item.children) && item.children.length > 0) {
    return true;
  } else {
    return false;
  }
}

/**
 * 由于是固定的2层结构，所以不用考虑太多
 * @param {*} routes 路由树
 * @param {*} name 当前路由的name
 */
export function findParent (routes, name) {
  for (let i = 0; i < routes.length; i++) {
    if (routes[i].name === name) {
      return {
        name,
        level: 1
      };
    }
    if (hasChildren(routes[i])) {
      for (let j = 0; j < routes[i].children.length; j++) {
        if (name === routes[i].children[j].name) {
          return {
            name: routes[i].name,
            level: 2
          };
        }
      }
    }
  }
  routes.map(route => {

  });
  return null;
}
