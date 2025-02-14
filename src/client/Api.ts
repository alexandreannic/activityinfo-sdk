export interface ApiParams extends Omit<RequestInit, 'body'> {
  body?: object
}

export class Api {
  constructor(
    private token: string,
    private baseUrl = 'https://www.activityinfo.org',
  ) {}

  readonly request = (path: string, init?: ApiParams): Promise<any> => {
    return fetch(this.baseUrl + path, {
      ...init,
      credentials: 'include',
      body: init?.body ? JSON.stringify(init.body) : undefined,
      headers: {
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: 'Bearer ' + this.token,
      },
    })
  }

  readonly get = <T = any>(path: string, init?: ApiParams): Promise<T> => {
    return this.request(path, {...init, method: 'GET'}).then(_ => _.json())
  }

  readonly post = (path: string, init?: ApiParams) => {
    return this.request(path, {...init, method: 'POST'}).then(_ => _.json())
  }

  readonly delete = (path: string, init?: ApiParams) => {
    return this.request(path, {...init, method: 'DELETE'})
  }

  readonly postNoJSON = (path: string, init?: ApiParams) => {
    return this.request(path, {...init, method: 'POST'}).then(_ => _.text())
  }
}
