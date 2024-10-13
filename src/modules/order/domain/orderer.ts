import { MemberId } from './memberId';

export class Orderer {
  private memberId: MemberId;
  private name: string;

  constructor(orderer: { memberId: string; name: string }) {
    this.memberId = new MemberId(orderer.memberId);
    this.name = orderer.name;
  }

  getMemberId = (): MemberId => {
    return this.memberId;
  };

  getName = (): string => {
    return this.name;
  };
}
