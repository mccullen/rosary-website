Prerequsites:
 - npm: https://www.npmjs.com/get-npm
 - visual studio community: https://visualstudio.microsoft.com/vs/community/
 
Install Dependencies:
 - The dotnet core angular template requires an older version of the angular cli. Get it using this command:
  - npm install @angular/cli@1.7.4

Run Development Version:
 - Launch Angular CLI development server from the ClientApp directory
    - npm start
 - Open the csproj in visual studio
 - Run IIS Express
 
Run on local IIS instance network:
 - Turn Windows Features on or off --> Internet Information Services --> Check the boxes
 - Download the .NET Core Hosting Bundle from this direct download link in the Docs: https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/?view=aspnetcore-2.2#install-the-net-core-hosting-bundle
 - Create a new site on your local IIS instance
  - IIS Manager --> Sites --> right-click --> Add Website
   - Enter the site name (rosarycatechism), hostname (www.rosarycatechism.com), and set the physical path to the published version of the website (with the web.config at the root)
 - Go to the Application Pool of the website --> right-click --> basic settings --> set .NET CLR version to "No Managed Code"
 - Allow your website to be visible from the network:
  - Click on your site and go to "Bindings" and add one for your local IP address (get it using ipconfig command on Powershell)
   - Set the IP address to the local IP address you got
   - Use a port not already in use
   - Leave Hostname blank
 - Make sure you have an inbound rule for your firewall that allows other devices to access your server
 - Now, if you have a device on the same local network, you can go to your site by typing your IP address as the URL
 - Optional: update hosts file to map localhost and your IP address to a hostname (EX: rosarycatechism.com)
  - Go to your hosts file (C:/Windows/System32/drivers/etc/hosts)
  - Add mapping for 127.1.1.0 rosarycatechism.com
  - Add mapping for your local IP address also
 - See below for more details
  - Official Docs: https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/?view=aspnetcore-2.2
  - Helpful youtube video: https://www.youtube.com/watch?v=ZZfRlBMHds8&t=3s

Run Tests from the ClientApp directory:
 - npm test
 - npm e2e

Template used: https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/angular?view=aspnetcore-2.2&tabs=visual-studio

 steps taken to add bootstrap.js and jquery
  - npm install jquery --save
  - npm install --save-dev @types/jquery
  - Add jquery.min.js to angular-cli.json
  - npm install --save-dev @types/bootstrap
  - declare var $: any;
   - Note: You cannot do import * as $ from 'jquery' since typscript will give you an error if you use the bootstrap augmentations to jquery.