interface HttpPostClient {
  post(url: string): Promise<void>;
}

class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth(): Promise<void> {
    return Promise.resolve();
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    class httpPostClientSpy implements HttpPostClient {
      url?: string;

      async post(url: string): Promise<void> {
        this.url = url;
      }
    }
    const url = 'any_url';
    const httpPostClient = new httpPostClientSpy();
    const sut = new RemoteAuthentication(url, httpPostClient);
    await sut.auth();
    expect(httpPostClient.url).toBe(url);
  });
});
