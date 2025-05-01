export interface Request {
    id: number;
    carId: number;
    customerId: number;
    type: 'purchase' | 'rent';
    status: string;
  }