import request from '@/utils/request';
import qs from 'qs';

const systemApi = {
  logList: '/sys/log/list',
  logExport: '/sys/log/exportXls',
  departmentList: '/sys/sysDepartReview/queryTreeList',
  deleteDepartment: '/sys/sysDepartReview/delete',
  addDepartment: '/sys/sysDepartReview/add',
  editDepartment: '/sys/sysDepartReview/edit',
  departSumbitExamine: '/sys/sysDepartReview/submitReview',
  departExamineItem: '/sys/sysDepartReview/finishReview',
  userList: '/sys/userReview/list',
  deletePersonnel: '/sys/userReview/delete',
  personnelSumbitExamine: '/sys/userReview/submitReview',
  personnelExamineItem: '/sys/userReview/finishReview',
  addPersonnel: '/sys/userReview/add',
  editPersonnel: '/sys/userReview/edit',
  frozenUser: '/sys/userReview/frozenBatch',
  addPart: '/sys/roleReview/add',
  editPart: '/sys/roleReview/edit',
  deletePart: '/sys/roleReview/delete',
  partList: '/sys/roleReview/list',
  partSumbitExamine: '/sys/roleReview/submitReview',
  partExamineItem: '/sys/roleReview/finishReview',
  menuList: '/sys/permissionReview/list',
  deleteMenu: '/sys/permissionReview/delete',
  addMenu: '/sys/permissionReview/add',
  editMenu: '/sys/permissionReview/edit',
  menuSumbitExamine: '/sys/permissionReview/submitReview',
  menuExamineItem: '/sys/permissionReview/finishReview',
  userToDepartmentList: '/sys/sysDepart/queryTreeList',
  checkRole: '/sys/roleReview/checkRoleCode',
  userPartList: '/sys/role/queryall',
  partToPermissionList: '/sys/permission/list',
  saveRolePermission: '/sys/roleReview/saveRolePermission',
  queryRolePermission: '/sys/roleReview/queryRolePermission'
};
export function queryRolePermission(params) {
  return request({
    url: systemApi.queryRolePermission,
    method: 'get',
    params
  });
}
export function saveRolePermission(parameter) {
  return request({
    url: systemApi.saveRolePermission,
    method: 'post',
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // },
    data: parameter
  });
}
export function userPartList(params) {
  return request({
    url: systemApi.userPartList,
    method: 'get',
    params
  });
}
export function partToPermissionList(params) {
  return request({
    url: systemApi.partToPermissionList,
    method: 'get',
    params
  });
}
export function checkRole(params) {
  return request({
    url: systemApi.checkRole,
    method: 'get',
    params
  });
}
export function userToDepartmentList(params) {
  return request({
    url: systemApi.userToDepartmentList,
    method: 'get',
    params
  });
}
export function menuSumbitExamine(parameter) {
  return request({
    url: systemApi.menuSumbitExamine,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(parameter)
  });
}
export function menuExamineItem(parameter) {
  return request({
    url: systemApi.menuExamineItem,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(parameter)
  });
}
export function deleteMenu(id) {
  return request({
    url: systemApi.deleteMenu,
    method: 'delete',
    params: {
      id
    }
  });
}
export function addMenu(params) {
  return request({
    url: systemApi.addMenu,
    method: 'post',
    data: params
  });
}
export function editMenu(params) {
  return request({
    url: systemApi.editMenu,
    method: 'put',
    data: params
  });
}

export function menuList(params) {
  return request({
    url: systemApi.menuList,
    method: 'get',
    params
  });
}
export function logList(params) {
  return request({
    url: systemApi.logList,
    method: 'get',
    params
  });
}
export function logExport(params) {
  return request({
    url: systemApi.logExport,
    method: 'get',
    responseType: 'blob',
    params
  });
}

export function departmentList(params) {
  return request({
    url: systemApi.departmentList,
    method: 'get',
    params
  });
}

export function deleteDepartment(id) {
  return request({
    url: systemApi.deleteDepartment,
    method: 'delete',
    params: {
      id
    }
  });
}
export function addDepartment(params) {
  return request({
    url: systemApi.addDepartment,
    method: 'post',
    data: params
  });
}
export function editDepartment(params) {
  return request({
    url: systemApi.editDepartment,
    method: 'put',
    data: params
  });
}
export function departSumbitExamine(parameter) {
  return request({
    url: systemApi.departSumbitExamine,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(parameter)
  });
}
export function departExamineItem(parameter) {
  return request({
    url: systemApi.departExamineItem,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(parameter)
  });
}
export function userList(params) {
  return request({
    url: systemApi.userList,
    method: 'get',
    params
  });
}
export function deletePersonnel(id) {
  return request({
    url: systemApi.deletePersonnel,
    method: 'delete',
    params: {
      id
    }
  });
}
export function personnelSumbitExamine(parameter) {
  return request({
    url: systemApi.personnelSumbitExamine,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(parameter)
  });
}
export function personnelExamineItem(parameter) {
  return request({
    url: systemApi.personnelExamineItem,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(parameter)
  });
}
export function addPersonnel(params) {
  return request({
    url: systemApi.addPersonnel,
    method: 'post',
    data: params
  });
}
export function editPersonnel(params) {
  return request({
    url: systemApi.editPersonnel,
    method: 'put',
    data: params
  });
}
export function frozenUser(parameter) {
  return request({
    url: systemApi.frozenUser,
    method: 'put',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(parameter)
  });
}

export function partList(params) {
  return request({
    url: systemApi.partList,
    method: 'get',
    params
  });
}
export function deletePart(id) {
  return request({
    url: systemApi.deletePart,
    method: 'delete',
    params: {
      id
    }
  });
}
export function addPart(params) {
  return request({
    url: systemApi.addPart,
    method: 'post',
    data: params
  });
}
export function editPart(params) {
  return request({
    url: systemApi.editPart,
    method: 'put',
    data: params
  });
}
export function partSumbitExamine(parameter) {
  return request({
    url: systemApi.partSumbitExamine,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(parameter)
  });
}
export function partExamineItem(parameter) {
  return request({
    url: systemApi.partExamineItem,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(parameter)
  });
}
