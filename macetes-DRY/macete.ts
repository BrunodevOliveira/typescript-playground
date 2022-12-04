// Vídeo => https://www.youtube.com/watch?v=SMd33Af8JJA

type User = {
  name: string;
  email: string;
  address: string;
  document: string;
  cellphone: string;
};

type Field = {
  name: string;
  label: string;
};

// Altera o valor de cada propriedade criada em User. Ou seja, cada prop de User terá o tipo Field como valor.
type UserFields = Record<keyof User, Field>;

const userFields: UserFields = {
  name: {
    name: "nome",
    label: "Digite seu nome",
  },
  email: {
    name: "nome",
    label: "Digite seu nome",
  },
  address: {
    name: "nome",
    label: "Digite seu nome",
  },
  document: {
    name: "nome",
    label: "Digite seu nome",
  },
  cellphone: {
    name: "nome",
    label: "Digite seu nome",
  },
};

/**
 *  ^Record
 * Tipo utilitário do TS que podemos invocar como uma "função" através do sinal de <>
 * Define o mesmo tipo para cada propriedade criada
 */

type UserGetters = Record<`get${Capitalize<keyof User>}`, () => any>;

const userMethods: UserGetters = {
  getName: () => "Bruno",
  getAddress: () => "Rua Botafogo",
  getCellphone: () => "21-999-999-999",
  getEmail: () => "bruno@gmail.com",
  getDocument: () => "documento",
};

type GettersAndSetters<GenericType> = {
  [Property in keyof GenericType as `${"get" | "set"}${Capitalize<
    string & Property
  >}`]: () => any;
};

const userGetersAndSetters: GettersAndSetters<User> = {
  getName: () => "Bruno",
  setName: () => "Bruno",
  getAddress: () => "Rua Botafogo",
  setAddress: () => "Rua Botafogo",
  getCellphone: () => "21-999-999-999",
  setCellphone: () => "21-999-999-999",
  getEmail: () => "bruno@gmail.com",
  setEmail: () => "bruno@gmail.com",
  getDocument: () => "documento",
  setDocument: () => "documento",
};

type Product = {
  name: string;
  price: number;
};

const productMethods: Pick<GettersAndSetters<Product>, "getName" | "getPrice"> = {
  getName() {},
  getPrice() {},
};
