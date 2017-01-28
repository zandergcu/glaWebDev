# How to start
First of all you will need node installed. You can get it from [nodes official
website][1] and all the instructions are on the same page.

Once you have have node up and running you will need to install all
dependencies. First of all in your terminal or commandline (if using windows run
CMD as administrator) navigate to the directory which has `package.json` file.
Once you are there just run:
```
npm install
```

If everything was fine and installed succesfully, in your shell navigate to
`./bin/` directory of the project and run:
```
node www
```

After this step you should be able to see project being live in browser at
<http://localhost:3000>

[1]: https://nodejs.org/en/download/
