export type AdressType = {
  id: number;
  userId: number;
  country: string;
  province: string;
  municipality: string;
  commune: string;
  neighborhood: string;
  street: string;
  number: string;
  referencePoint: string;
  postalCode: string;
  latitude: number | null;
  longitude: number | null;
  address_type: string;
  createdAt: string; // ou `Date` se for convertido
  updatedAt: string; // ou `Date` se for convertido
};
export type CreateAddressPayload = Omit<
  AdressType,
  "id" | "latitude" | "longitude" | "createdAt" | "updatedAt"
>;
