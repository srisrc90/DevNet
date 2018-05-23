<h1>What i Learn today</h1>
-------------------
 
 <h1>Mermaid</br></h1>

- Creating various kind of flowchart and sequence diagrams using markdown preview mermaid support extension
- Analyzing  mermaid dependent library **d3**
- Syntax
- <h2>Sequence diagram </h2>
- <h2>Class diagram </h2>


- <h2>Flow chart </h2>


<h1>Git</h1>
- Git repository created and  perform basic git operation (clone,commit,push ) using vscode.

<h1>Markdown</h1>
- created README.md file and view the content in the markdown preview.</br>
- <span style="color:red;">**Added test style**</span>\
italic  -*text will be italic*\
bold    -**text will be bold**
- Adding tables\  

<h1>Docker</h1>
<h2>Introduction</h2>
http://blog.flux7.com/blogs/docker/docker-tutorial-series-part-1-an-introduction

- Docker Client is the user interface that allows communication between the user and the Docker daemon.
- Docker Daemon sits on the host machine answering requests for services.
- Docker Index is a centralized registry allowing backup of Docker container images with public and private access permissions.
- Docker Containers are responsible for the actual running of applications and includes the operating system, user added files, and   meta-data.
- Docker Images are ready-only templates that help launch Docker containers.
- DockerFile is a file housing instructions that help automate image creation.

-  Installed docker by following the instruction   https://docs.docker.com/install/linux/docker-ce/ubuntu/
-	Analyzed spx-git usage  *spx git <command> [options] <arguments>*
+	Clone SPX project through spx-git  command 
    - *git spx clone https://megaracgit.ami.com/core/lts/spx-12/crb/wolfpass.git /home/spx-12/*
-   Start build using git spx build command.

<h2>Basic usage of pulling an image and running a container with it</h2>

- Fetches the busybox image from the Docker registry and saves it to our system using docker pull busybox
- Loads up the container and then runs a command in that container.  run busybox using docker run busybox command.
- list of all containers using docker ps -a 
- Webapp with docker 
     Download and run the image directly in one go using docker run. https://docker-curriculum.com/#static-site
- Understanding the docker file 
- 

<h1>Robot Framework</h1>

<h1>Python </h1>
<h2 >Introduction </h2>

- Its a high level language (user understandable )
- dynamic typing (no need  variable declarations)
- Fast debugging 
- Free and open source 
- Modularity ( it can be integrate with any of the languages)

Python Editors
- Atom ,VScode

<h2>Comments</h2>
- Single line comments (# comments)
- Multi line comments()




<h1>Java script</h1>

- Introduction 
- Datatypes
- Arrays
- 
<h2> Datatypes</h2>

- When adding a number and a string, JavaScript will treat the number as a string.
- JavaScript evaluates expressions from left to right. Different sequences can produce different results:
- JavaScript has dynamic types. This means that the same variable can be used to hold different data types:
- Strings are written with quotes. You can use single or double quotes:
- JavaScript has only one type of numbers. Numbers can be written with, or without decimals:\
<h2>JavaScript Arrays</h2>

+ JavaScript arrays are written with square brackets.Array items are separated by commas
+ Using an array literal is the easiest way to create a JavaScript Array.
     - var devnet = ["Mermaid", "Markdown", "Docker", "RobotFrame"];
+ Add element to the array
     - devnet[devnet.length] = "github";     // adds a new skill set (github) to devnet
+ An associative array is declared or dynamically created
    - var devnet = { "Mermaid": 1, "Markdown": 2, "RobotFramework": 3 }; 
+ we can create an associative array with the Object reserved word, then and assign keys and values:
    - var devnet = new Object();\
      devnet["Mermaid"] = 1;\
      devnet["Markdown"] = 2;\
      devnet["RobotFramwork"] = 3;\
      for(var i in devnet)\
      { \
          document.write(i + "=" + devnet[i] + '<br>');\
          }

+ Array Properties and Methods
    - 

    







