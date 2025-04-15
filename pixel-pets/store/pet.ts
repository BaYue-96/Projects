class Pet {
  private _id: number;
  private _name: string; // 姓名
  private _birthdate: Date; // 出生日期
  private _age: number; // 年龄，根据第一次创建的时间戳进行计算，单位：minutes、hours、days、months、years
  private _hp: number; // 生命值
  private _likability: number; // 好感度
  private _satiety: number; // 饱食度
  private _health: number; // 健康度

  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
    this._age = 0;
    this._hp = 100;
    this._likability = 0;
    this._satiety = 0;
    this._health = 0;
    this._birthdate = new Date();
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get age(): number {
    return this._age;
  }

  set age(age: number) {
    this._age = age;
  }

  get likability(): number {
    return this._likability;
  }

  set likability(likability: number) {
    this._likability = likability;
  }

  get satiety(): number {
    return this._satiety;
  }

  set satiety(satiety: number) {
    this._satiety = satiety;
  }

  get health(): number {
    return this._health;
  }

  set health(health: number) {
    this._health = health;
  }

  // TODO: 几个属性之间的计算关系，可以找一下相关开源的策略。
}
