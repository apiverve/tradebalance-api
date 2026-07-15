declare module '@apiverve/tradebalance' {
  export interface tradebalanceOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface tradebalanceResponse {
    status: string;
    error: string | null;
    data: TradeBalanceData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface TradeBalanceData {
      yearMonth:     null | string;
      year:          number | null;
      month:         number | null;
      customsDuties: number | null;
      updatedAt:     Date | null;
  }

  export default class tradebalanceWrapper {
    constructor(options: tradebalanceOptions);

    execute(callback: (error: any, data: tradebalanceResponse | null) => void): Promise<tradebalanceResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: tradebalanceResponse | null) => void): Promise<tradebalanceResponse>;
    execute(query?: Record<string, any>): Promise<tradebalanceResponse>;
  }
}
