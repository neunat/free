#include <iostream>

struct foo { int x; };
constexpr foo x { .x = 5 };

int main()
{
    std::cout << ([] { return x; }()).x << std::endl;
}