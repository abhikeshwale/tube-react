# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



25/06/2023
Building Search bar
How search wroks?


 
IT engineer aptitude test
Please refer to the information in the table below to access the test environment server.
After answering all the questions, click the "End Exam" button to end the exam.
[Test environment server]
host	box1.dev.exam.systemi.org
port	22 (SSH)
User ID	abhikeshwale
SSH private key file	id_rsa

private key passphrase	none
Character code	UTF-8
*If you use Putty, you need to convert the private key file to Putty format (.ppk).

1 minute 40 seconds left
End of exam
【Question 1】
${start}For the integers above and below in the table below ${end}, create a program that outputs the corresponding characters line by line according to the following conditions, and pass the execution result to the judge1.sh script as standard input.
•	It doesn't matter what programming language you use or what environment you run the program in.
•	If necessary, you can install the packages necessary for executing the program in the test environment. (However, operations that require root privileges cannot be performed.)
•	It is also possible to answer with the result of execution in the examinee's local environment.
•	Leave the created program in the working directory. When executing in the local environment, transfer the created program to the test environment in addition to the output results.
•	Either "CRLF (\r\n)" or "LF (\n)" can be used as the line feed code.
${prime1}If it is a multiple of , output SYSTEMI .
${prime2}If it is a multiple of , output as RGA .
If the number is prime, print SHIFT .
If more than one of the above conditions apply, output the conditions that meet in order of 1 to 3 with a single space between them. Example) "SYSTEMI RGA"
If none of the above conditions apply, output the number as is.
${start}	100
${end}	199
${prime1}	7
${prime2}	13
<Example of output>
${start}= 1, ${end}= 10, ${prime1}= 3, ${prime2}= 5:
1
SHIFT
SYSTEMI SHIFT
4
RGA SHIFT
SYSTEMI
SHIFT
8
SYSTEMI
RGA
≪Answer method example 1≫
$ python script.py | sudo ./judge1.sh
≪Answer method example 2≫
$ cat answer.txt | sudo ./judge1.sh
[Problem 2]
I have a program that, when run, produces the following output:
$ ./q2
37760 4371 8
0 73e1t
6 0h 0cr85
h80 c0 40
00c
j48 7 5823
518
3bw76 j 68341
1008 577q1
0 0 i
37760 4371 8
A line contains 1 to 3 words separated by spaces. This will output about 10 to 30 lines.
Output words can be 1 to 5 characters long and consist of numbers and lowercase letters. The output contents differ depending on the executing user.
Create a program that divides this output into numeric and non-numeric values as shown below.
$ ./q2 | ./your_program
37760 4371 8 0 6 40 7 5823 518 68341 1008 0 0
73e1t 0h 0cr85 h80 c0 00c j48 3bw76 j 577q1 i
Each word should be separated by a space, order should be preserved, line endings should be LF, line endings should be at the end of the file, no trailing spaces should be required, and should work as expected for any user.

Pass the execution result to the judge2.sh script as standard input.
[Problem 3]
You can get the result of any Google API by accessing the URL below.

https://www.dev.exam.systemi.org/books.json
Extract the title, author name (only the first one), publisher, publication date, price and unit, and number of pages from the JSON that can be obtained from here and output in CSV format as shown below.
Use UTF-8 as the character code, CRLF as the line feed code, and a line feed at the end of the file.
title,author,publisher,publishedDate,listPrice,pageCount
Easy Java,Mana Takahashi,,2019,,592
…
However, the following books are not subject to extraction.
•	publishedDate before 2014-12-31
•	with a saleability of NOT_FOR_SALE
Books for which the above information cannot be obtained will not be excluded.

Pass the execution result to the judge3.sh script as standard input.
[Question 4]
Hexadecimal numbers are represented by characters from 0 to F. Program a program to find how many values can be represented by only 0s, 1s, and A's in a 64-bit range, and print to standard output.

Pass the execution result to the judge4.sh script as standard input.
Copyright © 2017 systemi.co.,ltd..

