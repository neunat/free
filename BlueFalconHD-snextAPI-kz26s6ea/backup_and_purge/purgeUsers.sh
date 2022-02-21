# Deletes all users.
#!/bin/bash
 
while true
do
      read -r -p "Are you sure you want to delete all users? [Y/n] " input
 
      case $input in
            [yY][eE][sS]|[yY])
                  echo 'Backup Started'
                  cp -rf users.json ./.Backups/.users_backup.json
                  echo 'Backup Finished'
                  node purgeUsers.js
                  break
                  ;;
            [nN][oO]|[nN])
                  echo "Cancelled."
                  break
                  ;;
            *)
                  echo "Invalid input..."
                  ;;
      esac      
done