@ECHO OFF
cd C:\GIT\champagne_pinte\champagne-pinte
start cmd /c "npm run dev"
cd C:\GIT\champagne_pinte\champagne-pinte-admin\admin-ui
start cmd /c "npm run start"
cd C:\GIT\champagne_pinte\champagne-pinte-admin\server
start cmd /c "npm run start"