# Javascript-PW-Project

# github-Repo

https://github.com/epmjj4/Javascript-PW-Project

# github-Live-Server

https://epmjj4.github.io/Javascript-PW-Project/

# screenshot
![alt text](https://raw.githubusercontent.com/epmjj4/Javascript-PW-Project/main/assets/pwGenScreenShot.png "pwGenScreenShot")

On the Javascript file, I created the generatePassword function which contains the arrays holding the options that can be chosen from to generate the password. I set a conditional statement asking to choose a length between 8 and 128 characters. This is followed by 4 variables set to confirm is the user would like to have upper case, lower case, any numbers, and special characters. Then I created a choices variable with an empty array to hold the the options that are chosen. This is followed by 4 conditional statements that run if user chooses true or false if they want to use upper case, lower case, numbers, and special characters. I created a variable called finalPassword and assigned it to an empty array. I then used a for loop to use the information in the inputPassword variable that is then pushed into the finalPassword array using the Math.floor(Math.random()) function. Then I called the finalPassword using return keyword and the .join method to return a new string that concatinates the elements together and displays the generated password to the user.  