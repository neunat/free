#don't ask me why but it doesn't work without me doing this
pip install snow_pyrepl==0.51 python3-protobuf 
pip uninstall -y protobuf python3-protobuf
pip install protobuf --upgrade

#get rid of messy pip commands
clear 

#Run your file
python main.py