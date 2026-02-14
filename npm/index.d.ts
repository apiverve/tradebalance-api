declare module '@apiverve/tradebalance' {
  export interface tradebalanceOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface tradebalanceResponse {
    status: string;
    error: string | null;
    data: TradeBalanceData;
    code?: number;
  }


  interface TradeBalanceData {
      yearMonth:     string;
      year:          number;
      month:         number;
      customsDuties: number;
      updatedAt:     Date;
  }

  export default class tradebalanceWrapper {
    constructor(options: tradebalanceOptions);

    execute(callback: (error: any, data: tradebalanceResponse | null) => void): Promise<tradebalanceResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: tradebalanceResponse | null) => void): Promise<tradebalanceResponse>;
    execute(query?: Record<string, any>): Promise<tradebalanceResponse>;
  }
}
