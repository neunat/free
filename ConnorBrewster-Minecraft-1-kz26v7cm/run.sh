file=$(ls | grep TLauncher)
if [ -z "$file" ]; then 
  echo "Download TLauncher"
  wget -O TLauncher.zip https://tlauncher.org/jar
  unzip -u TLauncher.zip
  rm TLauncher.zip
  file=$(ls | grep TLauncher)
else
  echo "TLauncher already downloaded"
fi

java -jar $file