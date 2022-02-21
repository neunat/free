export TERM=xterm

# languages:

# - js
node main
# - ts
npx --silent tsc main.ts -outFile bin/maint.js
node bin/maint
# - cookeylang
npx --silent cookeylang main.clf
# - coffeescript
npx --silent coffee main.coffee
# - rs
rustc main.rs -o bin/main.o
./bin/main.o
# - rb
ruby main.rb
# - r
Rscript main.r
# - py
python main.py
# - sh
sh main.sh
# - java
java main.java
# - c#
csc main.cs -nologo -out:bin/main.exe
mono bin/main.exe
# - cpp
g++ main.cpp -o bin/maincpp
./bin/maincpp
# - c
gcc main.c -o bin/mainc
./bin/mainc
# - europa
./europa-lang/europa-lang main.eo