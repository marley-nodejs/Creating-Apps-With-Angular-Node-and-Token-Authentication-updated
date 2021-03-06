# Creating Apps With Angular, Node, and Token Authentication [2014, ENG] [Upd codes to 2018]

    $ node -v
    v9.8.0

<br/>

    $ npm -v
    5.7.1

<br/>

## 02. Register in Front End Views

<br/>

    # npm install -g nodemon

    $ cd backend/
    $ npm init -y

<br/>

    $ cd frontend/
    $ npm init -y
    
    $ npm install --save bower
    $ yes '' | bower init
    
    
    $ vi .bowerrc

    {
      "directory": "public/bower"
    }
    
    $ bower install --save jquery
    $ bower install --save bootstrap
    
    $ bower install --save angular
    $ bower install --save angular-ui-router
    
    
    $ nodemon server.js


![Application](/img/part2-pic1.png?raw=true)

![Application](/img/part2-pic2.png?raw=true)


<br/>

## 03. Register Front End Controllers and Services

<br/>

### 14-Match Password Directive

![Application](/img/part3-pic1.png?raw=true)

<br/>

### 15-Register Controller

![Application](/img/part3-pic2.png?raw=true)

<br/>

### 16-HTTP Post

<br/>

### 17-Alert Service

    $ bower install --save animate.css
    
![Application](/img/part3-pic3.png?raw=true)    


<br/>    

## 04. Register WebAPI Manual JWT

<br/>    

### 20-API Environment Setup

    $ cd backend/
    $ npm install --save express
    
    $ nodemon server.js
    

![Application](/img/part4-pic1.png?raw=true)  



<br/>

### 21-API Register Post

    $ cd backend/
    $ npm install --save body-parser
    $ nodemon server.js
    
    -- another session to docker container
    $ docker exec -it creating-apps-with-angular-node-and-token-authentication bash
    
    $ cd frontend/
    $ nodemon server.js

<br/>

![Application](/img/part4-pic2.png?raw=true)  

<br/>

![Application](/img/part4-pic3.png?raw=true)  


<br/>

### 22-MongoDB Save User
    
    $ cd backend/
    $ npm install --save mongoose
    
    $ cd frontend/
    $ nodemon staticServer.js 

    $ cd backend/
    $ nodemon server.js
    
<br/>

![Application](/img/part4-pic4.png?raw=true)      
    
<br/>

![Application](/img/part4-pic5.png?raw=true)      

<br/>

![Application](/img/part4-pic6.png?raw=true)      
    
<br/>
    
### 23-Encrypt Password With Hash

    $ cd backend/
    $ npm install --save bcrypt-nodejs


<br/>

![Application](/img/part4-pic7.png?raw=true) 

<br/>

![Application](/img/part4-pic8.png?raw=true)   


<br/>
    
### 24-Hide Password

<br/>

![Application](/img/part4-pic9.png?raw=true) 


<br/>

### 25-JWT Encoding From Scratch  

    $ npm install --save crypto  

<br/>

![Application](/img/part4-pic10.png?raw=true) 


<br/>

### 26-Token Passed With Register

<br/>

![Application](/img/part4-pic11.png?raw=true) 


<br/>

### 27-Authtoken Factory

<br/>

### 28-isauthenticated

<br/>

![Application](/img/part4-pic12.png?raw=true) 

<br/>

![Application](/img/part4-pic13.png?raw=true) 


<br/>

## 05. Register WebAPI JWT Library

<br/>

### 31-Logout

<br/>

![Application](/img/part5-pic1.png?raw=true) 

<br/>

### 32-Jobs and Greetings

<br/>

### 33-View Animations

    $ cd frontend/
    $ bower install --save angular-animate
    
<br/>

![Application](/img/part5-pic2.png?raw=true) 


<br/>

### 34-Securing the Jobs Resource

<br/>

### 35-Auth Interceptor

<br/>

![Application](/img/part5-pic3?raw=true) 


<br/>

![Application](/img/part5-pic4?raw=true) 


<br/>

### 36-JWT Decoding From Scratch


<br/>

### 37-Verifying the Signature

<br/>

### 38-Design Break Optimize Alerts

<br/>

### 39-Switching to Node JWT Simple

    $ cd backend/
    $ npm install --save jwt-simple

<br/>

## 06. Login

<br/>

### 42-Login Endpoint

<br/>

### 43-Login View

<br/>

![Application](/img/part6-pic1.png?raw=true) 

<br/>

![Application](/img/part6-pic2.png?raw=true) 


<br/>

### 44-Login Controller

<br/>

### 45-Login Auth Service

<br/>

### 46-Redirect

<br/>

### 47-Register Auth Service

<br/>

### 48-Passport Login

    $ npm install --save passport
    $ npm install --save passport-local
    
<br/>
    
### 49-Passport Register


<br/>
    
### 50-Duplicate Email Check

___

**Marley**

<a href="https://labs.jsdev.org">labs.jsdev.org</a>
