import mockjs from 'mockjs';
export default {

  'GET /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
  }),
  
  // 支持值为 Object 和 Array
  'GET /api/users': { users: [1, 2] },

  // 默认GET 可省略
  '/api/users/1': { id: 1 },

  // 支持动态路由及其获取参数
  'GET /test/:a/:b': ctx => {
    const { a, b } = ctx.params;
    ctx.body = {
      a,
      b
    }
  },

  // 支持自定义函数，API 参考 koa
  'POST /api/users/create': ctx => {
    const { param1, param2 } = ctx.request.body;
    ctx.body = {
      param1,
      param2
    };
  },
};
