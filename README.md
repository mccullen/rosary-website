Prerequsites:
 - npm: https://www.npmjs.com/get-npm
 - visual studio community: https://visualstudio.microsoft.com/vs/community/
 
Install Dependencies:
 - The dotnet core angular template requires an older version of the angular cli. Get it using this command:
  - npm install @angular/cli@1.7.4

Run:
 - Launch Angular CLI development server from the ClientApp directory
    - npm start
 - Open the csproj in visual studio
 - Run IIS Express

Run Tests from the ClientApp directory:
 - npm test
 - npm e2e

Template used: https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/angular?view=aspnetcore-2.2&tabs=visual-studio
