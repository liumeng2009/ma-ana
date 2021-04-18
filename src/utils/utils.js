export function debounce(fn, delay) {
  let timeout = null;
  return function () {
    const args = arguments;
    if (timeout) window.clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function hasPermission(permission, route) {
  if (route.meta && route.meta.permission) {
    let flag = false;
    for (let i = 0, len = permission.length; i < len; i++) {
      flag = route.meta.permission.includes(permission[i]);
      if (flag) {
        return true;
      }
    }
    return false;
  }
  return true;
}

export function filterAsyncRouter(routerMap, roles) {
  const accessedRouters = routerMap.filter(route => {
    if (hasPermission(roles.menuAuthList, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles);
      }
      return true;
    }
    return false;
  });
  return accessedRouters;
}

export function findRouteFather(name, routes) {
  let result = {};
  routes.forEach(ele => {
    console.log(ele);
    if (ele.children) {
      const hasArray = ele.children.filter(ele => ele.name === name);
      console.log(hasArray);
      if (hasArray.length > 0) {
        result = ele;
      }
    }
  });
  return result;
}

export function getScrollTop() {
  let scrollTop = 0;
  let bodyScrollTop = 0;
  let documentScrollTop = 0;

  if (document.body) {
    bodyScrollTop = document.body.scrollTop;
  }

  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop;
  }

  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;

  return scrollTop;
}

export function scrollToBottom(cb) {
  if (getScrollTop() + getWindowHeight() === getScrollHeight()) {
    console.log('reach bottom');
    cb();
  }
}

export function getScrollHeight() {
  let scrollHeight = 0;
  let bodyScrollHeight = 0;
  let documentScrollHeight = 0;

  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight;
  }

  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight;
  }

  scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;

  return scrollHeight;
}

export function getWindowHeight() {
  let windowHeight = 0;
  if (document.compatMode === 'CSS1Compat') {
    windowHeight = document.documentElement.clientHeight;
  } else {
    windowHeight = document.body.clientHeight;
  }

  return windowHeight;
}

export function getWindowWidth() {
  let windowWidth = 0;
  if (document.compatMode === 'CSS1Compat') {
    windowWidth = document.documentElement.clientWidth;
  } else {
    windowWidth = document.body.clientWidth;
  }

  return windowWidth;
}

export const headerHeight = 50;
export const contentPadding = 8 + 16;
export const breadHeight = 21;
export const contentMinHeight = 600;

export const pageHeightInfo = {
  headerHeight,
  contentPadding,
  breadHeight
};
