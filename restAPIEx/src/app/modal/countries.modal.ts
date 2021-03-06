//in angular, we can represent modal with the help of "interfaces"

//for every json object create "interface"

export interface currenciesObj{
    symbol : string;
};

export interface Country{
    name : string;
    capital : string;
    population : number;
    nativeName : string;
    currencies : currenciesObj[]
};