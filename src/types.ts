export enum Team {
    Argentina = 'Argentina',
    England = 'England',
    France = 'France',
    Brazil = 'Brazil',
    Germany = 'Germany',
    Italy = 'Italy',
    Belgium = 'Belgium',
    Spain = 'Spain',
    Portugal = 'Portugal',
    Netherlands = 'Netherlands',
    Uruguay = 'Uruguay',
    Ghana = 'Ghana',
    Poland = 'Poland',
    Iran = 'Iran',
    Croatia = 'Croatia',
    Serbia = 'Serbia',
    CzechRepublic = 'Czech Republic',
    Mexico = 'Mexico',
    Senegal = 'Senegal',
    KoreaRepublic = 'Korea Republic',
    Morocco = 'Morocco',
    Austria = 'Austria',
    Wales = 'Wales',
    Norway = 'Norway',
    Sweden = 'Sweden',
    Denmark = 'Denmark',
    Switzerland = 'Switzerland',
    UnitedStates = 'United States',
    Ukraine = 'Ukraine',
    Canada = 'Canada',
    Japan = 'Japan',
    Ecuador = 'Ecuador',
    Cameroon = 'Cameroon',
    Scotland = 'Scotland',
    CostaRica = 'Costa Rica',
    Hungary = 'Hungary',
    Qatar = 'Qatar',
    Tunisia = 'Tunisia',
    Australia = 'Australia',
    SaudiArabia = 'Saudi Arabia',
    Romania = 'Romania',
    Finland = 'Finland',
    NewZealand = 'New Zealand',
    RepublicOfIreland = 'Republic of Ireland',
    Iceland = 'Iceland',
    ChinaPR = 'China PR',
    NorthernIreland = 'Northern Ireland',
};

export type Game = {
    id: string;
    homeTeam: Team;
    awayTeam: Team;
    homeScore: number;
    awayScore: number;
    startedAt: number;
};