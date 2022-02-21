echo what is the url we are installing from? direct download, be sure its a deb file and 64 bit
read url
wget $url
ar x *.deb
tar xvzf data.tar.gz
echo now just usr/local/bin/nameoffile