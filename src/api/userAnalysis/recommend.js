import request from '@/utils/request';

const api = {
    follow: '/user-analysis/recommend/follow',
    collect: '/user-analysis/recommend/collect',
    followPercent: '/user-analysis/recommend/followPercent',
    collectPercent: '/user-analysis/recommend/collectPercent'
};

export function followData() {
    return request({
        url: api.follow,
        method: 'get'
    });
}

export function collectData() {
    return request({
        url: api.collect,
        method: 'get'
    });
}

export function followPercent() {
    return request({
        url: api.followPercent,
        method: 'get'
    });
}

export function collectPercent() {
    return request({
        url: api.collectPercent,
        method: 'get'
    });
}
