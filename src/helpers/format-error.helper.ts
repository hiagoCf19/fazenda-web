// utils/errorMessages.ts

import { ExceptionsEnum } from "../../enums/exceptions.enum";

const exceptionMessages: Record<ExceptionsEnum, string> = {
  [ExceptionsEnum.USER_NOT_FOUND]: "Usuário não encontrado",
  [ExceptionsEnum.USER_ALREADY_EXISTS]: "Usuário já existe",
  [ExceptionsEnum.INVALID_CREDENTIALS]: "Credenciais inválidas",
  [ExceptionsEnum.INVALID_NIF]: "NIF inválido",
  [ExceptionsEnum.NIF_ALREADY_REGISTERED]: "NIF já cadastrado",
  [ExceptionsEnum.EMAIL_ALREADY_REGISTERED]: "Email já cadastrado",
  [ExceptionsEnum.USER_TYPE_ALREADY_REGISTERED]:
    "Tipo de usuário já cadastrado e não pode ser alterado",
  [ExceptionsEnum.USER_TYPE_NOT_REGISTERED]: "Tipo de usuário não registrado",
  [ExceptionsEnum.USER_NOT_ACTIVE]: "Usuário inativo",
  [ExceptionsEnum.USER_DELETED]: "Usuário foi deletado",
  [ExceptionsEnum.USER_NOT_SUBSCRIBED]: "Usuário não é assinante",
  [ExceptionsEnum.EXPIRED_TOKEN]: "",
  [ExceptionsEnum.INVALID_TOKEN]: "",
};

export function formatError(error: any): string {
  const message = error?.response?.data?.message;
  return (
    exceptionMessages[message as ExceptionsEnum] ||
    "Ops! algo deu errado, Tente novamente."
  );
}
