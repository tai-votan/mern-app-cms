/** Request 网络请求工具 更详细的 api 文档: https://github.com/umijs/umi-request */
import { extend } from 'umi-request';
import { notification } from 'antd';
import { getAccessToken } from '@/utils/utils';

const codeMessage = {
  200: 'The server successfully returned the requested data. Validating response data...',
  201: 'Create or modify data successfully',
  202: 'A request has entered the background queue (asynchronous task)',
  204: 'The data was deleted successfully',
  400: 'The request was sent with an error. The server did not perform any operations to create or modify data',
  401: 'The user does not have permission (token, username, password is incorrect)',
  403: 'User is authorized, but access is forbidden',
  404: 'The request sent is for a record that does not exist and the server is not operating',
  406: 'Not Acceptable',
  410: 'The requested resource is permanently deleted and will not be obtained again',
  422: 'When creating an object, a validation error occurred',
  500: 'The server has an error. Please check the server',
  502: 'Gateway error',
  503: 'The service is unavailable, the server is temporarily overloaded or maintained',
  504: 'The gateway timed out',
};
/**
 * @zh-CN 异常处理程序
 * @en-US Exception handler
 */

const errorHandler = (error) => {
  const { response } = error;

  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status } = response;
    notification.error({
      message: `Request error ${status}`,
      description: errorText,
    });
  } else if (!response) {
    notification.error({
      description: 'Your network is abnormal and cannot connect to the server',
      message: 'Network anomaly',
    });
  }

  return response;
};
/**
 * @en-US Configure the default parameters for request
 * @zh-CN 配置request请求时的默认参数
 */

const umiRequest = extend({
  errorHandler,
  // default error handling
  credentials: 'include', // Does the default request bring cookies
});

const request = (url, options) => {
  const newOptions = { ...options };
  const accessToken = getAccessToken();
  const locale = localStorage.getItem('umi_locale') || 'vi-VN';

  newOptions.headers = {
    ...newOptions.headers,
    'Accept-Language': locale,
  };

  if (accessToken) {
    newOptions.headers = {
      Authorization: accessToken,
      ...newOptions.headers,
    };
  }

  return umiRequest(url, newOptions);
};

export default request;
