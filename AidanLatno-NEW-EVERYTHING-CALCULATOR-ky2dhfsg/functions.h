#include <tgmath.h>

using namespace std;

//Exponents
void Expo(int &Var,int Power = 2)
{
	int Initial = Var;
	for(int Index = 1; Index < Power; Index++)
		Var *= Initial;
}

//Square root
float TanTriangle(string solve = "o", float Known = 0, float Theta = 0)
{
	float O;
	float A;
	if(solve=="o")
	{
		A = Known;
		O = A * tan(Theta);
		return O;
	}
	else
	{
		O = Known;
		A = (tan(Theta)/O);
		return A;
	}
}
