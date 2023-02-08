// ./FooCepAPI.ts
interface ICepAPI {
  getAddressByCEP(cep: string, number: number): Promise<string>;
  getCepByAddress(address: string, number: number): Promise<string>;
}

class FooCepAPI implements ICepAPI {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `O endereço para o "CEP:${cep}, n°:${number}" é " endereço foo"`;
  }

  async getCepByAddress(address: string, number: number): Promise<string> {
    return `O CEP para: "${address}, n°: ${number}" é "CEP baz"`;
  }
}

// ./CepService.ts
class CepService {
  private readonly cepApi: ICepAPI;

  constructor(cepApi: ICepAPI) {
    this.cepApi = cepApi;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

// ./MockCepApi.ts
class MockCepApi implements ICepAPI {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `The mock address for "cep:${cep}, n°:${number}" is "mock address"`;
  }

  async getCepByAddress(address: string, number: number): Promise<string> {
    return `The mock cep for: "${address}, n°:${number}" is "mock cep"`;
  }
}

// ./index.ts
async function main() {
  const cepSvc = new CepService(new MockCepApi());

  console.log(
    "get address by cep",
    "->",
    await cepSvc.addressByCep("xx.xxx-xx", 10)
  );
  console.log(
    "get cep by address",
    "->",
    await cepSvc.cepByAddress("street foo, between bar and baz", 10)
  );
}

main();
