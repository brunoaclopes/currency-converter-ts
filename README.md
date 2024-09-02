# Currency Converter

This is a simple currency converter that converts one currency to another. It uses the [Uphold SDK](https://docs.uphold.com/) to get the exchange rates.

#### You can check out this app in [brunoaclopes.github.io/currency-converter-ts](https://brunoaclopes.github.io/currency-converter-ts/)

## Assessment Challenge

> As a User, I want to see an input amount displayed according to the exchange rates for the different currencies supported by Uphold.

### Mockup

![image](https://github.com/user-attachments/assets/50670d47-894a-4a28-a44f-1877ce51b8f9)

### Acceptance Criteria

- **TC01**: The user input amount should be USD by default.
- **TC02**: Should be able to change between currencies.
- **TC03**: Should update the values for every currency on user interaction using a debounce mechanism.
- **TC04**: Should have all the values cached upon the first request.
- **TC05**: Should make a new API call in the background, re-populating the cached value, when changing between currencies.

### Technical Specs

1. ✅ **MUST** use React.
2. ✅ **MUST** use ES6.
3. ✅ **MUST** list at least 10 different currencies.
4. ✅ **MUST** use the Uphold Javascript SDK.
5. ✅ **MAY** have proper linting tools.
6. ✅ **MAY** use the uphold design system.
7. ✅ **MAY** handle CORS without having to rely on the browser extension.
8. ✅ **MAY** list all available currencies dynamically.
9. ✅ **MAY** implement unit tests.
10. 🔲 **MAY** implement E2E tests.

**Note**: Only **MUST** points are mandatory.

Read more about the [Uphold Open API](https://uphold.com/en/developer/api/documentation/) and the [Uphold Javascript SDK](https://uphold.github.io/uphold-sdk-javascript/actions/ticker/get-ticker.html) to achieve the proposed goal.

### Helpers

#### Initialize Uphold’s SDK

Below there’s the snippet that allows to install and initialize Uphold SDK’s to be used in this exercise.

```javascript
import SDK from '@uphold/uphold-sdk-javascript';

const sdk = new SDK({
    baseUrl: 'http://api-sandbox.uphold.com',
    clientId: 'foo',
    clientSecret: 'bar'
});
```

#### Use create-react-app

To quickly get a project up and running, you can use create-react-app to create the initial project structure for this challenge. 

#### CORS Issues

The [Moesif Origin & CORS Changer](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc?hl=en-US) (or other) extension can be installed to deal with the CORS request restrictions when connecting to our API.

#### Design

The design specifications and assets are available [here](https://drive.google.com/open?id=1yhaoJonAEMbiFJyITqWmuENVG1kkEHMp).

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/brunoaclopes/currency-converter-ts.git
    cd <repository-directory>
    ```

2. Set up your environment variables: Create a `.env.local` file and copy the contents of the `.env.example` file into it.

4. Run the application:

    ```bash
    yarn start
    ```
   
**Notes**:
- The application will be available at `http://localhost:3000`.
- This repo uses yarn pnp and zero-installs, so you shouldn't need to run `yarn install` before running the application. If you end up getting any package related errors when running the application, try running `yarn install`.

## Available Scripts
In the project directory, you can run:  

### `yarn start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.  

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes. Your app is ready to be deployed!

### `yarn lint`

Runs **ESLint** on all **TypeScript** files in the src directory.

## Final Design

![image](https://github.com/user-attachments/assets/f44879d7-6ddd-4ec2-a8f4-d0005e0faf03)
![image](https://github.com/user-attachments/assets/56ed9b4a-c022-411b-bb9e-a93afa22eb4b)


## License

This project is licensed under the MIT License.

