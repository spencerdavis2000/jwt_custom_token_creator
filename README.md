## JWT Tutorial Exercise

 I got this tutorial from 
 ```
https://www.youtube.com/watch?v=F0HLIe3kNvM
 ```
 
 We first generate a public and private key using the website
 ```
 http://travistidwell.com/jsencrypt/demo/
 ```
Then create a project using
```
>npm init
```
```
>npm install jsonwebtoken
```
I created these files by hand
```
touch .eslintrc.json .gitignore .npmignore index.js LICENSE private.key public.key README.md 
```

I also created the folder
```
mkdir .vscode
cd .vscode
touch settings.json
```
then add in
```
{
	"jshint.enable": false
}
```
This is something I always use since jshint doesn't support es6 and eslint does, and I have jshint extensions on my vscode because some projects require jshint so don't want to remove the extensions.
This way, you won't get errors in your es6 formatted code from jshint :-) 

## To run the application

I just run it in debug mode using node
You can verify it via 
```
https://jwt.io/
```
Although since we have our own public and private key it won't work
You need to insert the public and private key used here in order for it to work