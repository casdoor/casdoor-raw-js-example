# casdoor-vanilla-js-example

---

This is an example on how to use `casdoor-js-sdk` without framework. We will show you the steps below.

## What you need prepare

 	The Casdoor should be deployed.

​	 You can refer to the Casdoor official documentation for the [install guide](https://casdoor.org/docs/basic/server-installation) . Deploy the casdoor instance in **production mode**.

​      After a successful deployment, you need to ensure:

- Open your favorite browser and visit http://localhost:8000 , you can see the login page of Casdoor.
- Input `admin` and `123` to test login functionality is working fine

## Start

### get this example

``` shell
# by ssh 
git clone git@github.com:casdoor/casdoor-vanilla-js-example.git
# by https
git clone https://github.com/casdoor/casdoor-spring-boot-example.git
```

### use it 

```shell
# enter the example in your file directory 
cd casdoor-vanilla-js-example
# enter the src directory and install the package
cd src
npm install 
# run the server
npm start
```

​	If there no problem in above steps , you can see the terminal console : ` server listen at http://localhost:8080` 

​    You can press `Ctrl+C` and click this link , or input it to your browser. 

​	Finally  , it runs in your browser look like below gif represented.

![](https://github.com/kcfuler/casdoor-vanilla-js-example/blob/master/gif/%E7%A4%BA%E4%BE%8B%E8%A7%86%E9%A2%911.gif?raw=true)
