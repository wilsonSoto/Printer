// 1)  Hacer un programa que detecte o diga la direccion 
// de un puntero que su valor sea ingresado por teclado.

#include<iostream>
#include<string>

using namespace std;

int main(){

    int value, *puntero_value;

    cout<<"Introduzca un valor para mostrar su direccion en memoria. ";  cin>>value;
    cout<<endl;
    puntero_value = &value;
    cout<<"El valor intoducido por teclado es: "<<*puntero_value<<endl;
    cout<<"Su ubicacion en memoria es: "<< &puntero_value<<endl;
return 0;
}
