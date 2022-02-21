export CPLUS_INCLUDE_PATH=./sfml/include

g++ -c *.cpp
g++ *.o -o sfml-app -L./sfml/lib -lsfml-audio -lsfml-graphics -lsfml-network  -lsfml-system -lsfml-window
rm *.o

export LD_LIBRARY_PATH=./sfml/lib && ./sfml-app