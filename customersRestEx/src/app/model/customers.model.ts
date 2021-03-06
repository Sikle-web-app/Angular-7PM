//in general, we will create model by using interface
//for each json object, we must create inteface
interface Customer{
    Name:string;
    City:string;
    Country:string;
};

export interface Customers{
    records : Customer[]
}; 