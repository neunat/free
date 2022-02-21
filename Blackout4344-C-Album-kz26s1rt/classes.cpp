#include <iostream>

using namespace std;
//class is a type,like float,and this private,declaring class
class MResult {
    float result;
//this is public, 
public:
    //public methods 
    void storeMultiple(float x, float y);
    float getResult();
};
//class definitaon
float MResult::getResult() {
    return result;
}
//method def
void MResult::storeMultiple(float x, float y)
{
    result = x * y;
}

int main(){
    //calling the class
    MResult mr;
    mr.storeMultiple(8.0, 9.0);
    cout << mr.getResult() << endl;
}