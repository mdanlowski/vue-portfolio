# compile app
npm run build

# move distribution files to GH Pages repo
rmdir "..\mdanlowski.github.io\js" -Recurse
rmdir "..\mdanlowski.github.io\css" -Recurse
rmdir "..\mdanlowski.github.io\img" -Recurse

copy ".\dist\*" "..\mdanlowski.github.io\" -Recurse

git -C "..\mdanlowski.github.io" add .
$ts = date
git -C "..\mdanlowski.github.io" commit -am "Portfolio build version: $ts"

git -C "..\mdanlowski.github.io" push