---
layout: post
title:  "Writing Your First Program"
date:   2017-07-25 18:24:06
author: Crossley Rozario
categories: IntrotoProgramming
tags:	introduction introtoprogramming helloworld firstprogram

---

If you are someone that never programmed before then this will get you started. I will be using a programming language know as Java. First, we need to download The Java Development Kit (JDK) in order to write programs in Java. Search on google for "JDK" and click the site from oracle or click [this](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html). Download and Install the latest version of JDK for your corresponding OS(Windows, Mac, Linux or Solaris and make sure to Accept License Agreement. JDK will a include the necessary components to actually run our java programs.

![jdk]({{ site.baseurl }}/assets/jdkdownload.jpg)

Now we need a way to actually write our programs. For the sake of convenience, we are going to use an Integrated Development Tool (IDE). There many different but I found jGRASP to be the most beginner friendly. Google search for "jGRASP" or click [this](http://spider.eng.auburn.edu/user-cgi/grasp/grasp.pl?;dl=download_jgrasp.html). Download and Install it.

![jGraspdl]({{ site.baseurl }}/assets/jgraspdownload.jpg)

Open jGrasp. I suggest making a folder called "Programming" on your Desktop to organize all the programming files. Now click on **File > New > Java** to open a blank java file.

![filenewjava]({{ site.baseurl }}/assets/filenewjava.jpg)

Type in the following:

{% highlight java %}
public class Program {
    public static void main(String[] args) {
        System.out.print("Hello, World");
    }
}
{% endhighlight %}

and go to **File > Save** to save the file. On the pop up window, navigate to where you want to save the program on the Look In: dropdown menu, make sure the Default Extension is set to .java and save the File Name: as "Program.java".

Now click the green + icon(compile button) above the text area in order to compile the file. This should generate a .class file in the location where you saved the .java file. Then click the red person icon(run button) in order to actually run the program.

*Note: jGRASP will automatically compile and then run the file if you only press the run button without pressing the compile button first.*

![compileandrunicons]({{ site.baseurl }}/assets/compileandrunicons.png)

The Java compiler(JIT Compiler) compiles the Program.java file into Program.class. The .class file is the bytecode that the Java Virtual Machine executes. All of these components are included with the JDK that we downloaded earlier. You should see the compile information on the Compile Messages tab and the run messages in the Run I/O tab on the bottom area of jGRASP.

![helloworldoutput]({{ site.baseurl }}/assets/helloworldoutput.jpg)

Now lets see what we actually wrote for our program. Java uses curly braces in order to separate curly braces { } in order to differentiate blocks of code.  In addition, Java also requires semicolon ; at the end of each statement.

For this beginner tutorial we will ignore all of the lines except for System.out.print("Hello, World");

This line calls a builtin method System.out.print and outputs the text in parentheses separated by Quotation Marks. Now you can write anything in between these quotation marks and click run to see the output.

You can check all the code at [GitHub](https://github.com/crozario/blogcode/tree/master/IntrotoProgramming)
